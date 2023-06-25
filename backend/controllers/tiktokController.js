
const asyncHandler = require("express-async-handler");
const fetch = require('node-fetch');
const request = require('request');
const { resolve } = require("path");
const path = require('path');
const { reject } = require("lodash");
const CloudConvert = require('cloudconvert');
const fs = require("fs");
const { response } = require("../app");
const http = require("http");
const axios = require('axios');
const ffmpeg = require('fluent-ffmpeg');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const cloudConvert = new CloudConvert('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTM0ZDJkYzZlMGM4NjdjZWM1MWQ5MWU1OTBmM2ZjMjI3YTA5ZTkyZTZmYWU4YzU5NmQzNmJjMDliMzA4MzZjMTAyM2YyZTg2NjMyZDIxNTMiLCJpYXQiOjE2ODU2Mzc4MjguNDQ3OTIsIm5iZiI6MTY4NTYzNzgyOC40NDc5MjEsImV4cCI6NDg0MTMxMTQyOC40Mzk0NTEsInN1YiI6IjYzODEyMTM1Iiwic2NvcGVzIjpbInVzZXIucmVhZCIsInVzZXIud3JpdGUiLCJ0YXNrLnJlYWQiLCJ0YXNrLndyaXRlIiwid2ViaG9vay5yZWFkIiwid2ViaG9vay53cml0ZSIsInByZXNldC5yZWFkIiwicHJlc2V0LndyaXRlIl19.WSOikJUKNjCULToc6YtYzrILUqMAR_NPpVGnqykqITqCuJI5TvswDmpjJ7M8nY1Tqvs8lQyJ420UDfixAovoP2yM559tcMyF9BolmUfoAWJZnhG24kF4j0sQSbiLCtfKSPtxpIQS1n5FieSOXKc0FlyAljoQANb3vJWHNxPvzXpvbgEbujeyvbq75mJ5t4iSAl5B8bQ6q96Jjx-7gytYweb-3NI9gaV43SyJOhBtNZ_pTxCPO8W_Lcu3EVVTst4-dEED2lPzkhooQiSav1oYLh16fqx1-yAB8sHEarjURL-zrZKwKdMTuCenBTtVGfdVDsY1s2NAqLGyPI78DVvYmjG7i7HEIpcGL9kzWulH50riqbrcYULRd1CnosnICFUyAKVjj2ddGhP0N2We0aMUyZ4ryOEKrgLRMpFQCmf9nNMUpi5Wb3UhbEpyZZUnVai83OlsNHQp68T63Vt4cohS6TXjxS8t5Irea2ccYLkb5GqW81CBCX6RDA_YCd6McKT2V2ZU2kQ2pIYEISMSoKY4oPEB4RF1YJLHUHsTiVzcWOjxL1kViNsMSe4WCZnOJTjrH_tEZ32AL46hT0N6ISGFEYzBszquzCYcZdZUOZcqQ21jgjF5CtQ356vMjH9DeWzFM0HDNYCvW5EZw9vAvh8t0y_e928aFALbdaECtRgD1CE');
const headers = {
    'User-Agent': 'TikTok 26.2.0 rv:262018 (iPhone; iOS 14.4.2; en_US) Cronet'
};



const getIdVideo = (url) => {
    const matching = url.includes("/video/")
    if (!matching) {
        console.log(("[X] Error: URL not found"));
    }
    const idVideo = url.substring(url.indexOf("/video/") + 7, url.length);
    return (idVideo.length > 19) ? idVideo.substring(0, idVideo.indexOf("?")) : idVideo;
}

const getRedirectUrl = async (url) => {
    if (url.includes("vm.tiktok.com") || url.includes("vt.tiktok.com") || url.includes("www.tiktok.com")) {
        url = await fetch(url, {
            redirect: "follow",
            follow: 10,
        });
        url = url.url;
        console.log(("[*] Redirecting to: " + url));
    }
    return url;
}

const getVideoNoWM = async (url) => {
    const idVideo = await getRedirectUrl(url)
    console.log(idVideo, "idVideo")
    const id = await getIdVideo(idVideo)
    const API_URL = `https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${id}`;
    const request = await fetch(API_URL, {
        method: "GET",
        headers: headers
    });
    const body = await request.text();
    try {
        var res = JSON.parse(body);
    } catch (err) {
        console.error("Error:", err);
        console.error("Response body:", body);
    }
    const urlMedia = res.aweme_list[0].video.play_addr.url_list[0]
    const data = {
        url: urlMedia,
        id: idVideo
    }
    return data
}



const downloadMediaFromList = async (list) => {
    const downloadFolder = path.join(require('os').homedir(), 'Downloads');

    if (!fs.existsSync(downloadFolder)) {
        fs.mkdirSync(downloadFolder);
    }



    list.forEach((item) => {
        const fileName = Date.now() + '.mp4';
        const downloadFile = fetch(item.url);
        const filePath = path.join(downloadFolder, fileName);
        const file = fs.createWriteStream(filePath);

        downloadFile.then(res => {
            res.body.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`File downloaded successfully: ${fileName}`,);
                console.log(filePath);
            });
            file.on('error', (err) => console.error(`Error downloading file: ${err}`));
        });
    });
};

exports.donwloadMp4 = asyncHandler(async (req, res, next) => {
    let { url } = req.body;
    try {

        let response = await getVideoNoWM(url);
        return res.status(200).json({
            success: true,
            url: response,
            message: 'DOWNLOAD SUCCESSFULLY.',
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'UnSUCCESSFULLY.',
        });
    }
});


//----------------------------------
exports.convertMp4toMp3 = asyncHandler(async (req, res, next) => {
    ffmpeg.setFfmpegPath(path.join(__dirname, 'path', 'to', 'ffmpeg'));
    let url = req.body.url;

    let response = await getVideoNoWM(url)
    let mp4Url = response.url + ".mp4"
    let outputFilePath = "output.mp3"
    try {
        // Download the MP4 video using youtube-dl
        const { stdout } = await exec(`youtube-dl -x --audio-format mp3 -o "${outputFilePath}" "${mp4Url}"`);

        // Check if the output file exists
        const fileExists = await fs.promises.access(outputFilePath)
            .then(() => true)
            .catch(() => false);

        if (fileExists) {
            // Send the converted MP3 file as a response
            res.download(outputFilePath, 'output.mp3', (err) => {
                if (err) {
                    console.error('Error:', err);
                } else {
                    // Cleanup: Remove the temporary MP3 file
                    fs.unlink(outputFilePath, (err) => {
                        if (err) {
                            console.error('Error:', err);
                        }
                    });
                }
            });
        } else {
            throw new Error('Conversion failed. Output file not found.');
        }
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'An error occurred during conversion.' });
    }
});
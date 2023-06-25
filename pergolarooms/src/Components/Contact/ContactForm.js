import React from "react";
import "../Contact/ContactForm.css";

const ContactForm = () => {
  return (
    <section class="section-padding section-dark">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h4 class="section-title font-face-rb">CONTACT US</h4>
            <h2 class="section-subtitle py-1 font-face-rr">REACH US OUT</h2>
            <p class="section-description font-face-rr">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div class="find-widget py-2 font-face-rr">
              Dubai, United Arab Emirates
            </div>
            <div class="find-widget font-face-rr">
              Sharjah, United Arab Emirates
            </div>
          </div>
          <div class="col-md-6">
            <form
              class="shake"
              role="form"
              // method="post"
              id="contactForm"
              name="contact-form"
            >
              <div class="form-group">
                <label class="control-label font-face-rr" for="email">
                  Your Email Goes Here
                </label>
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  name="email"
                />
              </div>

              <div class="form-group">
                <label for="message" class="control-label font-face-rr">
                  Type Your Message Here
                </label>
                <textarea
                  class="form-control"
                  rows="3"
                  id="message"
                  name="message"
                ></textarea>
              </div>

              <div class="form-submit mt-5 text-end">
                <button class="btn-send font-face-rb">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

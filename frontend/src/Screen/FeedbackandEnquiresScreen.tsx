import React from "react";

function FeedandEnqScreen() {
  return (
    <div
      style={{
        display: "flex",
        margin: "2rem",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <div>
          <div>
            <h3>Email :</h3>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              style={{
                padding: "1rem",
                borderRadius: "1rem",
                borderColor: "lightblue",
              }}
            />
          </div>
          <div>
            <pre></pre>
          </div>
          <div>
            <h3>Feedback :</h3>
            <textarea
              name="textarea"
              id="textarea"
              cols={70}
              rows={30}
              style={{
                borderRadius: "1rem",
                borderColor: "lightblue",
                border: ".1rem lightblue solid",
              }}
            ></textarea>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderColor: "lightblue",
          border: ".1rem lightblue solid",
          padding: "2rem",
          borderRadius: "2rem"
        }}
      >
        <div style={{ padding: "2rem" }}>
          <h2>Enquiry and Follow</h2>
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <ul style={{ display: "flex", width: "100%" }}>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/tolusneh17?t=VT3EkyyynUhfBNVx3Mqjiw&s=09"
              >
                <img
                  src="../images/twitter.png"
                  alt="logo"
                  style={{ width: "3rem", height: "3rem" }}
                />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=2349025549043&text&type=phone_number&app_absent=03"
              >
                <img
                  src="../images/whatsapp.png"
                  alt="logo"
                  style={{ width: "3rem", height: "3rem" }}
                />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://instagram.com/anodatechguy?igshid=NTA5ZTk1NTc="
              >
                <img
                  src="../images/instagram.png"
                  alt="logo"
                  style={{ width: "3rem", height: "3rem" }}
                />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://vm.tiktok.com/ZMFcHAL59/"
              >
                <img
                  src="../images/tiktok.png"
                  alt="logo"
                  style={{ width: "3rem", height: "3rem" }}
                />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://web.facebook.com/tolulope.bamisile.3"
              >
                <img
                  src="../images/facebook.png"
                  alt="logo"
                  style={{ width: "3rem", height: "3rem" }}
                />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://t.snapchat.com/CoqkTB1y"
              >
                <img
                  src="../images/snapchat.png"
                  alt="logo"
                  style={{ width: "3rem", height: "3rem" }}
                />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/tolu2507/"
              >
                <img
                  src="../images/gmail.png"
                  alt="logo"
                  style={{ width: "3rem", height: "2rem" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeedandEnqScreen;

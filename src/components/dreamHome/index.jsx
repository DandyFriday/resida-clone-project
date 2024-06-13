import React from "react";
import "./dreamHomeStyles.css";
import dh_image from "../../assets/dh_image.png";
import Button from "../../shared/button";

const DreamHome = () => {
  return (
    <div className="dh_container flex">
      {/* left */}
      <section className="dh_image_section">
        <img src={dh_image} alt="dream_home_img" className="image" />
      </section>

      {/* right */}
      <section className="dh_text_section">
        <div>
          <p>{"Your dream home is only a few clicks away"}</p>
        </div>

        <div>
          <span>{"- Find your space now!"}</span>
        </div>

        <div className="dh_button">
          <Button
            style={{
              width: "100%",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#1B2056",
              borderRadius: "8px",
              padding: "10px 20px",
              backgroundColor: "#fff",
            }}
            btn_name={"Download app"}
          />
        </div>
      </section>
    </div>
  );
};

export default DreamHome;
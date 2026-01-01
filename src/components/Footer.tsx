import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div>
      <div className="flex gap-15 mt-50 align-middle items-center">
        <div className="big uppercase text-[10rem] max-w-md mb-10 ">
          <div
            style={{ letterSpacing: "-0.5rem" }}
            className="tracking-[-0.2rem]"
          >
            Let's
          </div>
        </div>
        <div>
          <div className="regularFont text-3xl uppercase mb-5 text-end  max-w-xl">
            I'm always interested about
          </div>
          <div className="flex max-w-4xl flex-wrap gap-2  items-end justify-center">
            <Button text="Ui/Ux design" />
            <Button text="Frontend Development" />
            <Button text="Webflow Development" />
            <Button text="Digital consultant" />
            <Button text="Wordpress development" />
            <Button text="New Business" />
            <Button text="startups" />
            <Button text="pizza" />
          </div>
        </div>
      </div>
      <div className="flex items-end mb-8 gap-5">
        <div className="big uppercase text-[10rem] max-w-md">
          <div
            style={{ letterSpacing: "-0.5rem" }}
            className="tracking-[-0.2rem]"
          >
            Connect
          </div>
        </div>
        <div>
          <div className="flex items-center mb-5 gap-3">
            <div className="text-[1.7rem] uppercase">Are you minding a project?</div>
            <Button text="contact me" />
          </div>
          <hr />
          <div className="flex w-3xl justify-between text-xl items-center mt-2">
            <div className="flex gap-10 list-none uppercase">
              <li>Dribble</li>
              <li>Behance</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </div>
            <div>credit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

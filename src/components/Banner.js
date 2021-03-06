import React from "react";
import { Link } from "react-scroll";

import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Md Alishan Ali",
    text: " Full Stack Developer Web Developer",
  });
  return (
    <header className="header home">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <a
                    href="https://www.linkedin.com/in/md-alishan-ali-251614222/"
                    target="_blank"
                  >
                    <li>
                      <FaLinkedin className="contactIcon" />
                    </li>
                  </a>
                  <a href="https://github.com/mdalishanali" target="_blank">
                    <li>
                      <FaGithub className="contactIcon" />
                    </li>
                  </a>
                  <a href="https://twitter.com/MDALISHANALI2" target="_blank">
                    <li>
                      <FaTwitter className="contactIcon" />
                    </li>
                  </a>

                  <a href="https://leetcode.com/mdalishanali/" target="_blank">
                    <li>
                      <SiLeetcode className="contactIcon" />
                    </li>
                  </a>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a
                    href="https://drive.google.com/file/d/1pQ2smG42nDj35JwE7YQ-gc8C_IpUHNFU/view?usp=sharing"
                    target="_blank"
                    className="btn btn-outline"
                  >
                    Get Resume
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <Link spy={true} smooth={true} duration={500} to={"about"}>
                    <a href="" className="btn btn-smart">
                      {/* <FaPlay className="play" /> */}
                      About Me
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              {/* <img src={state.image} alt="man" /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;

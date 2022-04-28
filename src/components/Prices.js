import React from "react";

import { ImNewTab } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
const Prices = () => {
  const [header] = React.useState({
    mainHeader: "Project",
    subHeading: "MERN Stack Project",
    text: "These all the projects are developed using MERN Stack..",
  });
  const [state] = React.useState([
    {
      id: 1,
      poster: "https://miro.medium.com/max/1400/1*mP0QwOMJF6Grbvto-RqYiQ.gif",
      heading: "UrbanLadder-Clone",
      desc: "This project is a clone of UrbanLadder.com” where we can buy funrniture goods.I had some coll features like product sorting ans good UI..",
      tech: "MongoDB, Express, React,NodeJs ",
      deploy: "https://urban-ladder.vercel.app/",
      github: "https://github.com/pidugu45/Urban-Ladder-Clone",
    },
    {
      id: 2,
      poster:
        "https://cdn-images-1.medium.com/max/1000/1*6J5mEtUtjouxEQ017UFTsg.gif",
      heading: "Westside Clone",
      desc: "This website is a clone of Westside.com” in which I implemented some cool functionalities product sorting and multiple filters, add to cart function, and many more.",
      tech: "HTML,CSS, ADVANCE JS, ",
      deploy: "https://westside-ecommerce-clone.vercel.app/",
      github: "https://github.com/mdalishanali/Westside-ecommerce-Clone",
    },
    {
      id: 3,
      poster: "https://miro.medium.com/max/1400/1*XI3CIMKg7XZUdz_SwTqO7g.png",
      heading: "Croma Clone",
      desc: "This website is a clone of Westside.com” in which I implemented some cool functionalities product sorting and multiple filters, add to cart function, and many more.",
      tech: "HTML,CSS,ADVANCE JS",
      deploy: "https://dazzling-ardinghelli-bb8d54.netlify.app/",
      github: "https://github.com/mdalishanali/croma1",
    },
    {
      id: 4,
      poster: "https://miro.medium.com/max/875/1*8farmZ1eExB6e9xTOVsmAQ.png",
      heading: "Youtube Clone",
      desc: "YouTube is an American online video sharing and social media platform.I had created this project using youtube api. ",
      tech: "HTML,CSS,ADVANCE JS",
      deploy: "https://youtube-clone-search.vercel.app/",
      github: "https://github.com/mdalishanali/YoutubeCloneSearch",
    },
  ]);
  return (
    <div className="prices project">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>

        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="price__rs">
                  <img
                    src={prices.poster}
                    alt="poster"
                    heigh="50px"
                    width="100%"
                    border="10px solid white"
                  />
                </div>
                <div className="priceHeading projectName">{prices.heading}</div>

                <ul>
                  <li className="priceHeading">{prices.desc}</li>

                  <li>{`Tech Stack: ${prices.tech}`}</li>
                </ul>
                <div className="price__btn">
                  <a
                    href={prices.deploy}
                    target="_blank"
                    className="link1 btn btn-outline1"
                  >
                    <ImNewTab fontSize="15px" /> Deploy Link
                  </a>
                  <a
                    href={prices.github}
                    target="_blank"
                    className="btn btn-outline1"
                  >
                    <FaGithub /> GitHub Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;

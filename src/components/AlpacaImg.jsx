/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import backgroundsObj from "../elements/backgroundsObj";
import hairObj from "../elements/hairObj";
import earsObj from "../elements/earsObj";
import eyesObj from "../elements/eyesObj";
import mouthObj from "../elements/mouthObj";
import neckObj from "../elements/neckObj";
import legObj from "../elements/legObj";
import nose from "../images/nose.png";
import accessoriesObj from "../elements/accesoriesObj";

const AlpacaImg = () => {
  const [activeButton, setActiveButton] = useState("hair");
  const [hair, setHair] = useState("basic");
  const [ears, setEars] = useState("basic");
  const [eyes, setEyes] = useState("basic");
  const [mouth, setMouth] = useState("basic");
  const [neck, setNeck] = useState("basic");
  const [leg, setLeg] = useState("basic");
  const [accesories, setAccesories] = useState("headphone");
  const [background, setBackground] = useState("blue50");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const changeHair = (event) => {
    setHair(event.target.innerHTML);
  };

  const changeEars = (event) => {
    setEars(event.target.innerHTML);
  };

  const changeEyes = (event) => {
    setEyes(event.target.innerHTML);
  };

  const changeMouth = (event) => {
    setMouth(event.target.innerHTML);
  };

  const changeNeck = (event) => {
    setNeck(event.target.innerHTML);
  };

  const changeLeg = (event) => {
    setLeg(event.target.innerHTML);
  };

  const changeAccesories = (event) => {
    setAccesories(event.target.innerHTML);
  };

  const changeBackground = (event) => {
    setBackground(event.target.innerHTML);
  };

  const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const randomize = () => {
    const hair = ["basic", "bang", "curls", "short", "elegant", "quiff"];
    const ears = ["basic", "tiltBackward", "tiltForward"];
    const eyes = ["basic", "angry", "naughty", "panda", "smart", "star"];
    const mouth = ["basic", "astonished", "eating", "laugh", "tongue"];
    const neck = ["basic", "thick", "bendBackward", "bendForward"];
    const leg = [
      "basic",
      "bubble",
      "cookie",
      "gameConsole",
      "tiltBackward",
      "tiltForward",
    ];
    const accesories = ["earings", "flower", "glasses", "headphone"];
    const background = ["red50", "green50", "blue50", "yellow50", "darkblue50"];

    setHair(random(hair));
    setEars(random(ears));
    setEyes(random(eyes));
    setMouth(random(mouth));
    setNeck(random(neck));
    setLeg(random(leg));
    setAccesories(random(accesories));
    setBackground(random(background));
  };

  return (
    <div className="flex gap-4">
      <img className="absolute w-96" src={backgroundsObj[background]}></img>
      <img className="absolute w-96 " src={hairObj[hair.toLowerCase()]}></img>
      <img className="absolute w-96 " src={earsObj[ears]}></img>
      <img
        className="absolute w-96  z-10"
        src={eyesObj[eyes.toLowerCase()]}
      ></img>
      <img className="absolute w-96  z-10" src={nose}></img>

      <img
        className="absolute w-96  z-10"
        src={mouthObj[mouth.toLowerCase()]}
      ></img>
      <img className="absolute w-96 " src={neckObj[neck]}></img>
      <img className="absolute w-96 " src={legObj[leg]}></img>

      <img
        className="absolute w-96  z-10"
        src={accessoriesObj[accesories.toLowerCase()]}
      ></img>

      <div className="absolute left-[410px] h-96 text-2xl">
        <div>
          <h2 className="font-bold text-2xl mt-2">ACCESSORIZE THE ALPACA'S</h2>
          <div className="grid mt-4 mb-4 grid-cols-3 gap-4 w-[540px]">
            <button
              className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
              onClick={() => handleButtonClick("hair")}
            >
              Hair
            </button>
            <button
              className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
              onClick={() => handleButtonClick("ears")}
            >
              Ears
            </button>
            <button
              className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
              onClick={() => handleButtonClick("eyes")}
            >
              Eyes
            </button>
            <button
              className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
              onClick={() => handleButtonClick("mouth")}
            >
              Mouth
            </button>
            <button
              className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
              onClick={() => handleButtonClick("neck")}
            >
              Neck
            </button>
            <button
              className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
              onClick={() => handleButtonClick("leg")}
            >
              Leg
            </button>
            <button
              className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
              onClick={() => handleButtonClick("accesories")}
            >
              Accesories
            </button>

            <button
              className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
              onClick={() => handleButtonClick("background")}
            >
              Background
            </button>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-2xl mb-4">STYLE</h2>

          {activeButton === "hair" && (
            <div className="grid grid-cols-3 gap-4 w-[540px]">
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeHair}
              >
                Basic
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeHair}
              >
                Curls
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeHair}
              >
                Short
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeHair}
              >
                Bang
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeHair}
              >
                Elegant
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeHair}
              >
                Quiff
              </button>
            </div>
          )}
          {activeButton === "ears" && (
            <div className="grid grid-cols-3 gap-4 w-[540px]">
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeEars}
              >
                basic
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeEars}
              >
                tiltBackward
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeEars}
              >
                tiltForward
              </button>
            </div>
          )}
          {activeButton === "eyes" && (
            <div className="grid grid-cols-3 gap-4 w-[540px]">
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeEyes}
              >
                Basic
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeEyes}
              >
                Angry
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeEyes}
              >
                Naughty
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeEyes}
              >
                Panda
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeEyes}
              >
                Smart
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeEyes}
              >
                Star
              </button>
            </div>
          )}
          {activeButton === "mouth" && (
            <div className="grid grid-cols-3 gap-4 w-[540px]">
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeMouth}
              >
                Basic
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeMouth}
              >
                Astonished
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeMouth}
              >
                Eating
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeMouth}
              >
                Laugh
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeMouth}
              >
                Tongue
              </button>
            </div>
          )}

          {activeButton === "neck" && (
            <div className="grid grid-cols-3 gap-4 w-[540px]">
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeNeck}
              >
                basic
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeNeck}
              >
                thick
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeNeck}
              >
                bendBackward
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeNeck}
              >
                bendForward
              </button>
            </div>
          )}

          {activeButton === "leg" && (
            <div className="grid grid-cols-3 gap-4 w-[540px]">
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeLeg}
              >
                basic
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeLeg}
              >
                bubbleTea
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeLeg}
              >
                cookie
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeLeg}
              >
                gameConsole
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeLeg}
              >
                tiltBackward
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeLeg}
              >
                tiltForward
              </button>
            </div>
          )}

          {activeButton === "accesories" && (
            <div className="grid grid-cols-3 gap-4 w-[540px]">
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeAccesories}
              >
                Earings
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeAccesories}
              >
                Flower
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeAccesories}
              >
                Glasses
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeAccesories}
              >
                Headphone
              </button>
            </div>
          )}
          {activeButton === "background" && (
            <div className="grid grid-cols-3 gap-4 w-[540px]">
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeBackground}
              >
                blue50
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeBackground}
              >
                darkblue50
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeBackground}
              >
                green50
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeBackground}
              >
                red50
              </button>
              <button
                className="w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
                onClick={changeBackground}
              >
                yellow50
              </button>
            </div>
          )}

          <button
            className="text-2xl absolute right-[565px] top-[400px] w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
            onClick={randomize}
          >
            Random
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlpacaImg;

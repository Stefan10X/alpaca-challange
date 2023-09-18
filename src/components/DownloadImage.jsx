/* eslint-disable react/prop-types */
import { useRef } from "react";
import { toPng } from "html-to-image";

const DownloadImage = ({ image }) => {
  const divRef = useRef(null);

  const downloadDivAsImage = () => {
    const divToCapture = divRef.current;

    toPng(divToCapture)
      .then(function (dataUrl) {
        const downloadLink = document.createElement("a");
        downloadLink.href = dataUrl;
        downloadLink.download = "myDivCapture.png";
        downloadLink.click();
      })
      .catch(function (error) {
        console.error("Eroare la generarea imaginii:", error);
      });
  };

  return (
    <div>
      <div className="w-96 h-96" ref={divRef}>
        {image}
      </div>

      <button
        className="absolute top-[385px] text-2xl mt-4 w-44 bg-white border-2 border-black rounded-lg hover:bg-gray-200"
        onClick={downloadDivAsImage}
      >
        Download
      </button>
    </div>
  );
};

export default DownloadImage;

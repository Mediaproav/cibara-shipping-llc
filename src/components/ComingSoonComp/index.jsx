import React from "react";
import Image from "next/image";
import CibaraLogo from "../../assets/Cibara_Logo-White.png";
import BgImage from "../../assets/shipping-bg.jpg";

const index = () => {
  const bgStyle = {
    backgroundImage: `url(${BgImage.src})`,
    boxShadow: "0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,.7)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
  };
  return (
    <div
      className="fade-in flex flex-col items-center justify-center h-screen"
      style={bgStyle}
    >
      <Image src={CibaraLogo} width={200} height={200} alt="" />
      <h1 className="mt-[90px] font-thin text-4xl tracking-widest">
        Coming Soon
      </h1>

      <p className="text-sm mt-5">
        We are currently working on the pages.
      </p>
    </div>
  );
};

export default index;

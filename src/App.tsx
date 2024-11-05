import React, { useState } from "react";
import background from "./background.png";
import xIcon from "./X.svg";
import fireIcon from "./fire.svg";
import ethLogo from "./ETH_logo.svg";
import sethLogo from "./sETH_logo.svg";
import "./App.css";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <img
        onClick={() => setIsOpened(!isOpened)}
        src={background}
        alt="Background"
        className={`object-scale-down w-[1920px] h-[1080px] ${
          isOpened ? "blur-sm" : ""
        }`}
      />

      {isOpened && (
        <div className="fixed flex w-[553px] h-[434px] bg-[#0a0f16] rounded-[13.33px] border-[1.07px] border-solid border-[#374155] p-4 space-y-4">
          <div className="flex flex-col mx-auto">
            <div className="flex justify-between my-auto">
              <div className="font-inter font-semibold text-2xl text-white">
                Select from
              </div>
              <img className="cursor-pointer" src={xIcon} alt="Close" onClick={() => setIsOpened(false)} />
            </div>
            <div className="w-[493px] h-[255px] my-auto">
              <div className="flex flex-col justify-between w-[494px] h-64 bg-[#121923] rounded-[13.33px] border-[1.07px] border-solid border-[#364052]">
                <div className="flex justify-between p-3">
                  <div className="flex flex-row">
                    <img src={ethLogo} />
                    <span className="text-[#929DAE] text-4xl my-auto ml-3 font-medium font-inter">ETH</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-white text-xl font-semibold font-inter">1</span>
                    <span className="text-[#929DAE] text-xl font-semibold font-inter">$3,520</span>
                  </div>
                </div>
                <div className="w-[493px] h-[1px] bg-[#364052]" />
                <div className="flex justify-between p-3 ">
                <div className="flex flex-row ">
                    <img src={ethLogo} />
                    <span className="text-[#929DAE] text-4xl my-auto ml-3 font-medium font-inter">WETH</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-white text-xl font-semibold font-inter">0.5</span>
                    <span className="text-[#929DAE] text-xl font-semibold font-inter">$1,750</span>
                  </div>
                </div>
                <div className="w-[493px] h-[1px] bg-[#364052]" />
                <div className="flex justify-between p-3">
                <div className="flex flex-row ">
                    <img src={sethLogo} />
                    <span className="text-[#929DAE] text-4xl my-auto ml-3 font-medium font-inter">sETH</span>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-white text-xl font-semibold font-inter">10</span>
                    <span className="text-[#929DAE] text-xl font-semibold font-inter">$35,200</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[493px] h-[47px] my-auto">
              <div className="flex justify-center fixed w-[495px] h-[46px] rounded-[23.35px] border-[1.6px] border-solid border-[#94ff0b] mx-auto">
                <img src={fireIcon} alt="Fire" className="m-3" />
                <p className="font-inter font-medium my-auto text-[17.07px] leading-[16.7px] text-white ml-0">
                  Use your Vault Asset 
                </p>
                <p className="font-inter underline underline-offset-4 font-medium my-auto text-[17.07px] leading-[16.7px] text-white mx-1">
                without
                </p>
                <p className="font-inter font-medium my-auto text-[17.07px] leading-[16.7px] text-white mr-auto">
                   interrupting your streak.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
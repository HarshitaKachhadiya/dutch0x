import Image from "next/image";
import React from "react";
import { Ellipse, Mail, Notification, Search, User, Vector } from "./AllSVG";

const Navbar = () => {
  return (
    <>
      <div className="h-[293px] w-full flex flex-col bg-[#FFFFFF] border-b border-[#0000001a] shadow-[0px,1px,2px,rgba(0,0,0,0.06)]">
        <div className="flex p-6 justify-between items-center lg:gap-[65px] 2xl:gap-[70px] gap-14">
          <Image
            className="w-[145.31px] h-9"
            src={require("../assets/images/logo.png")}
            alt="logo"
          />
          <ul className="text-base font-normal text-dark flex items-center justify-start lg:gap-[65px] 2xl:gap-[70px] gap-14">
            <li className="font-bold text-[#000000] relative">
              Dashboard{" "}
              <Ellipse
                color="#FF4800"
                className="absolute left-[calc(50%-5px/2+0.05px)] top-6"
              />
            </li>
            <li>Create</li>
            <li className="relative">
              Marketplace
              <span className="absolute left-[0.45px] top-5 font-medium text-xs text-[#FF4800]">
                Coming soon
              </span>
            </li>
            <li>Learn</li>
          </ul>
          <div className="flex items-center py-[6px] pr-[6px] pl-4 border border-secondary rounded-lg h-9 justify-between">
            <div className="flex items-center gap-[10px] lg:w-[631.69px] w-[500px]">
              <Search />
              <input
                className="w-full h-6 text-base text-dark font-normal"
                type="text"
                placeholder="Find Holders"
              />
            </div>
            <div className="bg-secondary rounded-sm px-2">
              <span>/</span>
            </div>
          </div>
          <button className="py-1 px-2 flex items-center justify-center gap-1 font-bold text-xs text-[#3CAA2A] h-[26px] bg-[#3caa2a33] rounded">
            <Ellipse color="#3CAA2A" /> STATUS
          </button>
          <div className="flex items-between lg:gap-[70px] gap-14">
            <Notification />
            <Mail />
            <User />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4 px-6">
          <div>
            <div className="h-[151px] bg-[#c0eec0] rounded-lg flex justify-center items-center">
              <div className="bg-[#2EC62E] w-[60px] h-[74px] rounded-lg flex justify-between items-center">
                <div className="relative w-[45px] h-[55px]">
                  <Image
                    className="absolute top-0 left-[15px]"
                    src={require("../assets/images/NFTPolygon.png")}
                    alt="NETPolygon"
                  />
                  <Image
                    className="absolute top-[5px] left-[20px]"
                    src={require("../assets/images/SmPolygon.png")}
                    alt="SmPolygon"
                  />
                  <Image
                    className="absolute bottom-0 left-[12px]"
                    src={require("../assets/images/NFT.png")}
                    alt="NET"
                  />
                </div>
              </div>
            </div>
            <p className="font-bold text-base text-black items-center flex justify-center p-2">
              NFT Management
            </p>
          </div>
          <div>
            <div className="h-[151px] bg-[#fdf7d5] rounded-lg flex justify-center items-center">
              <div className="relative w-[45px] h-[45px]">
                <Image
                  className="absolute top-0 left-[-15px]"
                  src={require("../assets/images/FindHolderCircle.png")}
                  alt="FindHolderCircle"
                />
                <Image
                  className="absolute top-0 left-[15px]"
                  src={require("../assets/images/FindHolderCircle.png")}
                  alt="FindHolderCircle"
                />
              </div>
            </div>
            <p className="font-bold text-base text-black items-center flex justify-center p-2">
              Find Holders
            </p>
          </div>
          <div>
            <div className="h-[151px] bg-[#d5f3f8] rounded-lg flex justify-center items-center">
              <Image
                className="w-[48px] h-[48px]"
                src={require("../assets/images/AirdropRectangle.png")}
                alt="AirdropRectangle"
              />
            </div>
            <p className="font-bold text-base text-black items-center flex justify-center p-2">
              Airdrop
            </p>
          </div>
          <div>
            <div className="h-[151px] bg-[#eddbf4] rounded-lg flex justify-center items-center">
              <div className="w-[43px] h-[43px] relative">
                <Image
                  className="pb-1 absolute top-[-5px] left-[-7px]"
                  src={require("../assets/images/UpRectangle.png")}
                  alt="UpRectangle"
                />
                <Image
                  className="absolute top-[25px] left-[7px]"
                  src={require("../assets/images/DonwRectangle.png")}
                  alt="DonwRectangle"
                />
              </div>
            </div>
            <p className="font-bold text-base text-black items-center flex justify-center p-2">
              Trade-in
            </p>
          </div>
          <div>
            <div className="h-[151px] bg-[#fcdcef] rounded-lg flex justify-center items-center">
              <Image
                className="w-[50px] h-[50px]"
                src={require("../assets/images/SalesPolygon.png")}
                alt="SalesPolygon"
              />
            </div>
            <p className="font-bold text-base text-black items-center flex justify-center p-2">
              Sales
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-4 p-6 bg-[#F5F5F5]">
        <div className="col-span-8">
          <p className="text-2xl font-normal text-[#00000080]">Events</p>
          <div className="p-6">
            <div className="flex items-center px-1 pr-2 pl-0 gap-1 w-[86px] h-[28px] bg-[#3CAA2A] rounded-lg text-[#FFFFFF] text-xs font-bold">AIRDROP</div>
            <div className="flex items-center p-1 gap-2 bg-[#0000001a] rounded-lg w-24">
              <Vector />
              <p className="text-sm font-bold text-[#000000]">Harvest</p>
            </div>
          </div>
        </div>
        <div className="col-span-4"></div>
      </div>
    </>

    // <div className='grid grid-cols-5 justify-start items-start p-6 w-full h-[293px] bg-[#FFFFFF] border-b border-[#0000001a] shadow-[0px,1px,2px,rgba(0,0,0,0.06)] !pr-7'>
    //   <div className='col-span-2 w-full items-center h-9'>
    //     <ul className='text-base font-normal text-dark flex items-center justify-start lg:gap-12 '>
    //       <Image className='w-[145.31px] h-9' src={require("../assets/images/logo.png")} alt="logo" />
    //       <li className='font-bold text-[#000000] relative'>Dashboard <Ellipse color="#FF4800" className="absolute left-[calc(50%-5px/2+0.05px)] top-6" /></li>
    //       <li>Create</li>
    //       <li className='relative'>Marketplace<span className='absolute left-[0.45px] top-4 font-medium text-xs text-[#FF4800]'>Coming soon</span></li>
    //       <li>Learn</li>
    //     </ul>
    //   </div>
    //     <div className='flex items-center w-full h-9 col-span-3 justify-between'>
    //     <div className='flex items-center py-[6px] pr-[6px] pl-4 border border-secondary rounded-lg w-auto lg:w-[550px] h-9 justify-between'>
    //       <div className='flex items-center gap-[10px]'>
    //       <Search />
    //       <input className='w-full h-6 text-base text-dark font-normal' type="text" placeholder='Find Holders' />
    //       </div>
    //       <div className='bg-secondary rounded-sm px-2'>
    //         <span>/</span>
    //       </div>
    //     </div>
    //     <button className='py-1 px-2 flex items-center justify-center gap-1 font-bold text-xs text-[#3CAA2A] h-[26px] bg-[#3caa2a33] rounded'><Ellipse color="#3CAA2A" /> STATUS</button>
    //     <div className='flex items-center justify-between gap-14'>
    //       <Notification />
    //       <Mail />
    //       <User />
    //     </div>
    //     </div>
    // </div>
  );
};

export default Navbar;

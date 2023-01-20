import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="mt-16 max-w-8xl">
      <section className="bg-[#EBECEF] lg:p-10 p-5 flex  lg:flex-row md:flex-row justify-between ">
        {/* grid--1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 lg:w-[65%] md:w-[65%] w-[55%]  ">
          <div>
            <h4 className="font-extrabold text-sm text-black mb-5">CONTACT</h4>
            <p className="">16516</p>
            <p className="mb-3">info@sheba.xyz</p>
            <p>Corporate Address</p>
            <p>House # 57, Road # 25, Block - A, Banani, Dhaka 1212</p>
          </div>
          <div>
            <h4 className="font-extrabold text-sm text-black mb-5">
              OTHER PAGES
            </h4>
            <p className="hover:font-bold mb-3">
              <Link to={"/"}>Blog</Link>
            </p>
            <p className="hover:font-bold mb-3">
              <Link to={"/"}>Help</Link>
            </p>
            <p className="hover:font-bold mb-3">
              <Link to={"/"}>Terms of use</Link>
            </p>
            <p className="hover:font-bold mb-3">
              <Link to={"/"}>Privacy Policy</Link>
            </p>
            <p className="hover:font-bold mb-3">
              <Link to={"/"}>Sitemap</Link>
            </p>
          </div>
          <div>
            <h4 className="font-extrabold text-sm text-black mb-5">COMPANY</h4>
            <p className="hover:font-bold mb-3">
              <Link to={"/"}>sManager</Link>
            </p>
            <p className="hover:font-bold mb-3">
              <Link to={"/"}>sBusiness</Link>
            </p>
            <p className="hover:font-bold mb-3">
              <Link to={"/"}>sDelivery</Link>
            </p>
            <p className="hover:font-bold mb-3">
              <Link to={"/"}>sBondhu</Link>
            </p>
          </div>
        </div>
        {/* grid--2 */}
        <div className="lg:text-end text-start lg:w-[32%] md:w-[33%] w-[42%] ">
          <h3 className="font-bold text-black mb-3">DOWNLOAD OUR APP</h3>
          <p>
            Tackle your to-do list wherever you are with our mobile app & make
            your life easy.
          </p>
          <div className="grid grid-cols-2 gap-2 py-2 ">
            <ExternalLink href="https://www.apple.com/shop/buy-watch">
              <img
                src={
                  "https://cdn-shebadev.s3.ap-south-1.amazonaws.com/sheba_xyz/app-store.png"
                }
                alt="apple store"
              />
            </ExternalLink>
            <ExternalLink href="https://play.google.com/store/apps/details?id=com.shazam.android&hl=en&gl=US">
              <img
                src={
                  "https://cdn-shebadev.s3.ap-south-1.amazonaws.com/sheba_xyz/play-store.png"
                }
                alt="google store"
              />
            </ExternalLink>
          </div>
          <div className="flex items-center lg:justify-end md:justify-end justify-center">
            <ExternalLink
              href="https://www.facebook.com/sholayman.sojib.7/"
              className=" lg:text-[2.6rem] text-[1.6rem] hover:text-black "
            >
              <RiFacebookCircleLine />
            </ExternalLink>
            <ExternalLink
              href="https://www.instagram.com/iam_shs/"
              className="lg:text-[2.6rem] text-[1.6rem] hover:text-black mx-2 "
            >
              <RiInstagramLine />
            </ExternalLink>
            <ExternalLink
              href="https://www.linkedin.com/in/md-sholayman-626776229/"
              className="lg:text-[3rem] text-[2rem] hover:text-black"
            >
              <TiSocialLinkedinCircular />
            </ExternalLink>
          </div>
        </div>
      </section>
      <div className=" text-black mb-4 lg:mb-0 bg-[#DFE0E3] text-center py-6 ">
        Copyright <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> {year}{" "}
    <span className=" font-bold ">RockAuto</span>
      </div>
    </footer>
  );
};

export default Footer;

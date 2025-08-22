import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="footer bg-black footer-horizontal footer-center text-primary-content p-10">
      <aside>
        <div className="flex justify-center items-center -ml-4 md:px-4">
          <div className="-mr-3">
            <GiClothes size={20} />
          </div>
          <p className="text-lg md:text-2xl font-semibold">
            <a className="btn btn-ghost text-xl">
              Genz <span className="text-yellow-500 -ml-1">Wear</span>
            </a>
          </p>
        </div>

        <p className="font-medium">
          Your style journey starts here.
          <br />
          Trendy clothing and fashion essentials since 2020.
        </p>

        <div className="mt-2 text-sm leading-6">
          <p>
            Email:{" "}
            <a href="mailto:contact@genzwear.com" className="underline">
              contact@genzwear.com
            </a>
          </p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>

        <p className="mt-2">
          Copyright © {new Date().getFullYear()} - All rights reserved - arafatMr
        </p>
      </aside>

      <div className="flex gap-10">
        <p>
          <a href="#">Terms and Condition</a>
        </p>
        <p>
          <a href="#">Privacy Policy</a>
        </p>
      </div>

      <nav>
        <div className="flex gap-10">
          <a href="https://github.com/arafat-mr" target="blank">
            <BsGithub size={30} />
          </a>
          <a href="https://www.facebook.com/share/1GtzAe3ho9/" target="blank">
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.instagram.com/4rafat.mr?igsh=MW83ZnkybW0wZjkycg=="
            target="blank"
          >
            <BsInstagram size={30} />
          </a>
          <a
            href="https://youtube.com/@arafatmr-n3i?si=8NfuSWk5w2WlRYrg"
            target="blank"
          >
            <FaYoutube size={30} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

import React, { useRef, useState } from "react";
import {
  FooterContainer,
  LogoContainer,
  SearchContainer,
  SiteCreditsWrapper,
  SocialMediaContainer,
} from "./styles";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const Footer = () => {
  const searchInputRef = useRef(null);

  const [changeSearchInputColor, setChangeSearchInputColor] = useState(false);

  return (
    <FooterContainer>
      <LogoContainer>
        <Image
          width={40}
          height={40}
          alt="Apple Corps Logo"
          src="https://www.thebeatles.com/themes/custom/thebeatles_bs4/img/apple_corps_retina.png"
        />
        <span>COPYRIGHT © APPLE CORPS 2023</span>
      </LogoContainer>
      <SocialMediaContainer>
        <a href="https://twitter.com/thebeatles">
          <p>
            <FaTwitter />
          </p>
        </a>
        <a href="https://www.instagram.com/thebeatles/">
          <p>
            <FaInstagram />
          </p>
        </a>
        <a href="https://www.facebook.com/Beatles">
          <p>
            <FaFacebookF />
          </p>
        </a>
        <a href="https://www.youtube.com/thebeatles">
          <p>
            <FaYoutube />
          </p>
        </a>
      </SocialMediaContainer>
      <SearchContainer
        style={
          changeSearchInputColor
            ? { border: "2px solid #579a18" }
            : { border: "2px solid gray" }
        }
      >
        <label className="active-input">
          <BiSearch color={changeSearchInputColor ? "#579a18" : "gray"} />
          <input
            onFocus={() => setChangeSearchInputColor(!changeSearchInputColor)}
            onBlur={() => setChangeSearchInputColor(!changeSearchInputColor)}
            ref={searchInputRef}
            type="text"
          />
        </label>
      </SearchContainer>
      <SiteCreditsWrapper>
        <p>CONTACT US</p>
        <p>PRIVACY</p>
        <p>CREDITS</p>
        <p>TERMS</p>
      </SiteCreditsWrapper>
    </FooterContainer>
  );
};

export default Footer;

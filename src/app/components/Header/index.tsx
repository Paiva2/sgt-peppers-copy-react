"use client";

import React from "react";
import { HeaderComponent, LogoWrapper, NavBar } from "./styles";
import Logo from "./Logo";

const Header = () => {
  return (
    <HeaderComponent>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <NavBar>
        <ul>
          <li>
            <a>ALBUMS</a>
          </li>
          <li>
            <a>MUSIC VIDEOS</a>
          </li>
          <li>
            <a>NEWS</a>
          </li>
          <li>
            <a>FILMS</a>
          </li>
          <li>
            <a>SONGS</a>
          </li>
          <li>
            <a>FEATURES</a>
          </li>
          <li>
            <a>STORE</a>
          </li>
          <li>
            <a>NEWSLETTER</a>
          </li>
          <li>
            <a>THE BEATLES LOVE</a>
          </li>
        </ul>
      </NavBar>
    </HeaderComponent>
  );
};

export default Header;

"use client";

import React, { useState } from "react";
import { HeaderComponent, LogoWrapper, NavBar } from "./styles";
import Logo from "./Logo";
import { List, X } from "@phosphor-icons/react";

const Header = () => {
  const [toggleDropDownMenu, setToggleDropDownMenu] = useState(false);

  return (
    <HeaderComponent>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <NavBar>
        {!toggleDropDownMenu ? (
          <List
            className="menu-hamburguer"
            onClick={() => setToggleDropDownMenu(!toggleDropDownMenu)}
            size={35}
            weight="bold"
          />
        ) : (
          <X
            className="menu-hamburguer"
            size={35}
            onClick={() => setToggleDropDownMenu(!toggleDropDownMenu)}
          />
        )}
        <ul
          style={toggleDropDownMenu ? { visibility: "visible", opacity: "1" } : {}}
        >
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

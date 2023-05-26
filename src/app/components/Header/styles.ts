import { devices } from "@/globalStyles";
import { styled } from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  padding: 0 5%;
  position: fixed;
  width: 100%;
  height: 5rem;
  z-index: 1;
  background: #fff;
  box-shadow: 0 1px 10px rgba(83, 82, 80, 0.33);
  gap: 3.25rem;
`;

export const LogoWrapper = styled.div`
  svg {
    width: 98px;
    height: 50px;
  }
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media only screen and (${devices.sm}) {
    position: relative;
  }

  .menu-hamburguer {
    opacity: 0;
    visibility: hidden;

    @media only screen and (${devices.sm}) {
      opacity: 1;
      visibility: visible;
    }
  }

  ul {
    display: flex;
    height: 100%;
    transition: all 0.3s ease;

    li {
      display: list-item;
      list-style: none;
      color: #535353;
      font-size: 0.875rem;
      line-height: 20px;
      font-weight: 200;
      border-left: 1px solid #f7f7f7;
      padding: 0 18px;
      height: 100%;
      cursor: pointer;

      &:hover {
        background-color: #f7f7f7;
      }

      a {
        display: flex;
        align-items: center;
        height: 100%;

        @media only screen and (${devices.sm}) {
          display: unset;
        }
      }

      @media only screen and (${devices.sm}) {
        border-left: none;
        border-bottom: 1px solid #f7f7f7;
        padding: 10px;
        width: 100vw;
      }
    }

    @media only screen and (${devices.sm}) {
      background-color: #fff;
      position: absolute;
      top: 100%;
      display: flex;
      align-items: center;
      text-align: center;
      box-shadow: 0 1px 3px -2px black;

      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      height: auto;
      background-color: #fff;
      flex-direction: column;
      gap: 1.25rem;
    }
  }
`;

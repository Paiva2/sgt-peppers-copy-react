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
  gap: 6.25rem;
`;

export const LogoWrapper = styled.div`
  svg {
    width: 98px;
    height: 50px;
  }
`;

export const NavBar = styled.div`
  height: 100%;

  ul {
    display: flex;
    height: 100%;

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
      }
    }

    @media only screen and ${devices.sm} {
      display: none;
    }
  }
`;

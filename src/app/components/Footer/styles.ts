import { devices } from "@/globalStyles";
import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 1.25rem 0;
  background-color: #222;
  color: #fff;

  @media only screen and (${devices.sm}) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
  font-size: 0.8125rem;
  color: #579a18;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;

  p {
    display: grid;
    place-items: center;
    color: #000;
    cursor: pointer;
    background-color: #fff;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 9999px;
    font-size: 1.375rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  padding-left: 0.625rem;
  padding-right: 0.3125rem;
  border-radius: 999px;
  background: #fff;
  transition: border 0.2s ease-in-out;

  label {
    display: flex;
    align-items: center;
    width: 100%;
  }

  input {
    width: 100%;
    height: 2.1875rem;
    border-radius: 999px;
    border: 0;
    outline: none;
    padding-left: 0.3125rem;
    font-size: 1rem;
  }

  svg {
    color: grey;
    font-size: 1.25rem;
  }

  @media only screen and (${devices.sm}) {
    width: 80%;
  }
`;

export const SiteCreditsWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0.9375rem;
  place-items: center;

  p {
    font-size: 0.875rem;
    line-height: 1.7;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

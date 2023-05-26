import { devices } from "@/globalStyles";
import styled from "styled-components";

export const HomeMainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 9.375rem;
  flex-direction: column;

  @media only screen and (${devices.sm}) {
    padding-top: 6.375rem;
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  font-size: 1rem;

  @media only screen and (${devices.sm}) {
    flex-direction: column;
  }

  img {
    width: 100%;
    height: auto;
    margin-bottom: 0.9375rem;
  }

  p {
    margin-bottom: 0.9375rem;
  }
`;

export const AlbumTitleHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.625rem;
  gap: 0.3125rem;

  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  p:nth-child(1) {
    font-size: 0.75rem;
    line-height: 0.75rem;
    color: #579a18;
    margin: 0;
  }

  p:nth-child(3) {
    font-size: 1rem;
    line-height: 1.5rem;
    color: #000;
  }
`;

export const MiddleContents = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  border-left: 1px solid rgba(83, 82, 80, 0.33);
  border-right: 1px solid rgba(83, 82, 80, 0.33);
  max-width: 65%;

  @media only screen and (${devices.sm}) {
    max-width: 100%;
  }
`;

export const StreamButtonsWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
  padding: 0.9375rem 0px 0.9375rem 0px;

  button {
    display: grid;
    place-content: center;
    background-color: #579a18;
    color: #fff;
    transition: color 0.3s ease-in-out;
    height: 46px;
    padding: 20px;
    border: 0;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }
`;

interface NmeCitationProps {
  beforewidthsize: string;
}

export const NmeCitation = styled.div<NmeCitationProps>`
  display: flex;
  padding-bottom: 0.9375rem;
  padding-top: 0.9375rem;

  &::before {
    content: "";
    display: inline-block;
    width: ${(props) => props.beforewidthsize};
    margin-right: 0.3125rem;
    background-color: #000;
  }

  p:first-child {
    padding: 0px 0.625rem 0.625rem 0.625rem;
    line-height: 1.5rem;
    font-style: italic;
    font-size: 0.875rem;
  }

  span {
    font-size: 0.75rem;
    line-height: 0.75rem;
    font-style: italic;
  }
`;

export const UnderCarouselNmeContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

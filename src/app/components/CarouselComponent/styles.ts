import { devices } from "@/globalStyles";
import styled from "styled-components";

export const CarouselAreaContainer = styled.div`
  position: relative;
  width: 100%;
  background: #2a2a2a;
`;

export const Carousel = styled.div`
  padding-top: 1.875rem;
  padding-bottom: 1.875rem;

  .number-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 37.5rem;
    max-height: 100vh;
    padding-right: 1.25rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ArrowsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    cursor: pointer;
    position: absolute;
    top: 50%;
    background: transparent;
    transform: translateY(-50%);
    border: 0;
    opacity: 0.6;
    transition: all 0.2s;

    &:hover {
      opacity: 1;
    }

    &:first-child {
      left: 100px;
    }

    &:last-child {
      right: 100px;
      left: auto;
    }
  }

  @media only screen and ${devices.sm} {
    display: none;
  }
`;

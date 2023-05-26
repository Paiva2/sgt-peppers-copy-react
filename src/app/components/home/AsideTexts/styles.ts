import { devices } from "@/globalStyles";
import styled from "styled-components";

export const AsideTextsContainer = styled.aside`
  display: flex;
  flex-direction: column;
  max-width: 25%;
  padding: 7.1875rem 1.25rem 0px 5rem;
  gap: 1rem;

  @media only screen and (${devices.sm}) {
    max-width: 100%;
    padding: 15px;
  }
`;

export const AsideText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    color: #9b9b9b;
    margin: 0;
  }

  span {
    color: #222;
    font-size: 0.875rem;
    line-height: 0.875rem;
    font-weight: 700;
  }
`;

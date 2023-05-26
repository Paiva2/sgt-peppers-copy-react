import React from "react";
import { AsideText, AsideTextsContainer } from "./styles";

const AsideTexts = () => {
  return (
    <AsideTextsContainer>
      <AsideText>
        <p>
          "I MADE A SUGGESTION. I SAID, 'WE NEED TO GET AWAY FROM OURSELVES - HOW
          ABOUT IF WE JUST BECOME SORT OF AN ALTER EGO BAND?' "
        </p>
        <span>Paul</span>
      </AsideText>

      <AsideText>
        <p>
          "WE WERE REALLY SPENDING A LONG TIME IN THE STUDIO AND WE WERE STILL DOING
          THE BASIC TRACKS LIKE WE ALWAYS DID AND THEN IT WOULD TAKE WEEKS FOR THE
          OVERDUBS."
        </p>
        <span>Ringo</span>
      </AsideText>

      <AsideText>
        <p>
          "IN THE MORNING WE'D DRIVE INTO ABBEY ROAD IN JOHN'S BLACKED OUT ROLLS
          ROYCE, FALL OUT OF THE BACK OF THE CAR INTO THE STUDIO."
        </p>
        <span>George</span>
      </AsideText>
    </AsideTextsContainer>
  );
};

export default AsideTexts;

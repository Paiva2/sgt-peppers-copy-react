"use client";

import React from "react";
import {
  AlbumTitleHeader,
  HomeMainContainer,
  Main,
  MiddleContents,
  NmeCitation,
  StreamButtonsWrapper,
  UnderCarouselNmeContainer,
} from "./styles";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import CarouselComponent from "../components/CarouselComponent";
import AsideTexts from "../components/home/AsideTexts";
import YoutubeComponent from "../components/home/YoutubeComponent";
import SpotifyComponent from "../components/home/SpotifyComponent";

const SgtPeppersHome = () => {
  return (
    <HomeMainContainer>
      <Main>
        <AsideTexts />

        <section>
          <AlbumTitleHeader>
            <p>ALBUM</p>
            <h1>Sgt. Pepper's Lonely Hearts Club Band</h1>
            <p>Release Date: 1st June 1967</p>
          </AlbumTitleHeader>

          <MiddleContents>
            <Image
              height={794}
              width={794}
              alt="Beatles Sgt.Peppers Cover"
              src="https://www.thebeatles.com/sites/default/files/styles/max_1300x1300/public/2021-05/Sgt%20Pepper.jpg?itok=N-ySss3D"
            />

            <SpotifyComponent />
            <StreamButtonsWrapper>
              <button>STREAM</button>
              <button>BUY THE ALBUM</button>
            </StreamButtonsWrapper>

            <p>
              Released on 1st June, 1967, Sgt. Pepper's Lonely Hearts Club Band, the
              band's eighth album became the soundtrack to the "summer of love" but
              its appeal is timeless.
            </p>

            <p>
              Work had begun on the recording in late 1966 and at one stage it was
              thought that both Penny Lane and Strawberry Fields Forever would also
              be included but when these were released as a single in February, that
              idea was abandoned.
            </p>

            <p>
              Revolver had only just been completed in time prior to the band flying
              off on yet another tour. Now that touring was behind them more time
              could be spent writing and recording. Between November 1966 and April,
              1967, they spent over 400 hours in the studio - a far cry from the
              Please Please Me days.
            </p>

            <p>
              Of course the music was more complex and now that touring was over,
              there was no need to consider what could be reproduced in front of a
              live audience.
            </p>

            <p>
              In the studio The Beatles encouraged George Martin to achieve "the
              impossible" and in turn, George and the engineers would find innovative
              ways of realising this despite still using only four-track equipment.
            </p>

            <Image
              width={589}
              height={390}
              alt="The Beatles recording Sgt Pepper"
              src="https://www.thebeatles.com/sites/default/files/styles/max_1300x1300/public/2021-05/T-019-07.jpg?itok=AMqeYmAM"
            />

            <p>
              For the fourth time in the UK, no single was lifted from the album and
              this also held true in the US. The album was also not banded,
              encouraging the listener to play it all the way through, pausing only
              to turn the disc over.
            </p>

            <p>
              Not only was the music different, exciting and colourful so too was the
              way it was delivered. The glossy double wallet featured the guys in
              their Pepper uniforms surrounded by images of people they either
              admired or were interested in whilst on the back of the sleeve there
              were the lyrics to all the songs. Inside each side of the wallet were
              other surprises, a card featuring various cut-outs and in the initial
              pressings at least, the paper inner sleeve bore a psychedelic design.
            </p>

            <Image
              width={589}
              height={390}
              alt="Outtake from the cover shoot for Sgt Pepper"
              src="https://www.thebeatles.com/sites/default/files/styles/max_1300x1300/public/2021-05/MC-0010-02.jpg?itok=ZHNj1k8e"
            />

            <Image
              width={589}
              height={390}
              alt="Inside of the gatefold album Sgt Pepper"
              src="https://www.thebeatles.com/sites/default/files/styles/max_1300x1300/public/2021-05/beatles%20finished.jpg?itok=s693uTVh"
            />
            <p>
              In the Britain the album hit number #1 and between June, 1967 and
              February, 1968 spent a total of 27 weeks at the top during an initial
              chart run of 148 weeks. All of this, in spite of a BBC ban on "A Day In
              The Life".
            </p>

            <p>
              In the US, the album was released in exactly same way as in Britain…
              well almost. The high-pitched tone and the garbled speech embedded in
              the UK run-out groove did not appear on the American release. The album
              enjoyed a fifteen week stay at the top of the US Top 200 albums during
              its initial chart run of 88 weeks.
            </p>

            <Image
              width={589}
              height={877}
              alt="George Harrison during the recording sessions for Pepper"
              src="https://www.thebeatles.com/sites/default/files/styles/max_1300x1300/public/2021-05/T-006-11.jpg?itok=3AMyO3H1"
            />

            <NmeCitation beforewidthsize=".5rem">
              <p>
                Trust the Beatles to come up with something different! Their latest
                LP, 'Sergeant Pepper's Lonely Hearts Club Band' is a sort of concert.
                It starts with that number and ends with it, except for a finale
                piece called 'A Day In The Life'. <br />
                <br />
                <span>NME May 20, 1967</span>
              </p>
            </NmeCitation>

            <Image
              width={589}
              height={882}
              alt="John and Paul during Pepper recording sessions"
              src="https://www.thebeatles.com/sites/default/files/styles/max_1300x1300/public/2021-05/T-024-25.jpg?itok=DW4DvCI8"
            />

            <YoutubeComponent />
          </MiddleContents>
        </section>
      </Main>

      <CarouselComponent />
      <UnderCarouselNmeContainer>
        <NmeCitation
          style={{
            width: "56.875rem",
          }}
          beforewidthsize="1.25rem"
        >
          <p>
            The Beatles' next LP, which has already taken over seven months to record
            is at last nearing completion. Titled 'Sergeant Pepper's Lonely Hearts
            Club Band' it will be finished during the second week of April. Among
            tracks now completed are 'A Day In The Life', a John Lennon solo on which
            he is backed by a 41-piece orchestra. 'When I'm 64' a novelty number in
            early phonographic style featuring Paul McCartney. 'Good Morning, Good
            Morning, Good Morning' a John and Paul duet augmented by Sounds Inc,
            'She's Leaving Home' arranged by Mike Leander and employing added strings
            and 'Sergeant Pepper's Blues'.
            <br />
            <br />
            <span>NME April 1st, 1967</span>
          </p>
        </NmeCitation>
      </UnderCarouselNmeContainer>
    </HomeMainContainer>
  );
};

export default SgtPeppersHome;

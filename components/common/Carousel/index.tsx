import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import useInterval from '../../../hooks/useInterval';

const S = {
  Carousel: styled.div<{ sliderPage: number }>`
    position: relative;
    .slide {
      &:nth-child(${(props) => props.sliderPage}) {
        z-index: 1; // 보여지게 됨
      }
    }
  `,
  Slide: styled.div`
    position: absolute;
    top: 0;
    z-index: 0;

    width: 100%;

    text-align: center;
    cursor: pointer;

    overflow: hidden;
    background: ${({ color }) => color};

    .content-wrapper {
      display: flex;
      justify-content: space-around;
      cursor: pointer;

      .left-cover {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 500px;

        font-size: 2rem;
        line-height: 1.5;
        color: white;
        font-weight: 600;
      }
    }

    img {
      height: 320px;
      max-width: 600px;
      /* transform: translateX(250px); */
    }

    @media all and (max-width: 768px) {
      .left-cover {
        display: none !important;
      }
      .right-cover {
        width: 100%;
        padding-top: 300px; // img height와 동일할 것
        position: relative; /* If you want something inside of it */

        img {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;

          width: 100%;
          height: 300px;
        }
      }
    }
  `,
  Badge: styled.div`
    border-radius: 6px;
    background: ${({ color }) => color};
    font-size: ${(props) => props.theme.fontSizes.small};
    padding: 3px 9px;

    &:before {
      content: '# ';
    }
  `,
  HoverButtons: styled.div`
    position: absolute;
    top: 12px;
    right: 100px;
    z-index: 10;

    display: flex;
    background: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.grayOne};
    /* background-color: rgba(0, 0, 0, 0.65); */

    color: ${(props) => props.theme.colors.grayFour};
    padding: ${(props) => props.theme.paddings.xxl};
    border-radius: 6px;

    .slider-number {
      margin: 0 ${(props) => props.theme.margins.lg};
    }

    .slider-move-buttons {
      i {
        color: ${(props) => props.theme.colors.grayThree};
        &:hover {
          color: ${(props) => props.theme.colors.grayFour};
          cursor: pointer;
        }
      }
    }
  `,
};

function Carousel() {
  const pageCount = 2;
  const [sliderPage, setsliderPage] = useState<number>(1);

  function handleLeftClick() {
    if (sliderPage <= 1) {
      return setsliderPage(pageCount);
    }
    return setsliderPage(sliderPage - 1);
  }

  function handleRightClick() {
    if (sliderPage >= pageCount) {
      return setsliderPage(1);
    }
    return setsliderPage(sliderPage + 1);
  }

  // n초마다 바뀜
  useInterval(() => {
    if (sliderPage >= pageCount) {
      return setsliderPage(1);
    }
    return setsliderPage(sliderPage + 1);
  }, 2500);

  return (
    <S.Carousel sliderPage={sliderPage}>
      {/* 첫 슬라이드 */}
      <S.Slide className="slide" color={'#010B19'}>
        <Link href={`/event/1`}>
          <div className="content-wrapper">
            <div className="left-cover">
              <S.Badge color={'lightblue'}>Event</S.Badge>
              <div>에듀팝콘 오프닝 기념</div>
              <div>할인 이벤트</div>
            </div>
            <div className="right-cover">
              <img
                src="https://www.keysight.com/content/dam/keysight/en/img/prd/ixia-homepage-redirect/network-visibility-and-network-test-products/Network-Monitoring.jpg"
                alt="main image"
              />
            </div>
          </div>
        </Link>
      </S.Slide>
      {/* 다음 슬라이드 */}
      <S.Slide className="slide" color={'lightblue'}>
        <Link href={`/event/1`}>
          <div className="content-wrapper">
            <div className="left-cover">
              <S.Badge color={'black'}>New Lecture</S.Badge>
              <div>저쩌구</div>
              <div>어쩌구</div>
            </div>
            <div className="right-cover">
              <img src="https://www.costco.co.kr/medias/sys_master/images/hf6/had/10150476775454.jpg" alt="main image" />
            </div>
          </div>
        </Link>
      </S.Slide>

      {/* 상단 슬라이더 재생 버튼 */}
      <S.HoverButtons className="slider-buttons">
        <div className="slider-move-buttons">
          <i className="fas fa-chevron-left" onClick={handleLeftClick}></i>

          <span className="slider-number">
            <span>{sliderPage}</span> / {pageCount}
          </span>

          <i className="fas fa-chevron-right" onClick={handleRightClick}></i>
        </div>
      </S.HoverButtons>
    </S.Carousel>
  );
}

export default Carousel;

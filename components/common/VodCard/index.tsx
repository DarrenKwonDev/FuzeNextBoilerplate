import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import commaNumber from '../../../functions/commaNumber';
import HashTag from '../HashTag';

const S = {
  ListVodCard: styled.div`
    position: relative; // play-btn 위치를 위해서 둠
    height: 200px;
    width: 100%;
    margin: ${({ theme }) => theme.margins.base};

    display: flex;

    &:hover {
      background: ${(props) => props.theme.colors.grayOne};
    }

    .thum {
      position: relative; // thum 이 realtive 기준이 되어야 time 이 적절한 위치에 온다
      cursor: pointer;

      img {
        width: 300px;
        height: 200px;

        border-radius: 6px;
        object-fit: fill;
        object-position: center;
      }

      &:hover {
        &:after {
          display: flex;
          align-items: center;
          justify-content: center;

          content: url('/svg/play.svg');

          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.3) 100%); */
        }
      }
    }

    .vod-info {
      margin-left: ${(props) => props.theme.margins.base};
      width: calc(85vw - 300px); // img width만큼 빼주자

      .hashtag-wrapper {
        display: flex;
        margin: ${(props) => props.theme.margins.base} 0;

        .hashTags {
          background: ${(props) => props.theme.colors.grayTwo};
          color: ${(props) => props.theme.colors.grayFour};
          padding: ${(props) => props.theme.paddings.small};
          border-radius: 24px;

          margin-right: ${(props) => props.theme.margins.small};
        }
      }
      .title {
        margin: ${(props) => props.theme.margins.base} 0;

        font-size: ${(props) => props.theme.fontSizes.xl};
        font-weight: 600;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

      .info {
        margin-top: ${(props) => props.theme.margins.base};

        i {
          margin-right: ${(props) => props.theme.margins.base};
          color: ${(props) => props.theme.colors.grayTwo};
        }
        .view {
          margin-right: ${(props) => props.theme.margins.base};
        }
      }
    }

    .time {
      position: absolute;
      bottom: 12px;
      right: 12px;

      background: #1b1b1b;
      color: rgba(255, 255, 255, 0.8);

      height: 21px;
      padding: 0 4px;

      border-radius: 6px;
      z-index: 2;
      font-size: 14px;

      text-align: center;
      line-height: 21px;
    }
  `,
  GridVodCard: styled.div`
    position: relative; // play-btn 위치를 위해서 둠
    height: 400px; // 전체 크기
    width: 100%;

    /* margin: ${({ theme }) => theme.margins.base}; */
    margin: 0 ${(props) => props.theme.margins.xxxxl}; // 균형을 위해서, Card의 margin과 같아야만 함

    display: flex;
    flex-direction: column;

    .thum {
      position: relative; // thum 이 realtive 기준이 되어야 time 이 적절한 위치에 온다
      cursor: pointer;
      width: 300px;
      height: 200px; // 전체 크기의 반절

      img {
        width: 100%;
        height: 100%;

        border-radius: 6px;
        object-fit: fill;
        object-position: center;
      }

      &:hover {
        &:after {
          display: flex;
          align-items: center;
          justify-content: center;

          content: url('/svg/play.svg');

          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.3) 100%); */
        }
      }
    }

    .vod-info {
      /* margin-left: ${(props) => props.theme.margins.base}; */
      /* width: calc(85vw - 300px); // img width만큼 빼주자 */

      .hashtag-wrapper {
        display: flex;
        margin: ${(props) => props.theme.margins.base} 0;

        .hashTags {
          background: ${(props) => props.theme.colors.grayTwo};
          color: ${(props) => props.theme.colors.grayFour};
          padding: ${(props) => props.theme.paddings.small};
          border-radius: 24px;

          margin-right: ${(props) => props.theme.margins.small};
        }
      }
      .title {
        margin: ${(props) => props.theme.margins.global} 0;

        font-size: ${(props) => props.theme.fontSizes.xl};
        font-weight: 600;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

      .info {
        margin-top: ${(props) => props.theme.margins.base};
        i {
          margin-right: ${(props) => props.theme.margins.base};
          color: ${(props) => props.theme.colors.grayTwo};
        }
        .view {
          margin-right: ${(props) => props.theme.margins.base};
        }
      }
    }

    .time {
      position: absolute;
      bottom: 12px;
      right: 12px;

      background: #1b1b1b;
      color: rgba(255, 255, 255, 0.8);

      height: 21px;
      padding: 0 4px;

      border-radius: 6px;
      z-index: 2;
      font-size: 14px;

      text-align: center;
      line-height: 21px;
    }
  `,
};

function VodCard({ vodInfo, view }) {
  return (
    <>
      {!view ? (
        <S.ListVodCard>
          {/* thumbnail과 시간 */}
          <Link href={`/watch/${vodInfo.id}`}>
            <div className="thum">
              <img src={vodInfo.thumbnail} />
              <span className="time">{vodInfo.duration}</span>
            </div>
          </Link>

          {/* 해쉬태그, 제목, 정보 등 */}
          <div className="vod-info">
            <div className="hashtag-wrapper">
              {vodInfo.hashTags.map((hashtag, i) => (
                <HashTag text={hashtag} key={i} clickable={false} />
              ))}
            </div>
            <Link href={`/watch/${vodInfo.id}`}>
              <span className="title">{vodInfo.title}</span>
            </Link>

            <div className="info">
              <i className="fas fa-play"></i>
              <span className="view">{commaNumber(vodInfo.view)}</span>
              <i className="fas fa-calendar"></i>
              <span>{vodInfo.date}</span>
            </div>
          </div>
        </S.ListVodCard>
      ) : (
          <S.GridVodCard>
            {/* thumbnail과 시간 */}
            <Link href={`/watch/${vodInfo.id}`}>
              <div className="thum">
                <img src={vodInfo.thumbnail} />
                <span className="time">{vodInfo.duration}</span>
              </div>
            </Link>

            {/* 해쉬태그, 제목, 정보 등 */}
            <div className="vod-info">
              <div className="hashtag-wrapper">
                {vodInfo.hashTags.map((hashtag, i) => (
                  <HashTag text={hashtag} key={i} clickable={false} />
                ))}
              </div>
              <Link href={`/watch/${vodInfo.id}`}>
                <span className="title">{vodInfo.title}</span>
              </Link>

              <div className="info">
                <i className="fas fa-play"></i>
                <span className="view">{commaNumber(vodInfo.view)}</span>
                <i className="fas fa-calendar"></i>
                <span>{vodInfo.date}</span>
              </div>
            </div>
          </S.GridVodCard>
        )}
    </>
  );
}

export default VodCard;

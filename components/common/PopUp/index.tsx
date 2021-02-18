import React from 'react';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    position: absolute;
    top: 24%;
    right: 12%;

    width: 300px;
    height: 450px;

    z-index: 2; // header 보다는 낮아야하지만 hero보다는 높아야 함

    border: 1px solid ${(props) => props.theme.colors.grayThree};
  `,
  ImageWrapper: styled.div`
    width: 300px;
    height: 90%;
    background: lightblue;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
  TodayWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;

    height: 10%;
    padding: 0 12px;

    /* common */
    button {
      color: ${(props) => props.theme.colors.indigo};
      background: white;
      border: none;
      margin: 0;
      padding: 0;
    }

    .today-not-show {
    }

    .close {
      border: 1px solid ${(props) => props.theme.colors.indigo};
      padding: 4px 8px;

      color: ${(props) => props.theme.colors.indigo};
    }
  `,
};

interface IPopUpProps {
  showPopUp: boolean;
  setshowPopUp: Function;
}

function PopUp({ showPopUp, setshowPopUp }: IPopUpProps) {
  // 하루 동안 팝업 보여지지 않기 클릭시
  const onPopUpNotShot = () => {
    setshowPopUp(false);
    localStorage.setItem('fuzePopUpNotShow', new Date().toISOString());
  };

  return (
    <>
      {showPopUp ? (
        <S.Wrapper>
          <S.ImageWrapper className="notice-img">
            <img src="/partners/roy/roy1.jpg" alt="popup-image" />
          </S.ImageWrapper>
          <S.TodayWrapper className="todays">
            <button className="today-not-show" onClick={onPopUpNotShot}>
              오늘 하루 보지 않기
            </button>
            <button className="close" onClick={() => setshowPopUp(false)}>
              닫기
            </button>
          </S.TodayWrapper>
        </S.Wrapper>
      ) : (
        ''
      )}
    </>
  );
}

export default PopUp;

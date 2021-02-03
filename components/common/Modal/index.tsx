import React from 'react';
import styled from 'styled-components';
import ShowUp from '../../../animation/ShowUp';
import ZoomIn from '../../../animation/ZoomIn';

const S = {
  Wrapper: styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.5);
    /* background-color: white; */
    z-index: 1000000;
    color: white;

    .modal {
      position: fixed;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 300px; // height는 내용에 맞춰 알아서 늘어나도록. 아이폰 5가 320px이 가로

      /* ${(props) => props.theme.deviceSizes.desktop} {
        width: 30%;
      } */

      background: white;
      border-radius: 6px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

      color: ${(props) => props.theme.colors.grayFour};

      animation: ${ZoomIn} 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

      & > * {
        & {
          padding: ${(props) => props.theme.paddings.base};
        }
      }

      .modal-title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-size: ${(props) => props.theme.fontSizes.base};
        margin: 16px 0;
      }

      .modal-contents {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .confirm-button {
        width: 100%;
        background: ${(props) => props.theme.colors.mainColor};
        border-radius: 0 0 6px 6px;

        color: white;
        outline: none;
        border: none;
        cursor: pointer;
        margin-top: ${(props) => props.theme.margins.base};
      }
    }
  `,
};

interface IModalProps {
  showModal: boolean
  setshowModal: any
  title?: string
  contents?: string
}

function Modal({ showModal, setshowModal, title = 'title', contents = 'contents' }: IModalProps) {
  const confirmClick = () => setshowModal(false);

  return (
    <>
      {showModal && (
        <S.Wrapper>
          <div className="modal">
            <div className="modal-title">{title}</div>
            <div className="modal-contents">{contents}</div>

            <button className="confirm-button" onClick={confirmClick}>
              Confirm
            </button>
          </div>
        </S.Wrapper>
      )}
    </>
  );
}

export default Modal;

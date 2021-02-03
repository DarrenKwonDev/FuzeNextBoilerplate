import styled from 'styled-components';

const StyledCard = styled.div`
  border-radius: 6px;
  overflow: hidden;
  /* border: 1px solid black; */

  margin: 0 ${(props) => props.theme.margins.xxxxl};

  /* 카드의 크기 */
  width: 300px;
  height: 100%; // 고정값을 주면 카드가 일정해지긴 함.

  .card-image-wrapper {
    position: relative; // after를 위해 relative 설정
    height: 200px; // 높이를 고정해줘야 이미지 고유의 높이를 반영하지 않고 균등하게 됨
    overflow: hidden;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      &:after {
        display: flex;
        align-items: center;
        justify-content: center;

        content: url('/svg/play.svg');
        color: white;
        font-weight: 600;

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.5) 100%); */
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.3) 100%);
      }

      .card-img {
        transition: transform 0.5s ease;
        height: 200px; // 높이를 고정해줘야 이미지 고유의 높이를 반영하지 않고 균등하게 됨
        transform: scale(1.15);
      }
    }
  }

  .card-img {
    display: block;
    width: 100%;
    height: 200px; // 높이를 고정해줘야 이미지 고유의 높이를 반영하지 않고 균등하게 됨
    object-fit: cover;
  }

  /* 이하 해쉬태그, 강사이름, 설명 등  */
  .card-content {
    padding: 1rem;
    overflow: hidden;

    /* hashtag */
    .card-hashtag-container {
      display: flex;
      margin-bottom: ${(props) => props.theme.margins.base};
    }

    /* 간단한 설명 */
    .card-desc {
      margin-bottom: ${(props) => props.theme.margins.base};
      letter-spacing: 1.5px;
    }

    /* 강사 이름 혹은 강의 이름 */
    .card-title {
      margin-bottom: ${(props) => props.theme.margins.base};
      font-weight: 600;
    }
  }
`;

export default StyledCard;

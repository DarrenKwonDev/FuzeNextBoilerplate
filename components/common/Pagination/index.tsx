import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    display: flex;
  `,
  PageChangeButton: styled.button`
    border: none;
    font-weight: 600;
    background: white;
    cursor: pointer;
  `,
  PaginationButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 30px;
    padding: ${(props) => props.theme.paddings.base};

    border: none;
    /* border: 1px solid black; */
    cursor: pointer;
    /* margin: 0 ${(props) => props.theme.margins.small}; */

    .selected {
      background: ${(props) => props.theme.colors.grayOne};
    }
  `,
};

interface IPaginationProps {
  pageSize: number
  total: number
  pageChunkSize?: number
}

// pageSize 1 페이지 당 item을 몇 개 보여줄 것인가
// total 총 item이 몇 개인가
// pageChunkSize prev/next를 누르기 전, pagination을 몇 개씩 노출할 것인가
function Pagination({ pageSize, total, pageChunkSize = 10 }: IPaginationProps) {
  const [arrayStart, setarrayStart] = useState<number>(0);

  // 그래서 page는 몇 개 나오는가. (orphan까지 1개로 잡아야 하므로 ceil로 반올림 할 것)
  const pageNumber = Math.ceil(total / pageSize);
  // 딱 떨어지지 않는 orphan에서 몇 개가 나오는가
  const orphan = total % pageSize;

  // 유저가 몇 번이나 next를 누를 수 있는가
  const clickLimit = Math.ceil(pageNumber / pageChunkSize) - 1;

  // 1~10, 11~20 이렇게 10개씩 분리하여 주자
  const showToUser = [...Array(pageNumber).keys()].slice(arrayStart, arrayStart + pageChunkSize);

  const handlePrevClick = () => {
    if (arrayStart <= 0) {
      return;
    }
    setarrayStart(arrayStart - pageChunkSize);
  };

  const handleNextClick = () => {
    if (arrayStart >= clickLimit * pageChunkSize) {
      return;
    }
    setarrayStart(arrayStart + pageChunkSize);
  };

  return (
    <S.Wrapper>
      <S.PageChangeButton onClick={handlePrevClick}>Prev</S.PageChangeButton>
      {showToUser.map((page, i) => (
        <S.PaginationButton key={i}>{page + 1}</S.PaginationButton>
      ))}
      <S.PageChangeButton onClick={handleNextClick}>Next</S.PageChangeButton>
    </S.Wrapper>
  );
}

export default Pagination;

import styled from 'styled-components';

const StyledSearchBar = styled.div`
  margin: ${(props) => props.theme.margins.xxxxl};

  .search-input {
    background-color: ${(props) => props.theme.colors.white};
    width: 750px; // input의 길이와 같게 해줘야 옆에 돋보기가 착 달라 붙는다
    position: relative;
  }

  .search-input input {
    height: 55px;
    width: 750px; // 상단의 .search-input 같은 크기여야 함
    outline: none;
    border: 3px solid ${(props) => props.theme.colors.mainColor};
    border-radius: 50px;
    padding: 0 60px 0 20px; // 오른쪽 패딩이 깊은 이유는 검색 아이콘을 넣을거라서
    font-size: ${(props) => props.theme.fontSizes.base};
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); // 뽀대가 아니라 아래 자동완성과 구분되려면 넣어야 함
  }

  .search-input .icon {
    height: 55px;
    width: 55px;
    line-height: 55px;
    position: absolute;
    top: 0;
    right: 0;
    color: ${(props) => props.theme.colors.mainColor};
    font-size: ${(props) => props.theme.fontSizes.large};
    cursor: pointer;
  }

  .search-input .autocomplete {
    padding: 10px 8px; // 검색창에 너무 딱 달라붙지 않고 적절히 떨어뜨림
    max-height: 280px;
    overflow-y: auto;
    position: absolute;
    width: 100%;
    background: white;
    /* opacity: 0; */
    /* pointer-events: none; */
    /* display: none; */
  }

  /* 각 아이템들의 속성들 */
  .autocomplete li {
    list-style: none;
    padding: 8px 12px;
    width: 100%;
    cursor: pointer; // 안해주면 drag 됨
    border-radius: 3px;

    &:hover {
      background-color: ${(props) => props.theme.colors.mainColor};
    }
  }
`;

export default StyledSearchBar;

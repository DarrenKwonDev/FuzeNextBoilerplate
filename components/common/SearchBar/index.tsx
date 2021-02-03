import React, { useState } from 'react';
import StyledSearchBar from './style';
import { useRouter } from 'next/router';

// 대소문자를 구별하지 않음
// 수백개 때려 놓고 나중에 프로그래밍적인 방식으로 sort하고, 너무 많으면 그 중에 몇개만 출력하도록 제한하면 됨
let autoCompleteArray = ['Apink', 'BTS', 'Speaking', 'Twice', 'Topik', 'Korean', 'Got7', 'Seventeen', 'Kpop'];

function SearchBar() {
  const [searchInput, setsearchInput] = useState('');
  const [autoCompleteArr, setautoCompleteArr] = useState([]);
  const router = useRouter();
  let filteredArray = [];

  const handleInputChange = (e) => {
    setsearchInput(e.target.value);

    // state를 쓰면 다음 렌더링때 결과물이 나오므로(즉, 비동기적으로 동작하므로) 여기선 사용하면 안 됨
    // state는 최종적으로 검색할 때나 사용할 것
    if (e.target.value) {
      filteredArray = autoCompleteArray.filter((data) => {
        return data.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase());
      });
      setautoCompleteArr(filteredArray);
    } else {
      // 검색어를 다 지우면 하단의 auto complete도 다 없애야 하므로
      setautoCompleteArr([]);
    }
  };

  const handleAutoCompleteClick = (e) => {
    setsearchInput(e.target.innerText);

    // 검색어를 클릭 시 자동 완성 없어지는 건 당연
    setautoCompleteArr([]);

    //이동;
    router.push(`/search?keyword=${e.target.innerText}`);
  };

  const handleSearchClick = () => {
    console.log(searchInput);
    router.push(`/search?keyword=${searchInput}`);
  };

  return (
    <StyledSearchBar>
      <div className="search-input">
        <input type="text" value={searchInput} onChange={handleInputChange} placeholder="type to search" />
        <div className="autocomplete">
          {autoCompleteArr.map((el, i) => (
            <li key={i} onClick={handleAutoCompleteClick}>
              {el}
            </li>
          ))}
        </div>
        <div className="icon" onClick={handleSearchClick}>
          <i className="fas fa-search"></i>
        </div>
      </div>
    </StyledSearchBar>
  );
}

export default SearchBar;

import React, { useState } from "react";
import StyledStartRating from "./style";

function StarRating() {
  const [userRatingInput, setuserRatingInput] = useState("");

  const handleTextareaChange = (e) => {
    setuserRatingInput(e.target.value);
  };
  const handleStarRatingClick = () => {
    console.log("click!");
  };

  return (
    <StyledStartRating>
      <div className="start-widget">
        <input type="radio" name="rate" id="rate-5" />
        <label htmlFor="rate-5" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-4" />
        <label htmlFor="rate-4" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-3" />
        <label htmlFor="rate-3" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-2" />
        <label htmlFor="rate-2" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-1" />
        <label htmlFor="rate-1" className="fas fa-star"></label>
        <div className="wrapper">
          <textarea
            placeholder="수강평을 남겨주세요"
            value={userRatingInput}
            onChange={handleTextareaChange}
          ></textarea>

          <div className="btn">
            <button type="submit" onClick={handleStarRatingClick}>
              제출하기
            </button>
          </div>
        </div>
      </div>
    </StyledStartRating>
  );
}

export default StarRating;

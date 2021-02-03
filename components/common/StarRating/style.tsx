import styled from "styled-components";

const StyledStartRating = styled.div`
  background: ${(props) => props.theme.colors.grayFour};
  border: 1px solid ${(props) => props.theme.colors.grayThree};
  border-radius: 6px;

  /* flex */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* width */
  width: 375px;
  padding: 20px 10px 10px 10px;

  .start-widget input {
    display: none;
  }
  .start-widget label {
    font-size: ${(props) => props.theme.fontSizes.xxxl};
    color: ${(props) => props.theme.colors.grayThree};
    padding: 10px;
    float: right;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .start-widget input:not(checked) ~ label:hover,
  .start-widget input:not(checked) ~ label:hover ~ label {
    color: #fd4;
  }

  .start-widget input:checked ~ label {
    color: #fd4;
  }

  .start-widget #rate-5:checked ~ label {
    color: #fe7;
    text-shadow: 0 0 20px #952;
  }

  .wrapper header {
    width: 100%;
    font-size: 25px;
    color: #fe7;
    font-weight: 500;
    margin: 5px 0 20px 0;
    text-align: center;
    transition: all 0.2s ease;
  }

  textarea {
    height: 125px;
    width: 100%;
    color: ${(props) => props.theme.colors.white};
    outline: none;
    background: white;
    border: 1px solid #333;
    background: #222;
    padding: 10px;
    font-size: 17px;
    resize: none;
  }

  .wrapper .btn {
    height: 45px;
    width: 100%;
    margin: 15px 0;

    button {
      height: 100%;
      width: 100%;
      outline: none;
      background: ${(props) => props.theme.colors.grayThree};
      border: 1px solid ${(props) => props.theme.colors.grayFour};
      color: ${(props) => props.theme.colors.white};
      border-radius: 6px;
      cursor: pointer;
    }
  }
`;

export default StyledStartRating;

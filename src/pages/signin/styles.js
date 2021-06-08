import styled from "styled-components";
import img from '../../assets/background.png';

export const Container = styled.header`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  background-size: cover;
  display: flex;
  flex-direction: column;
  right: 55px; 
  position: absolute;
  align-items: center;
  img {
    width: 600px;
    margin: 10px 0 40px;
  }
  p {
    color: #ffffff;
    margin-bottom: 15px;
    border: 3px solid  #ff3333;
    border-radius: 5px;
    padding: 10px;
    width: 60%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 10px;
    padding: 10px;
    color: #777;
    font-size: 15px;
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 10px;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #00448F;
    height: 40px;
    border: 0;
    border-radius: 10px;
    width: 160px;
  }
`;
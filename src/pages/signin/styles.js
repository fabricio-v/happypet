import styled from "styled-components";
import img from '../../assets/background.jpg';

export const Container = styled.div`
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
  display: flex;  /*ajusta elementos na pagina*/
  flex-direction: column; /*linha os elementos um abaixo do outro*/
  align-items: center; /*alinha no centro*/
  img {
    width: 300px;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid  #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 10px;
    padding: 10px;
    color: #777;
    font-size: 15px;
    width: 100%;
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
    width: 50%;
  }
`;
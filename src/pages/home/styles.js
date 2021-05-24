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
  width: 200px;
  margin: 10px 0 40px;
  }
`;
export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 10px;
  display: flex;
  flex-direction: column;
`;

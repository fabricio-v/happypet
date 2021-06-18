import styled from 'styled-components';

export const Container1 = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Container2 = styled.div`
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
  right: 900px; 
  position: absolute;
  align-items: center;


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

  }
  `;
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Card = styled.div`
  background: #1C1C1C;
  width: 90%;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.20);

  h2 {
    font-size: 20px;
    color: #00CED1;
    margin-bottom: 10px;
  }
`;

export const Templates = styled.div`
  width: 100%;
  height: 100px;
  background: #363636;
  border-radius: 8px;
  overflow-y: auto;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 30px;

  button {
    background: transparent;
    margin-right: 10px;
    border: 2px solid transparent;

    &.selected {
      border-color: #00CED1;
    }

    img {
      width: 70px;
      height: 70px;
    }
  }
`;

export const Form = styled.form`
  input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #DBDBDB;
    padding: 0 15px;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border-radius: 8px;
  background: #00CED1;
  color: #fff;
  font-weight: bold;
  transition: background 0.2s ease-in;
  font-size: 14px;
  border: 2px solid transparent;

  &:hover {
    background: #20B2AA;
  }
`;

export const ButtonDownload = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  border-radius: 8px;
  background: #228B22;
  color: #fff;
  font-weight: bold;
  transition: background 0.2s ease-in;
  font-size: 14px;
  border: 2px solid transparent;

  &:hover {
    background: #006400;
  }
`;

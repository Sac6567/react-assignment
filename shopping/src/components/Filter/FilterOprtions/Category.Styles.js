import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
`;

export const CardBody = styled.button`
  justify-content: center;
  padding: 5px;
  margin-top: 25px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Reset = styled.button`
  width: 50%;
  padding: 15px;
  background: #1a508b;
  color: #ffffff;
  cursor: pointer;
  border: none;
  margin-top: 5px;
  margin-left: 80px;
`;

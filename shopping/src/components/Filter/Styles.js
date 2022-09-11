import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
  display: block;
  margin: 0 5px;
  cursor: pointer;
  position: relative;
`;

export const Icon = styled(FontAwesomeIcon)`
  padding: 5px;
  font-size: 24px;
  color: #ffffff;
`;

export const FilterSideBar = styled.div`
  z-index: 1000;
  width: 350px;
  background: #ffffff;
  top: 0;
  right: 0;
  padding: 25px;
  position: fixed;
  overflow: auto;
  height: 100%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all ease-in-out 0.3s;

  &.expand {
    transition: all ease-in-out 0.3s;
    right: 0;
  }

  &.shrink {
    transition: all ease-in-out 0.3s;
    right: -400px;
  }
`;

export const SideBarHeader = styled.div`
  font-weight: 300;
  font-size: 24px;
  text-transform: uppercase;
  position: relative;
  padding: 15px 0;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: #000000;
  }
`;

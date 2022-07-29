import styled from 'styled-components';

export const AbsoluteCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 0;

  & > * {
    position: relative;
    left: -50%;
    margin-top: -50%;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

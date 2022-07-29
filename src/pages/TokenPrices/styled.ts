import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: min-content 1fr;
`;

export const ChartContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 32px;
  box-sizing: border-box;
`;

export const Controls = styled.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

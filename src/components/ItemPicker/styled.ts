import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Text = styled.span`
  color: #000000;
  line-height: 32px;
  font-size: 16px;
  margin: 0 12px;
`;

export const Item = styled.span<{ isActive?: boolean }>`
  ${Text} {
    cursor: pointer;

    ${({ isActive }) =>
      isActive &&
      css`
        color: #00bfff;
      `}
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--secondary-background);
  border-radius: 14px;
`;

export const Item = styled.div`
  padding: 10px 16px;

  & + div {
    border-top: 1px solid var(--outline);
  }

  &:first-child {
    padding-top: 12px;
  }

  &:last-child {
    padding-top: 16px;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 18px;
`;
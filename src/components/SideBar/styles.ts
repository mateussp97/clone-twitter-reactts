import styled from "styled-components";
import { Search } from "../../styles/icons";

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 100%);
  }
`;

export const SearchWrapper = styled.div`
  padding: 10px 24px;

  width: min(399px, 100%);
  max-height: 60px;

  position: fixed;
  top: 0;
  z-index: 2;

  background: var(--primary);
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;

  font-size: 14px;
  padding: 0 10px 0 52px;

  border-radius: 18px;
  background: var(--search);

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -36px;
    left: 16px;
    z-index: 1;

    transition: 180ms ease-in-out;
  }

  &:focus {
    border: 1px solid var(--twitter);

    ~ svg {
      fill: var(--twitter);
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 28px;
  height: 28px;
  color: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  padding: 60px 24px 200px;
  margin-top: 4px;
`;

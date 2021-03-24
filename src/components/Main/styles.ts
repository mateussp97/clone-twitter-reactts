import styled from "styled-components";
import { ArrowLeft } from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  //! Valor mínimo entre 601px e 100% da tela, ou seja, não passa de 601px
  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 8px 12px;

  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  margin-left: 16px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 18px;
  }

  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;

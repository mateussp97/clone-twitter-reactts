import styled, { css } from "styled-components";
import Button from "../Button";
import { LocationOn, Cake } from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ProfileData = styled.div`
  //! padding do conteúdo abaixo do Avatar
  padding: min(calc(8vw + 40px), 64px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 18px;
  }

  > h2 {
    font-weight: normal;
    font-size: 16px;
    color: var(--gray);
  }

  > p {
    font-size: 16px;
    margin-top: 12px;
  }

  > ul {
    margin-top: 12px;
    margin-bottom: 12px;

    > li {
      display: flex;
      align-items: center;

      font-size: 16px;
      color: var(--gray);

      > svg {
        fill: var(--gray);
        margin-right: 4px;
      }
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;

  top: 2vw;
  right: 8px;
  padding: 4px 16px;
  font-size: 14px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 18px;
    font-size: 16px;
  }
`;

export const Banner = styled.div`
  width: 100%;
  //! Mínimo de 33vh ou 199px
  height: min(33vh, 199px);

  background: var(--twitter);

  flex-shrink: 0;

  position: relative;
`;

export const Avatar = styled.div`
  //! Mínimo de 45px de largura e o máximo de 135px baseado em 22vw
  width: max(48px, min(135px, 22vw));
  height: max(48px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;

  position: absolute;

  bottom: max(-60px, -10vh);
  left: 16px;
  background: url("https://avatars.githubusercontent.com/u/69378560?s=460&u=831bbebb1c4c52f9b9b28469b54acca7ed89c69b&v=4");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const iconCSS = css`
  width: 20px;
  height: 20px;

  fill: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;

export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 16px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;

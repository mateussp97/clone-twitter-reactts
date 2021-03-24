import styled, { css } from "styled-components";
import { Retweet, Chat, Favorite } from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);

  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  color: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  margin-top: 4px;
  position: relative;
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;

  background: var(--gray);

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 60px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 16px;
  white-space: nowrap;

  > strong {
    margin-right: 4px;
  }

  > span,
  time {
    color: var(--gray);
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.div`
  margin-top: 12px;

  width: 100%;
  //! Varia entre 285px e 175px tendo como parâmetro 41vw
  height: min(285px, max(175px, 41vw));

  background: var(--outline);
  border-radius: 16px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Icons = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;

  margin: 12px auto 0;
  width: 100%;

  @media (min-width: 330px) {
    width: 65%;
  }

  > li {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.li`
  display: flex;
  align-items: center;

  font-size: 14px;

  > svg {
    margin-right: 4px;
  }

  &:nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }

  &:nth-child(2) {
    color: var(--retweet);
    > svg path {
      fill: var(--retweet);
    }
  }

  &:nth-child(3) {
    color: var(--like);
    > svg {
      fill: var(--like);
    }
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
`;

export const RetweetIcon = styled(Retweet)`
  ${iconCSS}
`;

export const CommentIcon = styled(Chat)`
  ${iconCSS}
`;

export const LikeIcon = styled(Favorite)`
  ${iconCSS}
`;

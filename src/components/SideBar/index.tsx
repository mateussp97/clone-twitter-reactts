import React from "react";
import List from "./../List/index";
import FollowSuggestion from "./../FollowSuggestion/index";
import News from "./../News/index";
import StickyBox from "react-sticky-box";

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Talves você curta"
            elements={[
              <FollowSuggestion
                name="Pedro Palhari"
                nickname="@pedropalhari"
                avatarUrl="https://avatars.githubusercontent.com/u/6961214?v=4"
              />,
              <FollowSuggestion
                name="Vitor Eiji"
                nickname="@vtrduque"
                avatarUrl="https://avatars.githubusercontent.com/u/18485461?v=4"
              />,
              <FollowSuggestion
                name="Lucas Santana"
                nickname="@santanalc"
                avatarUrl="https://avatars.githubusercontent.com/u/38021698?v=4"
              />,
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;

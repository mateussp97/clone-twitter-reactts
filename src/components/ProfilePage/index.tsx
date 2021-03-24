import React from "react";

import {
  Container,
  ProfileData,
  EditButton,
  Banner,
  Avatar,
  LocationIcon,
  CakeIcon,
  Followage,
} from "./styles";

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar
          src={
            "https://avatars.githubusercontent.com/u/69378560?s=460&u=831bbebb1c4c52f9b9b28469b54acca7ed89c69b&v=4"
          }
          alt="Mateus de Souza"
        />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Mateus de Souza</h1>
        <h2>@mateussp97</h2>

        <p>Eu estudo todo dia.</p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 21 de Novembro de 1997
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>64</strong>
          </span>
          <span>
            <strong>95</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;

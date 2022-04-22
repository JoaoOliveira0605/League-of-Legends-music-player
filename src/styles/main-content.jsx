import styled from "styled-components";
import Wallpaper from "./../assets/wallpaper.jpg";

export const Mainn = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80vh;
  color: white;
  font-weight: 600;

  background: url(${Wallpaper}) no-repeat center/cover;
  .logo-content {
    margin-left: 10rem;
  }
`;

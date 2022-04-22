import styled from "styled-components";

export const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #14061f;
  width: 100%;
  height: 6rem;
  color: white;

  ul {
    margin-left: 10rem;
    display: flex;

    li:not(:first-child) {
      padding-left: 5rem;
    }
    #active {
      border-bottom: 2px solid blue;
    }
  }
  .user {
    margin-right: 15rem;
    text-align: center;
    display: flex;
    align-items: center;
    #user-icon {
      border: 1px solid blue;
      height: 50px;
      border-radius: 100%;
      margin-left: 1rem;
    }
  }
`;

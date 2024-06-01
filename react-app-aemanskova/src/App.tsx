import React, { useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainRouter from "./app/routing";
import styled from "styled-components";
// import axios from "axios";
import { AuthContext } from "../AuthContext.tsx";

const AppContainer = styled.div`
  max-width: 100vw;
  //max-height: 100vh;
  margin: 0 auto;
  padding: 20px;
`;

const App: React.FC = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <AppContainer>
      <Navbar />
      <MainRouter isAuth={isAuth} />
    </AppContainer>
  );
};

export default App;

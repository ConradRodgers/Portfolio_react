import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { Layout, Drawer, Navigation, Content, Header } from "react-mdl";
import Main from "./components/main";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Title" scroll>
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "",
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "",
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Raw HTML */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "srccomponentsimagesportphoto.png",
              }}
            >
              Portfolio
            </CardTitle>
            <CardText>Portfolio with Raw HTML and CSS</CardText>
            <CardActions border>
              <Button
                target="_blank"
                colored
                href="https://conradrodgers.github.io/portfolio.html"
              >
                Live Demo
              </Button>

              <Button
                target="_blank"
                colored
                href="https://github.com/ConradRodgers/ConradRodgers.github.io"
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ orcolor: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Password Gen */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "./images/passphoto.png",
              }}
            >
              Random Password Generator
            </CardTitle>
            <CardText>A dynamic Random Password Generator </CardText>
            <CardActions border>
              <Button
                target="_blank"
                colored
                href="https://conradrodgers.github.io/Password-generator/"
              >
                Live Demo
              </Button>

              <Button
                target="_blank"
                colored
                href="https://github.com/ConradRodgers/Password-generator"
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ orcolor: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Codeing Quiz */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "./images/passphoto.png",
              }}
            >
              Timed Quiz
            </CardTitle>
            <CardText>A multiple choice Codeing Quiz </CardText>
            <CardActions border>
              <Button
                target="_blank"
                colored
                href="https://conradrodgers.github.io/codingQuiz-/"
              >
                Live Demo
              </Button>

              <Button
                target="_blank"
                colored
                href="https://github.com/ConradRodgers/codingQuiz-"
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ orcolor: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Day Planner */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "./images/passphoto.png",
              }}
            >
              Day Planner
            </CardTitle>
            <CardText>Day Planner that utilizes API and local storage</CardText>
            <CardActions border>
              <Button
                target="_blank"
                colored
                href="https://conradrodgers.github.io/day-planner/"
              >
                Live Demo
              </Button>

              <Button
                target="_blank"
                colored
                href="https://github.com/ConradRodgers/day-planner"
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ orcolor: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* weather app*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "./images/passphoto.png",
              }}
            >
              Weather Dashboard
            </CardTitle>
            <CardText>Weather Dashboard utilizing third party API</CardText>
            <CardActions border>
              <Button
                target="_blank"
                colored
                href="https://conradrodgers.github.io/Weather-dashboard/"
              >
                Live Demo
              </Button>

              <Button
                target="_blank"
                colored
                href="https://github.com/ConradRodgers/Weather-dashboard"
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ orcolor: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          {/*  Precious Metal Calculator*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "./images/passphoto.png",
              }}
            >
              Precious Metal Calculator
            </CardTitle>
            <CardText>
              A precious metal calculator which pulls live market prices from
              finical API's
            </CardText>
            <CardActions border>
              <Button
                target="_blank"
                colored
                href="https://dvasquez4155.github.io/Precious-Metals-Calculator/"
              >
                Live Demo
              </Button>

              <Button
                target="_blank"
                colored
                href="https://github.com/DVasquez4155/Precious-Metals-Calculator"
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ orcolor: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>HTML / CSS</Tab>
          <Tab>Java Script</Tab>
          <Tab>Large Projects</Tab>
          <Tab>No Frontend</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;

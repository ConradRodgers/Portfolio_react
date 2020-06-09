import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <cell col={12}>
            <img
              //figure out why photo file wont work??????????????????????
              src="https://www.pmidpi.com/wp-content/uploads/2015/07/person-placeholder-300x300.jpg"
              alt="Photo of Conrad"
              className="head-shot"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML5 | CSS3 | JavaScript | JQuery | Bootstrap | Express.js |
                React.js | Node.js | MongoDB | Java | MySQL | Git
              </p>
              <div classname="social-links">
                {/*Github*/}
                <a
                  href="https://github.com/ConradRodgers"
                  rel="noopener noreferrer"
                  target="_black"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* linkedin*/}
                <a
                  href="https://www.linkedin.com/in/conrad-rodgers-15a8bb198/"
                  rel="noopener noreferrer"
                  target="_black"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;

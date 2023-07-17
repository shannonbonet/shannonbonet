import * as React from "react";
import NavBar from "../components/navBar";
import Layout from "../components/layout";
import { withStyles } from "@material-ui/core";
import { styles } from "../styles/customStyles";
import ProjectPage from "../components/projectPage";

const Wapo = ({ classes }) => (
  <Layout>
    <NavBar />
    <div>
      <ProjectPage title={"The Washington Post"} role={"swe intern"} />
      <div style={{ padding: "0px 100px 100px 100px" }}>
        <div className={classes.pageLeft}>
          <h2>experience</h2>
          <p>
            Helped launch new recipe finder
            <a
              className={classes.link}
              href="https://www.washingtonpost.com/recipes/"
              target="_blank"
            >
              here →
            </a>
          </p>
        </div>
        <div className={classes.pageLeft}>
          <h2>learnings</h2>
          <p>coming soon :)</p>
        </div>
        <div className={classes.pageLeft}>
          <p></p>
        </div>
      </div>
    </div>
  </Layout>
);

export default withStyles(styles)(Wapo);

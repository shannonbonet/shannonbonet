import * as React from "react";
import NavBar from "../components/navBar";
import Layout from "../components/layout";
import { withStyles } from "@material-ui/core";
import { styles } from "../styles/customStyles";
import ProjectPage from "../components/projectPage";

const Wapo = ({ classes }) => (
  <Layout>
    <NavBar />
    <ProjectPage title={"The Washington Post"} role={"swe intern"} />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "10vh",
      }}
    >
      <div style={{ minWidth: "300px", maxWidth: "800px" }}>
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
        <h2>learnings</h2>
        <p>coming soon :)</p>
      </div>
    </div>
  </Layout>
);

export default withStyles(styles)(Wapo);

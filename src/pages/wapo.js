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
        <ul>
          <li>
            Built an integration for sending comment alerts to newsroom editors
            with AWS Lambda and The Coral Project API
          </li>
          <li>
            Helped launch new recipe finder
            <a
              className={classes.link}
              href="https://www.washingtonpost.com/recipes/"
              target="_blank"
            >
              here →
            </a>
          </li>
          <li>Optimized image uploading in the recipe admin dashboard</li>
        </ul>
        <h2>learnings</h2>
        <p>
          After this internship, I feel like I could jump into any site team and
          start contributing to any part of the stack.
        </p>
        <p>
          Though team dynamics vary, I realized that I prefer faster paced
          environments than what big companies can generally offer.
        </p>
      </div>
    </div>
  </Layout>
);

export default withStyles(styles)(Wapo);

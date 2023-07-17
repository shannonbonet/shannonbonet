import * as React from "react";
import NavBar from "../components/navBar";
import Layout from "../components/layout";
import { withStyles } from "@material-ui/core";
import { styles } from "../styles/customStyles";
import CardGrid from "../components/cardGrid";
import { projectData } from "../data/projectData";

const Projects = ({ classes }) => {
  const data = projectData.sort((a, b) => b.date - a.date);

  return (
    <Layout>
      <NavBar />
      <a id="project-grid">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "10vh",
          }}
        >
          <h1 style={{ paddingBottom: "50px" }}>the works</h1>
          <CardGrid cards={data} />
        </div>
      </a>
    </Layout>
  );
};

export default withStyles(styles)(Projects);

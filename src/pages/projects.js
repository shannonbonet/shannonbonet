import * as React from "react";
import { Link } from "gatsby";
import NavBar from "../components/navBar";
import Layout from "../components/layout";
import { withStyles } from "@material-ui/core";
import { styles } from "../styles/customStyles";
import Boop from "../components/boop";
import CardGrid from "../components/cardGrid";
import UpArrow from "../assets/upArrow.svg";

const Projects = ({ classes }) => {
  return (
    <Layout>
      <NavBar />
      <a id="project-grid">
        <CardGrid />
      </a>
    </Layout>
  );
};

export default withStyles(styles)(Projects);

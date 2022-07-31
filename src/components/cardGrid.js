import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Card from "./projectCard";
import { withStyles } from "@material-ui/core";
import { styles } from "../styles/customStyles";

const CardGrid = ({ classes }) => {
  const titles = [
    "siren",
    "we care solar",
    "daily californian",
    "reading between the redlines",
  ];
  const roles = [
    "project manager",
    "software developer",
    "web developer",
    "data journalism",
  ];
  const links = [
    "/siren",
    "/wecaresolar",
    "/dailycal",
    "https://dailycal-projects.netlify.app/2021-07-10-redlining",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "10vh",
      }}
    >
      <h1 style={{ paddingBottom: "50px" }}>projects</h1>
      <div className={classes.grid}>
        {titles.map((project, i) => {
          return (
            <Link to={links[i]} style={{ textDecoration: "none" }}>
              {" "}
              <Card title={project} image={i} role={roles[i]} />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default withStyles(styles)(CardGrid);

CardGrid.propTypes = {
  titles: PropTypes.array,
  roles: PropTypes.array,
  links: PropTypes.array,
};

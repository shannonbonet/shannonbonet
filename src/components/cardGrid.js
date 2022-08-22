import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Card from "./projectCard";
import { withStyles } from "@material-ui/core";
import { styles } from "../styles/customStyles";

const CardGrid = ({ cards, classes }) => {
  return (
    <div className={classes.grid}>
      {cards.map((project, i) => {
        return (
          <Link to={project.link} style={{ textDecoration: "none" }}>
            <Card title={project.title} tag={project.tag} role={project.role} />{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default withStyles(styles)(CardGrid);

CardGrid.propTypes = {
  titles: PropTypes.arrayOf(String),
  roles: PropTypes.arrayOf(String),
  links: PropTypes.arrayOf(String),
};

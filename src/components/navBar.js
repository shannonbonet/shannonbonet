import * as React from "react";
import { Link } from "gatsby";
import Shelf from "../assets/shelf.svg";
import Boop from "./boop";
import { withStyles } from "@material-ui/core";
import { styles } from "../styles/customStyles";
import * as buttonStyles from "./buttons.module.css";

const NavBar = ({ classes }) => {
  return (
    <div className={classes.navBar}>
      <Boop rotation={20} timing={200}>
        <Shelf />
      </Boop>
      <a
        href="https://drive.google.com/file/d/17fHX7z7qEjzXMZ01cRupbPbp-uIMzPnA/view?usp=sharing"
        className={buttonStyles.button}
        activeClassName={buttonStyles.active}
      >
        <h4>resume</h4>
      </a>
      <Link
        to="/projects"
        className={buttonStyles.button}
        activeClassName={buttonStyles.active}
      >
        {" "}
        <h4>work</h4>
      </Link>
      <Link
        to="/about"
        className={buttonStyles.button}
        activeClassName={buttonStyles.active}
      >
        {" "}
        <h4>me</h4>{" "}
      </Link>
      <Link
        to="/"
        className={buttonStyles.button}
        activeClassName={buttonStyles.active}
      >
        {" "}
        <h4>home </h4>
      </Link>
    </div>
  );
};

export default withStyles(styles)(NavBar);

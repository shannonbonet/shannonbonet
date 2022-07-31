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
        href="https://drive.google.com/file/d/1KVioIS9YjCIMMexTxy8lq4miqRa3w1Z5/view?usp=sharing"
        className={buttonStyles.button}
        activeClassName={buttonStyles.active}
      >
        <h4>resume</h4>
      </a>
      <Link
        to="/writing"
        className={buttonStyles.button}
        activeClassName={buttonStyles.active}
      >
        {" "}
        <h4>writing</h4>{" "}
      </Link>
      <Link
        to="/projects"
        className={buttonStyles.button}
        activeClassName={buttonStyles.active}
      >
        {" "}
        <h4>projects</h4>
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

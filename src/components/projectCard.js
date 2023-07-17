import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "../styles/customStyles";
import Boop from "./boop";
import Dots from "../assets/dots.svg";
import Click from "../assets/click.svg";

const ProjectCard = ({ classes, title, tag, role }) => {
  const getImage = (title) => {
    switch (title) {
      case "siren":
        return (
          <StaticImage
            src={"../assets/siren.svg"} //huge L. https://stackoverflow.com/questions/66759909/how-to-pass-a-path-of-image-as-a-prop-in-gatsby-in-gatsby-plugin-image
            placeholder="blurred"
            alt="project image"
            width={300}
          />
        );
      case "wcs":
        return (
          <StaticImage
            src={"../assets/wcs.svg"}
            placeholder="blurred"
            alt="project image"
            width={300}
            imgStyle={{ paddingTop: "10px" }}
          />
        );
      case "dc":
        return (
          <StaticImage
            src={"../assets/dailycal.svg"}
            placeholder="blurred"
            alt="project image"
            width={300}
          />
        );
      case "redlining":
        return (
          <StaticImage
            src={"../assets/redlining.svg"}
            placeholder="blurred"
            alt="project image"
            width={250}
            height={200}
          />
        );
      case "wapo":
        return (
          <StaticImage
            src={"../assets/wapo.svg"}
            placeholder="blurred"
            alt="project image"
            width={220}
          />
        );
      case "cadence":
        return (
          <StaticImage
            src={"../assets/cadence.svg"}
            placeholder="blurred"
            alt="project image"
            width={220}
          />
        );

      default:
        return (
          <StaticImage
            src={"../assets/tbd.svg"}
            placeholder="blurred"
            alt="project image"
            width={250}
            height={200}
          />
        );
    }
  };

  return (
    <Card className={classes.card}>
      <Dots style={{ padding: "10px 0px 0px 15px" }} />
      <div className="cardContent">
        <h3 style={{ paddingBottom: "5px" }}>{title}</h3>
      </div>
      <div className="cardHidden">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontFamily: "PT Sans",
          }}
        >
          {role} &ensp;
          <Boop rotation={20} timing={200}>
            <Click />
          </Boop>
        </div>
        <div style={{ width: "60%", paddingTop: "10px" }}>{getImage(tag)}</div>
      </div>
    </Card>
  );
};

export default withStyles(styles)(ProjectCard);

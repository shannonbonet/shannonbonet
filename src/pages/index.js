import * as React from "react";
import { withStyles } from "@material-ui/core";
import { styles } from "../styles/customStyles";
import Layout from "../components/layout";
import Boop from "../components/boop";
import NavBar from "../components/navBar";
import TeaCup from "../components/teaCup";
import CardGrid from "../components/cardGrid";
import DownArrow from "../assets/downArrow.svg";
import UpArrow from "../assets/upArrow.svg";
import { theme } from "../styles/theme";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { recentData } from "../data/projectData";

const IndexPage = ({ classes }) => {
  const name = "shannon bonet,";

  const colors = [
    theme.palette.hardOrange,
    theme.palette.hardPink,
    theme.palette.hardYellow,
    theme.palette.alabasterDark,
    theme.palette.hardGreen,
  ];

  const [index, setIndex] = React.useState(0);
  const [displayName, setDisplayName] = React.useState("");

  React.useEffect(() => {
    const interval = setTimeout(() => {
      if (!displayName || displayName.length < name.length) {
        setDisplayName(displayName.concat(name[index]));
        setIndex(index + 1);
      }
    }, 200);
    return () => {
      clearTimeout(interval);
    };
  }, [index]);

  const getColor = (i) => {
    return colors[i % colors.length];
  };

  const getName = (name) => {
    let newName = [""];
    for (var i = 0; i < name.length; i += 1) {
      newName.push(
        <span style={{ color: `${getColor(i)}` }} key={i}>
          {name[i]}
        </span>
      );
    }
    return <h1>{newName}</h1>;
  };

  return (
    // https://www.npmjs.com/package/react-animation-on-scroll
    <Layout>
      <div id="home">
        <NavBar />
        <div className={classes.home}>
          <div style={{ width: "80%" }}>
            <AnimationOnScroll animateIn="animate__fadeInDown">
              <h1>hello, i'm</h1>
            </AnimationOnScroll>
            {getName(displayName)}

            <AnimationOnScroll animateIn="animate__fadeInUp">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "30px",
                  alignItems: "flex-start",
                }}
              >
                <p>searching for a cool team to build something meaningful</p>
                <TeaCup />
              </div>
            </AnimationOnScroll>
          </div>
          <br /> <br /> <br /> <br /> <br /> <br />
          <Boop rotation={20} timing={200}>
            <a href="#project-grid">
              {" "}
              <DownArrow />{" "}
            </a>
          </Boop>
        </div>
        <a id="project-grid">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "10vh",
            }}
          >
            <h1 style={{ paddingBottom: "50px" }}>recently...</h1>
            <CardGrid cards={recentData} />
          </div>
        </a>
        <div className={classes.homeDown}>
          <Boop rotation={20} timing={200}>
            <a href="#home">
              {" "}
              <UpArrow />{" "}
            </a>
          </Boop>
        </div>
      </div>
    </Layout>
  );
};

export default withStyles(styles)(IndexPage);

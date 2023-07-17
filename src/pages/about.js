import * as React from "react";
import NavBar from "../components/navBar";
import Layout from "../components/layout";
import { withStyles } from "@material-ui/core";
import { styles } from "../styles/customStyles";

const About = ({ classes }) => {
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
          <h1 style={{ paddingBottom: "50px" }}>re: me</h1>
          <div style={{ minWidth: "300px", maxWidth: "800px" }}>
            <p>
              <b>origin story</b>
            </p>
            <p>
              I wish I could summon some tale about how I discovered the joys of
              computing from the bowels of my Bay Area youth, but I just went to
              UC Berkeley. However, I did discover said joys at Cal and I just
              graduated. Yay 💕.
            </p>
            <p>
              <b>now</b>
            </p>
            <p>
              Searching for full time software engineering positions. I want to
              work on projects with a tangible social impact that also
              technically challenge me every (other) day.
            </p>
            <p>
              Currently interning at The Washington Post as a software engineer
              on the recipes team 👩‍🍳 ← me, chef
            </p>
            <p>
              <b>before</b>
            </p>
            <ul>
              <li>
                SWE intern at Cadence, a $1B valuation health RPM startup 🚀 🦄
              </li>
              <li>President of Blueprint, Technology for Nonprofits 💙 </li>
              <li>Head Projects Editor, The Daily Californian (data viz) 📊</li>
            </ul>
            <p>
              <b>ponderings</b>
            </p>
            <p>
              I tend to think about my experiences as a function of the
              conditions and environment that made me feel a particular way or
              form a certain opinion. 🤔 Something I've realized is that a good
              team goes a long way, but good leadership goes even further.
              Feedback is a two way street. Problems exist, and the right people
              will make you feel better about communicating what they are.
            </p>
          </div>
        </div>
      </a>
    </Layout>
  );
};

export default withStyles(styles)(About);

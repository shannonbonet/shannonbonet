import * as React from "react";
import NavBar from "../components/navBar";
import Layout from "../components/layout";
import { withStyles } from "@material-ui/core";
import { styles } from "../styles/customStyles";

const About = ({ classes }) => {
  return (
    <Layout>
      <NavBar />
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
            graduated. Go ฅ՞•ﻌ•՞ฅ 💕
          </p>
          <p>
            <b>now</b>
          </p>
          <p>
            Searching for full time software engineering positions. I want to
            work on projects with a tangible social impact that also technically
            challenge me every (other) day. Most of my experience has been on
            full stack projects, but I love learning anything new.
          </p>
          <p>
            <b>before</b>
          </p>
          <ul>
            <li>SWE intern at The Washington Post, recipes team 👩‍🍳 </li>
            <li>
              SWE intern at Cadence, a $1B valuation health RPM startup 🚀 🦄
            </li>
            <li>President of Blueprint, Technology for Nonprofits 💙 </li>
          </ul>
          <p>
            <b>ponderings</b>
          </p>
          <p>
            Something I've realized is that a good team goes a long way, but
            good leadership goes even further. Feedback is a two way street.
            Problems exist, and the right people will make you feel better about
            communicating what those problems are.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default withStyles(styles)(About);

import * as React from "react";
import NavBar from "../components/navBar";
import Layout from "../components/layout";
import { withStyles } from "@material-ui/core";
import { styles } from "../styles/customStyles";
import ProjectPage from "../components/projectPage";

const Cadence = ({ classes }) => (
  <Layout>
    <NavBar />
    <ProjectPage title={"Cadence"} role={"swe intern"} />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "10vh",
      }}
    >
      <div style={{ minWidth: "300px", maxWidth: "800px" }}>
        <h2>experience</h2>
        <p>
          I interned for
          <a
            className={classes.link}
            href="https://www.cadence.care/"
            target="_blank"
          >
            Cadence
          </a>
          at a pretty exciting time - they'd just raised $100M in
          <a
            className={classes.link}
            href="https://www.fiercehealthcare.com/digital-health/remote-care-management-platform-cadence-hits-1b-valuation-100m-series-b"
            target="_blank"
          >
            Series B funding
          </a>
          , and were growing an engineering team of driven people with a
          dedication to quality that I sense was special.
        </p>
        <p>
          I was given a lot of autonomy over my work here, where I built the
          company's first internal FE tool for the AI team to monitor model
          results on health data. Something I learned to embrace was pushing
          forward with an implementation even when I really did not know what
          was going on. Working in frameworks like
          <a
            className={classes.link}
            href="https://bazel.build/"
            target="_blank"
          >
            Bazel
          </a>
          with limited open source examples actually made configurations I
          already thought challenging (user auth, linting, querying, global
          contexts, etc) the easier parts of development.
        </p>
        <h2>learnings</h2>
        <div>
          <p>
            I recruited for Cadence because its mission to provide remote
            patient care to those with chronic diseases really resonated with
            me. Unexpectedly, I discovered a depth and excitement to my work
            that I hope to find again.
          </p>
          <p>
            This is probably my favorite experience in tech so far. Working at
            Cadence made me realize that I may want to lead my own company one
            day, or at the very least be apart of shaping a successful one.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default withStyles(styles)(Cadence);

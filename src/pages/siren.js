import * as React from "react";
import NavBar from "../components/navBar";
import Layout from "../components/layout";
import { withStyles } from "@material-ui/core";
import { styles } from "../styles/customStyles";
import ProjectPage from "../components/projectPage";

const Siren = ({ classes }) => (
  <Layout>
    <NavBar />
    <ProjectPage
      title={"siren"}
      role={"project manager"}
      github={"https://github.com/calblueprint/siren"}
    />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "10vh",
      }}
    >
      <div style={{ minWidth: "300px", maxWidth: "800px" }}>
        <h2>problem</h2>
        <p>
          Services, Immigrant Rights And Education Network (SIREN) is a
          nonprofit that offers legal services to immigrants in the Bay Area.
          SIRENs intake process endured many different product solutions
          including Google Forms, Microsoft Outlook, and Jotform. Cherry picking
          certain product features to serve different needs resulted in a lot of
          manual reorganizing on SIREN. My team and I were tasked with building
          a mobile and web app to collect intake forms, schedule appointments,
          and upload documents to alleviate this problem.
        </p>

        <h2>approach</h2>

        <p>
          To develop so many features within a short period of time, I initially
          considered embeddings of no code solutions like JotForm and Docusign
          before realizing that the time it took to familiarize ourselves with
          external documentation would trade off with time to iterate on the
          features themselves. We settled on a Firebase backend that allowed
          quick and flexible options for creating our own schema, and deferred
          to component libraries when possible. Whenever I encountered scoping
          issues or odd bugs, I realized that if we wanted to create a
          meaningful solution, I had to set aside my fears of inadequacy. I went
          from not trusting myself in picking a tech stack to experimenting with
          no code solutions and 3 different schema versions.
        </p>
        <h2>learnings</h2>
        <p>
          Before this project, I was not confident in my ability to lead a
          technical endeavor. I realized the hard way that a lack of belief in
          myself should not be projected onto my teammates. Over the course of 4
          months, I learned to trust my developers in their exploration and
          decision making, as well as adapt to our designers changes on behalf
          of real end users instead of bearing the stress of an entire project.
          I had never been so challenged logistically, socially, and technically
          to keep a team connected to each other; I was super proud of them for
          meeting our semester MVP. This was the first time where I truly felt
          like my actions, personal and technical, made a difference in a
          community.
        </p>
      </div>
    </div>
  </Layout>
);

export default withStyles(styles)(Siren);

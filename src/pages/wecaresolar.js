import * as React from "react";
import { Link } from "gatsby";
import NavBar from "../components/navBar";
import Layout from "../components/layout";
import { withStyles } from "@material-ui/core";
import { styles } from "../styles/customStyles";
import ProjectPage from "../components/projectPage";
import { StaticImage } from "gatsby-plugin-image";
import Boop from "../components/boop";
import UpArrow from "../assets/upArrow.svg";

const WCS = ({ classes }) => (
  <Layout>
    <NavBar />
    <div>
      <ProjectPage
        title={"we care solar"}
        role={"software developer"}
        github={"https://github.com/calblueprint/wecaresolar"}
      />
      <div style={{ padding: "0px 100px 100px 100px" }}>
        <div className={classes.pageLeft}>
          <h2>problem</h2>
          <p>
            {" "}
            <a
              className={classes.link}
              href="https://wecaresolar.org/"
              target="_blank"
            >
              {" "}
              We Care Solar{" "}
            </a>
            is a nonprofit that equips public health facilities with solar
            suitcases containing medical equipment to aid midwives during
            childbirth. Since midwives often work in rural, low connectivity
            regions, they can struggle to refer to equipment guides or contact
            suitcase technicians. This can pose a significant challenge if they
            encounter issues while operating on patients.{" "}
          </p>
          <StaticImage
            src="../images/suitcase.png"
            placeholder="blurred"
            alt="suitcase"
            layout="fullWidth"
          />
        </div>
        <div className={classes.pageRight}>
          <h2>approach</h2>
        </div>
        <div className={classes.pageLeft}>
          <p>
            I was part of a team of 6 that designed and developed a progressive
            web application for We Care Solar. Through user research, we learned
            that it was crucial that the app had offline functionality. As a
            result, we cached requests and data using Firebase and Redux
            whenever the app was working in an offline environment. This way,
            the app’s interface, written in Typescript, would still function
            uninterrupted. We Care Solar staff also requested the ability to
            modify app resources without having to understand the codebase,
            which we enabled with an Airtable database.{" "}
          </p>
          <p>
            A common pain point for non native English midwives was navigating
            the suitcase using paper manuals when experiencing poor connection,
            so we focused on relaying information through clear visualizations.
          </p>
          <p>
            I mainly worked on implementing the interactive suitcase feature,
            which came with its own set of challenges. The idea is that midwives
            can tap on an area of the suitcase, and zoom in to access a topic
            view or troubleshooting flow of relevant resources. I quickly
            learned that most React libraries supported a pinch-pan zoom, but
            few offered solutions for zooming based on area location. Nervous to
            attempt my own solution, I wrote the first version of this feature
            using a library that registered when a user entered a particular
            area. Even though this took weeks, I was unsatisfied with my
            approach, as I was exchanging one image for another to imitate a
            zoomed effect, without any actual zooming. Attempts to incorporate a
            custom zooming animation failed because I’d written a class
            component, not knowing that functional components could achieve the
            desired effect more easily, especially when setting state and type
            checking!{" "}
          </p>
          <p>
            After much deliberation and conversations with my peers, I decided
            to scrap my implementation entirely and start from scratch, with no
            libraries. I researched ways to create web animations, and stumbled
            upon a HTML 5 canvas example, which reset dimensions for each new
            image frame. I knew I wanted to use this approach, but I didn’t have
            my ‘aha’ moment until I asked a senior developer why there were so
            many different ways of writing a React component. Then, combining
            our knowledge of React state and drawing with canvas, we were able
            to{" "}
            <a
              className={classes.link}
              href="https://github.com/calblueprint/wecaresolar/blob/master/src/components/Suitcase/SuitcaseAnimation.tsx"
              target="_blank"
            >
              implement
            </a>{" "}
            a zooming effect based on location area. Pulling information from
            Redux and Airtable, we were even able to make coordinate areas
            modifiable by We Care Solar in the future. I learned the importance
            of abstraction and modular code, and that I could trust our
            implementation to be robust down the line. Biggest win: I finally
            wrote my FIRST NON CLASSROOM RECURSIVE function, and that made me
            very happy because recursion makes me very happy.{" "}
          </p>
          <p>
            Towards the end of our development period, I tackled styling edits
            from user feedback and debugged the search bar using React Router. I
            also helped design the Firebase schema and Redux slices for storing
            We Care Solar resources in the first stages of development.
          </p>
          <h2>learnings</h2>
          <p>
            {" "}
            I used to be a very cautious developer. I avoided refactoring online
            code examples out of fear I’d mess up, only to find that the
            perfectly worded snippet was too niche to reuse. This led me to
            believe that coding was an innate ability - if you knew React, you’d
            know how to do everything. Now, I find that the most effective
            solutions emerge from noticing{" "}
            <strong> patterns in implementations </strong>and{" "}
            <strong> researching the best possible tools to get there </strong>,
            something a CS class can’t teach due to structural constraints of a
            4 month semester and lack of collaboration on most assignments. I’d
            always run into moments where I didn’t know how to move forward and
            realized that I have to be willing to spend 2–3 hours scrounging the
            internet to recognize 1) what solutions are possible, and if
            implemented, 2) what limitations exist.{" "}
          </p>
          <p>
            {" "}
            A full project recap can be found{" "}
            <a
              className={classes.link}
              href="https://medium.com/blueprint/we-care-solar-a-project-recap-11b0025ac30c"
              target="_blank"
            >
              here.
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default withStyles(styles)(WCS);

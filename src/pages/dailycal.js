import * as React from "react"
import { Link } from "gatsby"
import NavBar from "../components/navBar"
import Layout from "../components/layout"
import { withStyles } from '@material-ui/core';
import { styles } from "../styles/customStyles"
import ProjectPage from "../components/projectPage"
import { StaticImage } from "gatsby-plugin-image"
import Boop from '../components/boop'
import UpArrow from '../assets/upArrow.svg'


const DailyCal = ({ classes }) => (
  <Layout>
    <NavBar/>
    <div>
        <ProjectPage 
            title={'daily californian projects'} 
            role={'web developer'} 
            github={'https://github.com/dailycal-projects/dailycalprojects'}
            click={'https://dailycal-projects.netlify.app/'}/> 
        <div style={{padding: '0px 100px 100px 100px'}}>
          <div className={classes.pageLeft}>
                  <h2>problem</h2>
                  <p>I joined the <a className={classes.link} href="https://dailycal-projects.netlify.app/" target="_blank"> Daily Cal </a> data journalism team because I missed the creativity in presenting real world information. It’d almost been a year after I quit my six year streak of competitive debate, and I needed a new outlet for critical engagement of ideas. I also wanted to give data journalism a shot. Much of my excitement was rechanneled into frustration as I onboarded a passionate team that struggled to publish their work. </p>
                  <p>Even though developers were dedicated to their projects, creating and analyzing data visualizations was an uphill battle. Many of us had no experience in D3, and while learning new skills is not an issue, the outdated structure and tech stack of project repositories discouraged team members from coding. A tumblr page served as our website, and each project was theoretically created using a <a className={classes.link} href="https://github.com/The-Politico/generator-politico-interactives" target="_blank" > generator </a>last updated in 2018, which many later admitted they never got to work organically and instead forked copies of past projects on GitHub. I really hated seeing people discouraged, and took it upon myself to restructure the developing/publishing process. </p>
              </div>
              <div className={classes.pageRight}>
                  <h2>approach</h2>
              </div>
              <div className={classes.pageLeft}>
                  <p>Coming from a React background, I really tried to set my inclinations aside when researching ways to bootstrap a site that would allow developers to 1) use Git version control to publish individual projects to one place, 2) embed data visualizations with article text, and 3) learn relevant tools that made them excited to develop. </p>
                  <p>A week before finals, I was stalking UCLA’s data journalism repository, The Stack, and remembered how our editor once said their system would be the dream. I clicked the ‘older’ button until I hit their earliest commits in 2015 (this was very inefficient), and realized they set up a Jekyll template. After doing some research, I’d found a tentative solution that beat Jekyll’s slow compilation time: Gatbsy. It also happened to be a static site generator built on React, so I figured this would be a good opportunity to explore GraphQL on familiar ground. Better yet, visualizations could be made with components! I didn’t see a reason why we couldn’t use markdown for embedding visualizations like UCLA did, so Gatsby it was (in hindsight, I should’ve researched this). I really went on a research frenzy that evening, as seen here. I ended up reaching out to The Stack and we had a great call with Columbia’s The Spectator, where I shared my restructuring ideas and learned a lot from how developers worked in their newsrooms. </p>
                  <p>In the spirit of demystifying one’s process, here's a list of my most prominent mistakes. The common theme is trial and error, but read documentation first. </p>
                  <ul>
                    <li>Trying to use npm packages without configuring Gatsby plugins too. </li>
                    <li>Creating articles from regular markdown files before realizing React components are only compatible with mdx files. </li>
                    <li>Foregoing a layout component for styling. I realized the need for this later when making components globally accessible through MDXProvider. </li>
                    <li>Deleting starter code I didn’t realize would be helpful later, like social media metadata content</li>
                    <li>Deleting PropTypes for type checking in plain React. Some components wouldn’t work unless I type checked, especially for array types. Anyways, I initially used Typescript, but .module.css files required plugins that I couldn’t get working. </li>
                    <li>Note which component libraries load during server vs client side rendering. Since Gatsby loads all pages during SSR, components that load on the client side are incompatible (ex: Leaflet). A browser null check & build time handling error resolves this! </li>
                  </ul>
                  <h2>learnings</h2>
                  <p> I had many, many hiccups setting up this whole circus. Without a team of similar background, I really pushed myself when debugging something because I knew I’d be responsible for helping others down the line. I’d always marvelled at other developers for being debugging wizards, but I realized I could become the same way if I honed my search for the right things. Perhaps most unexpectedly, <strong> I trained my mind to retain technical information implicitly. </strong> I was always a say-before-thinking kind of person, so this project forced me to forego my automatic panic response whenever a bug occurred. Overall though, the most rewarding part of this experience was hopping on calls to help team members debug their latest articles, or receiving CodeSandbox component drafts after a workshop. There will be hiccups to come, but I hope I’m providing a framework for DC data journalists to overcome them too.</p>
              </div>
          </div>
    </div>
  </Layout>
)

export default withStyles(styles)(DailyCal)

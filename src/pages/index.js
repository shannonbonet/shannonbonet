import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { withStyles } from '@material-ui/core';
import { styles } from "../styles/customStyles"
import Layout from "../components/layout"
import Boop from '../components/boop'
import NavBar from "../components/navBar"
import TeaCup from "../components/teaCup"
import CardGrid from "../components/cardGrid"
import DownArrow from '../assets/downArrow.svg'
import UpArrow from '../assets/upArrow.svg'


const IndexPage = ({ classes }) => (
  <Layout >
    <div id="home">
      <NavBar />
      <div className={classes.home}> 
      <StaticImage src="../images/home.png" placeholder="blurred" alt="tea cup" width={1000} />
        <h3 style={{paddingRight: `22rem`}}>developer & <br/> project leader</h3>
        <TeaCup />
        <br/> <br/> <br/> <br/> <br/> <br/>
        <Boop rotation={20} timing={200}> 
          <a href="#project-grid"> <DownArrow />  </a>
        </Boop>
      </div>
      <a id="project-grid"> 
        <CardGrid />
      </a>
      <div className={classes.homeDown}>
        <Boop rotation={20} timing={200}> 
            <a href="#home"> <UpArrow />  </a>
        </Boop>
      </div>
    </div>
  </Layout>
)

export default withStyles(styles)(IndexPage)

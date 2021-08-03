import * as React from "react"
import PropTypes from 'prop-types';
import { Link } from "gatsby"
import Boop from './boop'
import Card from './projectCard'
import { withStyles } from '@material-ui/core';
import { styles } from "../styles/customStyles"

const CardGrid = ({ classes }) => {

    const titles = ["we care solar", "daily californian", "reading between the redlines", "coming september 2021!"]
    const roles = ["software developer", "web developer", "data journalism", "project lead"]
    const links = ['/wecaresolar', '/dailycal', 'https://dailycal-projects.netlify.app/2021-07-10-redlining', '/']

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10vh' }}>
            <h1 style={{paddingBottom: '50px'}}>projects</h1>
            <div className={classes.grid}>
                {titles.map((project, i ) => {
                    return (<Link to={links[i]} style={{textDecoration: 'none'}} > <Card title={project} image={i} role={roles[i]} /> </Link>)
                 })}
            </div>
        </div>
    )
}



export default withStyles(styles)(CardGrid) 

CardGrid.propTypes = {
    titles: PropTypes.array,
    roles:  PropTypes.array,
    links: PropTypes.array,
  };
  
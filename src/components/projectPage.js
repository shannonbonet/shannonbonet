import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { StaticImage } from "gatsby-plugin-image"
import { styles } from '../styles/customStyles';
import GitHub from '../assets/github.svg'
import { Link } from 'gatsby';
import BackButton from '../assets/backArrow.svg'
import Boop from '../components/boop'

import * as buttonStyles from './buttons.module.css';

const ProjectPage = ({
  classes, title, role, github
}) => {
    return (
    <div style={{padding: '0px 60px 0px 60px'}}>
        <Link to='/projects'  > <Boop rotation={20} timing={200}> <BackButton /> </Boop> </Link>
        <div className={classes.project}>
            <h1>{title}</h1>
            <h3 style={{marginBottom: '20px'}}>{role}</h3>
            <a href={github} target="_blank" style={{ textDecoration: 'none' }}>
                <GitHub className={classes.iconHover} />
            </a>
        </div>
    </div>
    )
}
    

export default withStyles(styles)(ProjectPage);

import * as React from "react"
import { Link } from "gatsby"
import Shelf from '../assets/shelf.svg'
import Boop from './boop'
import { withStyles } from '@material-ui/core';
import { styles } from "../styles/customStyles"
import * as buttonStyles from './buttons.module.css';

const NavBar = ({classes}) => {
    return (
        <div className={classes.navBar}>
            <Boop rotation={20} timing={200}>
                <Shelf/>
            </Boop>
            <a href="https://drive.google.com/file/d/14wdERKN_Dd6nPW6SntKG63uCwLUL9F4o/view?usp=sharing" className={buttonStyles.button} activeClassName={buttonStyles.active}><h3>resume</h3></a>
            <Link to="/writing" className={buttonStyles.button} activeClassName={buttonStyles.active}> <h3>writing</h3> </Link>
            <Link to="/projects" className={buttonStyles.button} activeClassName={buttonStyles.active}> <h3>projects</h3></Link>
            <Link to="/" className={buttonStyles.button} activeClassName={buttonStyles.active}> <h3>home </h3></Link>
        </div>
    )
}

export default withStyles(styles)(NavBar)

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { withStyles } from '@material-ui/core';
import { styles } from "../styles/customStyles"
import * as cupStyles from './cup.module.css';
import Boop from './boop'

const TeaCup = ({classes}) => {
    return (
        <div style={{marginLeft: '16rem'}}>
            <div>
                <div className={cupStyles.steam} id={cupStyles.steam1}> </div>
                <div className={cupStyles.steam} id={cupStyles.steam2}> </div>
                <div className={cupStyles.steam} id={cupStyles.steam3}> </div>
                <div className={cupStyles.steam} id={cupStyles.steam4}> </div>
            </div>
            <StaticImage src="../images/teaCup.png" alt="tea cup" width={100} />
        </div>
    )
}

export default withStyles(styles)(TeaCup)
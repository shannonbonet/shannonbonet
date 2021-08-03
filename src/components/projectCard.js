import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { StaticImage } from "gatsby-plugin-image"
import { styles } from '../styles/customStyles';
import Boop from './boop'
import Dots from '../assets/dots.svg'
import Click from '../assets/click.svg'

const ProjectCard = ({
  classes, title, image, role
}) => (
    <Card className={classes.card}>
      <Dots style={{padding: '10px 0px 0px 15px'}}/>
      <div className="cardContent">
        <h3 style={{ paddingBottom: '5px' }}>
          {title}
        </h3>
      </div>
      <div className="cardHidden">
        <div style={{display: 'flex', flexDirection: 'row'}}>
          {role} &ensp;
          <Boop rotation={20} timing={200} > <Click/> </Boop>
        </div>
          <div style={{width: '60%', paddingTop: '10px'}}>
          { image == 0 ? <StaticImage src={'../assets/wcs.svg'} placeholder="blurred" alt="project image" width={250} height={200} /> 
            : image == 1 ?  <StaticImage src={'../assets/dailycal.svg'} placeholder="blurred" alt="project image" width={300} imgStyle={{paddingTop: '10px'}}/> 
            : image == 2 ?  <StaticImage src={'../assets/redlining.svg'} placeholder="blurred" alt="project image" width={300} /> 
            : image == 3 ?  <StaticImage src={'../assets/tbd.svg'} placeholder="blurred" alt="project image" width={250} height={200} /> 
            : null 
          }
        </div>
      </div>
    </Card>
);
export default withStyles(styles)(ProjectCard);

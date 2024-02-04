import * as React from 'react';
import Layout from '../components/Layout';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { projects } from '../config/projects';
import {
  projectTitle
} from '../components/layout.module.css';
import { textFieldClasses } from '@mui/material';


const projectPage = () => {
  return (
    <Layout>
      {projects.map((item) => 
        <Card sx={{ display: 'flex', margin:7 }}>
          <CardMedia
            component="img"
            sx={{ width: 130 }}
            image= {item.image}
            alt={item.imageAlt}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography className={projectTitle} component="div" variant="h5">
                {item.activeLink === false
                  ? <>{item.name}</>
                  : <Button variant="contained" href={item.link} target="_blank" sx={{marginBottom: 2}}>
                      {item.name}
                    </Button>
                }
              </Typography>
              {item.subtitle !== false
              &&<Typography color="text.secondary" variant="overline">{item.subtitle}</Typography>
              }
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {item.description} <strong>Built With: </strong>{item.techStack} 
                {item.otherTech !== false 
                  && <><strong> Utilizes: </strong> {item.otherTech}</>
                }
              </Typography>
              <Button color="secondary" href={item.altLink} target="_blank" sx={{marginTop: 1}}>
                {item.altLinkDesc}
              </Button>
            </CardContent>
          </Box>
        </Card>
      )}
    </Layout>
  )
}

export default projectPage;

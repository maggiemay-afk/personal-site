import * as React from 'react';
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails";
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Layout from '../components/Layout';
import { courses } from '../config/courses';
import {
  heading,
  specialText,
  accordion,
  gitHubLink,
  gitHubIcon,
  courseDesc
} from '../components/layout.module.css';


const EducationPage = () => {
  return (
    <Layout>
      <h1 className={heading}>degree and course information</h1>
      <span className={specialText}>bachelor of science in applied computing</span>
      <div className={accordion}>
        {courses.map((item) =>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {item.githubIcon === true
                ? <>{item.name}<GitHubIcon className={gitHubIcon} /></>
                : <>{item.name}</>
              }
            </AccordionSummary>
            <AccordionDetails className={courseDesc}>
              {item.description}
              {item.githubIcon === true
                && <Link
                  href={item.courseLink}
                  underline="hover"
                  target="_blank"
                  className={gitHubLink}
                >
                  {item.courseLinkDesc}
                </Link>
              }
              {item.projectLink !== false
                && <Link
                  href={item.projectLink}
                  underline="hover"
                  target="_blank"
                  className={gitHubLink}
                >
                  {item.projectLinkDesc}
                </Link>
              }
            </AccordionDetails>
          </Accordion>
        )}
      </div>
    </Layout>
  )
}

export default EducationPage;
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

import Layout from '../components/Layout';
import {
  heading,
  specialText,
  accordion,
  gitHubLink,
} from '../components/layout.module.css';


const EducationPage = () => {
  return (
      <Layout>
        <h1 className={heading}>degree and course information</h1> 
        <span className={specialText}>bachelor of science in applied computing</span>
        <div className={accordion}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
               APC 300 - Programming I &emsp;
              <GitHubIcon></GitHubIcon>
            </AccordionSummary>
            <AccordionDetails>
              Java. Program design and implementation, debugging and testing, 
              simple data types, conditionals, loops, and methods.<br></br>
              <Link 
                href='https://github.com/maggiemay-afk/introToJava' 
                underline="hover"
                target="_blank" 
                className={gitHubLink}
              >
              {'View my course work on GitHub'}
              </Link>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              APC 310 - Math (for computer science)
            </AccordionSummary>
            <AccordionDetails>
              Logic sets, functions, reasoning, probability, relations, graphs, trees, Boolean algebra, algorithms.   
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              APC 340 - Legal and Ethical Responsibilities
            </AccordionSummary>
            <AccordionDetails>
              Legal and ethical considerations associated with developing software and information systems. 
              Topics include data privacy, intellectual property, and compliance with regulatory requirements. 
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              APC 350 - Programming II &emsp;
              <GitHubIcon></GitHubIcon>
            </AccordionSummary>
            <AccordionDetails>
              Java. Methods, file IO, arrays, abstract data types, classes, GUIs, inheritance, composition.<br></br>
              <Link 
                href='https://github.com/maggiemay-afk/progTwoJava' 
                underline="hover"
                target="_blank"
                className={gitHubLink}
              >
              {'View my course work on GitHub'}
              </Link>              
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              APC 360 - Database Management I
            </AccordionSummary>
            <AccordionDetails>
              SQL. Design and implementation of relational databases.
              Data modeling techniques including entity-relationships, database normalization, and querying features.          
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              APC 370 - Systems Analysis and Design
            </AccordionSummary>
            <AccordionDetails>
              Systems development life cycle including scope definition, problem analysis, 
              requirements analysis, logical design, and decision analysis. 
              Other topics include use case development, gap analysis, finalcial analysis, feasibility analysis          
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              APC 380 - Project Management Techniques
            </AccordionSummary>
            <AccordionDetails>
              Introduction to project management tools and techniques, including project selection, 
              project life cycle, stakeholder management, scope management, budget management, 
              scheduling, quality management, risk identification, and procurement management.    
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              APC 390 - Object Oriented Programming &emsp;
              <GitHubIcon></GitHubIcon>
            </AccordionSummary>
            <AccordionDetails>
              Java. Object-Oriented programming techniques. Classes, interfaces, exception handling, 
              inheritance, polymorphism, overloading, abstract classes and methods, serialization, generics,
              and recursion.<br></br>
              <Link 
                href='https://github.com/maggiemay-afk/objectOrientedProgramming' 
                underline="hover" 
                target="_blank"
                className={gitHubLink}
              >
              {'View my course work on GitHub'}
              </Link>   
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              APC 400 - Applied Communication Networks
            </AccordionSummary>
            <AccordionDetails>
              Design, configuration, and problem solving of computer networks. Topics include TCP/IP and 
              OSI architecture, application layer, transport layer, network layer, data link, and physical layers.
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              APC 410 - Database Management II
            </AccordionSummary>
            <AccordionDetails>
              MongoDB, Apache Cassandra. Non-relational (NoSQL) databases such as document, graph, key-value, and wide column databases. 
              Topics include data types, CRUD (create, read, update, delete) functions, queries, cursors, indexing,
              dynamic schema design, scalability, analysis of data, and data security. 
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              APC 420 - Computer Security I &emsp;
              <GitHubIcon></GitHubIcon>
            </AccordionSummary>
            <AccordionDetails>
              Java. Topics cover security and risk management, security engineering, 
              identity and access management, security operations, cryptography, access control models, 
              malicious software, security policies, security models, trust, vulnerability assessment, 
              security standards and evaluation, and secure storage.<br></br>
              <Link 
                href='https://github.com/maggiemay-afk/CompSec' 
                underline="hover" 
                target="_blank"
                className={gitHubLink}
              >
              {'View my course work on GitHub'}
              </Link> 
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              APC 430 - Applied Data Structures and Algorithms
            </AccordionSummary>
            <AccordionDetails>
              Java. Abstract data types, dynamic arrays, iterators, linked lists, generics, stacks,
              queues, binary search tree, collections, maps, hashing, graphs, sorting, graphics, 
              web programming, and user interfaces.<br></br>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              APC 440 - Web Development &emsp;
              <GitHubIcon></GitHubIcon>
            </AccordionSummary>
            <AccordionDetails>
              HTML, CSS, JavaScript, Bootstrap, Python, Django, web services, and database integration<br></br>
              <Link 
                href='https://github.com/maggiemay-afk/webDev' 
                  underline="hover" 
                  target="_blank"
                  className={gitHubLink}
                >
              {'View my course work on GitHub'}
              </Link>
              <br></br>
              <Link 
                href='https://github.com/maggiemay-afk/djangoProject' 
                underline="hover" 
                target="_blank"
                className={gitHubLink}
              >
              {'View my Django project on GitHub'}
              </Link>  
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              APC 450 - Operating Systems
            </AccordionSummary>
            <AccordionDetails>
              Topics covered include processes, threads, scheduling, concurrency control, 
              memory management, and systems programming using POSIX API.<br></br>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              APC 460 - Software Engineering Practices
            </AccordionSummary>
            <AccordionDetails>
              Java. Topics covered include waterfall, iterative and agile approaches to software development, 
              IDEs, unified modeling language (UML), testing frameworkds, requirement analysis, 
              object-oriented analysis, test-driven development, and design patterns.<br></br>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              APC 490 - Capstone Project Preperation
            </AccordionSummary>
            <AccordionDetails>
              Review of software engineering practices, project management techniques,
              systems analysis, communication, and project selection and planning.<br></br>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              APC 495 - Capstone Project (Spring 2024) &emsp;
              <GitHubIcon></GitHubIcon>
            </AccordionSummary>
            <AccordionDetails>
            Updates to Ambiance.dev including: Initialize Firestore database, 
            create administrative UI, enable authentication, add API routes, and more.<br></br>
            <Link 
                href='https://ambiance.dev/' 
                underline="hover" 
                target="_blank"
                className={gitHubLink}
              >
              {'Checkout Ambiance.dev'}
            </Link>  
            <br></br>            
            <Link 
                href='https://github.com/hermanator608/ambiance' 
                underline="hover" 
                target="_blank"
                className={gitHubLink}
              >
              {'See my progress on GitHub'}
            </Link>
            </AccordionDetails>
          </Accordion>

        </div> 
      </Layout>
  )
}

export default EducationPage;
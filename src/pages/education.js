import * as React from 'react';
import Layout from '../components/Layout';
import {
  heading,
  specialText,
  paragraph
} from '../components/layout.module.css';


const EducationPage = () => {
  return (
      <Layout>
          <h1 className={heading}>degree and course information</h1> 
          <span className={specialText}>bachelor of science in applied computing</span>
          <br></br>
          <p className={paragraph}></p>  
      </Layout>
  )
};

export default EducationPage;
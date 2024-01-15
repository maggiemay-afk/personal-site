import * as React from 'react';
import Layout from '../components/Layout';
import {
  heading,
  paragraph,
  specialText,
  skills
} from '../components/layout.module.css'


const AboutPage = () => {
  return(
    <Layout>
      <h1 className={heading}>about me</h1>
      <p className={paragraph}>My name is Maggie. As a Wisconsin-native, generally pronounced: 'may-gee' with an unnecessary 'y'. 
        I first started teaching myself to code by playing games like TwilioQuest and completing Udemy 
        and Codecademy courses. Eventually, I decided to have someone grade my work and went back to school for an 
        applied computing degree <i>(Expected May 2024)</i>. Emphasis on 'back to school' because I have a previous bachelor's degree in psychology. 
        So, for me, this is the start of a career swap into tech and this website should serve to document that. 
      </p>
      <p className={paragraph}>
        Currently, I work as a Database Coordinator for Indiana University, dealing with the nuances of Undergraduate curriculum.
        In my free time, I enjoy working on personal projects - learning new tools and languages. 
        Lately, I've been working on a trivia game for one of my favorite RPGs - World of Warcraft.
        This particular application is built using TypeScript, with Node.js for the backend, and React for the frontend. 
        Check out the 'Projects' page to see what else i've made and 'Education' to see the courses 
        I've taken and a sampling of my work on GitHub.
      </p>
    </Layout>
  )
};

export default AboutPage;
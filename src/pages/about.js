import * as React from 'react';
import Layout from '../components/Layout';
import { GiSwordsEmblem } from '@react-icons/all-files/gi/GiSwordsEmblem';
import {
  heading,
  specialText,
  paragraph
} from '../components/layout.module.css'


const AboutPage = () => {
  return(
    <Layout>
      <h1 className={heading}>just the highlights</h1>
      <p className={paragraph}>My name is Maggie. As a Wisconsin-native, pronounced: 'may-gee' with an unnecessary 'y'. 
        Currently, I work as a Database Coordinator for Indiana University, dealing with the nuances Undergraduate Curriculum.
        This means, some of my best programming occurs between the hours of 6:00 PM and I should really be in bed - o'clock.
        During this time, you can find me coding for personal or school related projects. Lately, I've been working 
        on a trivia game for one of my favorite RPGs - World of Warcraft.
      </p>
      <p className={paragraph}>I first started teaching myself to code by playing games like TwilioQuest and completing Udemy 
        and Codecademy courses. Eventually, I decided to have someone else grade my work and went back to school for an 
        applied computing degree. Emphasis on 'back to school' because I have a previous bachelor's degree in psychology. 
        So, for me, this is the start of a career swap into tech and this website should serve to document that. 
        Check out the Projects page to see what i've made and what I'm currently working on.
      </p>
    </Layout>
  )
};

export default AboutPage;
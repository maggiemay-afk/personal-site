import * as React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage = () => {
  return(
    <Layout pageTitle="About Maggie">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <StaticImage
          alt= "A most fabulous self portrait of the site owner, Maggie"
          src= "../images/maggie.jpg"
        />
    </Layout>
  )
};

export default AboutPage;
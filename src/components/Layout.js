import * as React from 'react';
import { Link, useStaticQuery, graphql, } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FaGithubSquare } from '@react-icons/all-files/fa/FaGithubSquare';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import ButtonAppBar from './header';
import { 
  container,
  heading,
  siteTitle,
  sideBar,
  profilePhoto,
  sideBarNavLink,
} from './layout.module.css';


const Layout = ({pageTitle, children}) => {
  const data = useStaticQuery(graphql`
  query LayoutSiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

    return (
      <div className={container}>
        <title>{pageTitle} | { data.site.siteMetadata.title }</title>
        <div className={sideBar}>
          <h1 className={siteTitle}>Maggie<br/>Herms</h1>
          <StaticImage 
            className={profilePhoto}
            alt= "A most fabulous self portrait of the site owner, Maggie"
            src= "../images/maggie.jpg"
            layout="fixed"
            height={180}
            width={180}
          />
          <a href="https://github.com/maggiemay-afk" target="_blank" rel="noopener noreferrer" className={sideBarNavLink}>
              <FaGithubSquare /> GitHub<br/>
          </a>
          <a href="https://www.linkedin.com/in/maggie-herms-a68a35181/" target="_blank" rel="noopener noreferrer" className={sideBarNavLink}>
              <FaLinkedin /> LinkedIn
          </a>
        </div>
        <ButtonAppBar></ButtonAppBar>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    );
};


export default Layout;
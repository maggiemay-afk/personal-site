import * as React from 'react';
import { useStaticQuery, graphql, } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FaGithubSquare } from '@react-icons/all-files/fa/FaGithubSquare';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonAppBar from './header';
import { 
  container,
  siteTitle,
  sideBar,
  profilePhoto,
  sideBarNavLink,
} from './layout.module.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#112D32',
      light: '#88bdbc',
      dark: '#88bdbc',
      contrastText: '#ffffff'
    }
  }
});

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
      <ThemeProvider theme={theme}>
        <div className={container}>
          <title>{pageTitle} | { data.site.siteMetadata.title }</title>
          <div className={sideBar}>
            <h1 className={siteTitle}>Maggie<br/>Herms</h1>
            <StaticImage 
              className={profilePhoto}
              alt= "A most fabulous self portrait of the site owner, Maggie"
              src= "../images/profile.jpg"
              layout="fixed"
              height={180}
              width={180}
            />
            <a href="https://github.com/maggiemay-afk" target="_blank" rel="noopener noreferrer" className={sideBarNavLink}>
                <FaGithubSquare /> GitHub<br/>
            </a>
            <a href="https://www.linkedin.com/in/maggie-herms/" target="_blank" rel="noopener noreferrer" className={sideBarNavLink}>
                <FaLinkedin /> LinkedIn
            </a>
          </div>
          <ButtonAppBar></ButtonAppBar>
          <main>
            {children}
          </main>
        </div>
      </ThemeProvider>
    );
};

export default Layout;
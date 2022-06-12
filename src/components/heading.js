import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const myQuery = graphql`
query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
}
`

const Header = () => {
    const data = useStaticQuery(myQuery)
    return (
        <Header>
            <h1> { data.site.siteMetadata.title }</h1>
        </Header>
    )
}

export default Header
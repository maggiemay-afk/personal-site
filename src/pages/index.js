import * as React from "react"
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"

// markup
const IndexPage = () => {
  return (
      <Layout pageTitle="Greetings, Azerothians">
          <h2>Welcome to my personal website</h2>  
          <StaticImage
            alt="A most fabulous self portrait of the site owner, Maggie"
            src="https://picsum.photos/200/300"
          />
      </Layout>
  )
}

export default IndexPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 class="leading-none text-5xl text-gray-900">CT Digital Service</h1>
    <div class="leading-normal text-xl text-gray-700">
      <p>CT Digital is an open collaborative team with a vision of building and delivering better services for the people of Connecticut. We are passionate about transforming the way government works and bringing human-centered design, data-driven decision making, and an agile performance-orientation to how we work. We aim to radically change how we work to make government work better and provide more meaningful interactions for the people of Connecticut. We believe in working in the open, in listening before doing, and flipping the model of government on its head. Citizens shouldn’t have to understand how government works in order to work with government.</p>
      <p>We aim to provide a meaningful experience for citizens and businesses that lowers the state’s cost to provide services and reduces time for citizens and businesses to accomplish what they want.</p>
      <p>If you want to learn more about what we're working on, or to work with us, send us an email <Link href="mailto:helloctdigital@ct.gov">helloctdigital@ct.gov</Link>.</p>
    </div>
  </Layout>
)

export default IndexPage

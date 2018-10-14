import React from 'react';

import Layout from '../components/layout/layout';

import './index.scss';

const IndexPage = () => (
  <Layout>
    <div className="Home__content">
      <h1 className="Home__headline">Sam Kuhlmann</h1>
      <div className="Home__block">
        <p>I'm a software developer. I like delivering high quality applications solving human and business problems.</p>
      </div>
      <div className="Home__block Home__block--work">
        <p>Founder and Development at <a href="https://odyssy.io">Odyssy</a></p>
        <p><a href="https://www.wanderingbloom.com">Joycean</a></p>
        <a className="button" href="mailto:samkuhlmann@gmail.com">Make Contact</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage

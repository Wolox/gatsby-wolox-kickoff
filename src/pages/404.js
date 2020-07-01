import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    {/* eslint-disable-next-line react/jsx-pascal-case */}
    <SEO title="404: Not found" />
    <h1>Page not Found :(</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;

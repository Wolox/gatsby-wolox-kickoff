import React from 'react';

import Hero from '@components/Hero';
import Layout from '@components/Layout';
import SEO from '@components/seo';
import Content from '@components/Content';
import CallToAction from '@components/CallToAction';

const IndexPage = () => (
  <Layout>
    {/* eslint-disable-next-line react/jsx-pascal-case */}
    <SEO />
    <Hero />
    <Content />
    <CallToAction />
  </Layout>
);

export default IndexPage;

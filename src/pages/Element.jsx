import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <article className="container box style3">
      <header>
        <h3>Welcome!</h3>
        <p style={{ maxWidth: '65%' }}>
          I am Monika I am an avid music lover with a passion for all things
          photography. I love capturing unique moments that my clients are
          excited about. If you like my style, get in touch and let's talk about
          your ideas!
        </p>
      </header>
      <section>
        <header>
          <p></p>
        </header>
        <p>Thanks for stopping by :)</p>
        <hr />
      </section>
      <section>
        <header>
          <h3>Tat Family Session</h3>
        </header>
        <blockquote>
          Monika was simply wonderful! It was our first time in London and we
          wanted to have some family pictures taken with the famous London
          Landmarks. Our session was just fabulous! Our kids warmed up to Monika
          right away! I can’t say enough about her friendliness and her eye for
          the camera. We not only have wonderful memories of London now but we
          also now have priceless photos of our family that we will be looking
          at forever and ever. I am recommending her to everyone I know and you
          will as well!
        </blockquote>
      </section>
    </article>

    <Footer />
  </Layout>
);

export default IndexPage;

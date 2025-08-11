import Layout from './layout/Layout/Layout';
import About from './views/About/About';
// import Feedback from './views/Feedback/Feedback';
// import Hero from './views/Hero/Hero';
import Partner from './views/Partner/Partner';
import Services from './views/Services/Services';

function App() {
  return (
    <Layout>
      {/* <Hero /> */}
      <Services />
      <About />
      {/* <Feedback /> */}
      <Partner />
    </Layout>
  );
}

export default App;

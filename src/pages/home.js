import Contact from '../components/contact';
import Grid from '../components/grid';

import "../assets/scss/pages/_home.scss";

function Home() {
  return (
    <div className="p-home">
      <Contact />

      <Grid />
    </div>
  );
}

export default Home;

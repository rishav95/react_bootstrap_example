import Contact from '../components/contact';
import Grid from '../components/grid';

import "../assets/scss/pages/_home.scss";

function Home() {
  return (
    <div className="p-home">
      <div className="p-home__toolbar">
        <h1>Homepage</h1>

        <button class="btn btn-success">Button</button>
      </div>

      <Contact />

      <Grid />
    </div>
  );
}

export default Home;

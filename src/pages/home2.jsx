import './home.css';
import Navbar from '../components/navbar';
import Discover from '../components/discover';
import Grid from '../components/grid';
import Recomendation from '../components/recomendation';

function Home2() {
  return (
    <div className="App">
      <Navbar />
      <Discover />
      <Recomendation/>
      <Grid/>
    </div>
  );
}

export default Home2;
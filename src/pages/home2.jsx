import './home.css';
import Navbar from '../components/navbar';
import Discover from '../components/discover';
import Grid from '../components/grid';
function Home2() {
  return (
    <div className="App">
      <Navbar />
      <Discover />
      <Grid/>

    </div>
  );
}

export default Home2;
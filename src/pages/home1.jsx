import './home.css';
import Header from '../components/header';
import Discover from '../components/discover';
import About from '../components/about';

function Home1() {
  return (
    <div className="App">
      <Header />
      <Discover />
      <About />
    </div>
  );
}

export default Home1;
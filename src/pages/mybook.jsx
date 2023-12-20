import './home.css';
import Navbar from '../components/navbar';
import MyBookNav from '../components/mybooknav';
import Grid from '../components/grid2';
function Mybook() {
  return (
    <div className="App">
      <Navbar />
      <MyBookNav />
      <Grid/>

    </div>
  );
}

export default Mybook;
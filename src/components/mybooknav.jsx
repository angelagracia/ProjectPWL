import './mybooknav.css';
import Search from './search';

function Mybooknav(){
    return(
        <div className="container5">
           <nav className='wrapper5'>
                <div className="titleSearch">
                    <Search/>
                </div>
                <ul className="bookNav">
                    <li>
                        <a href="">Favorite</a>
                    </li>
                    <li>
                        <a href="">On Going</a>
                    </li>
                    <li>
                        <a href="">Wishlist</a>
                    </li>
                </ul>
           </nav>
        </div>
    );
}
export default Mybooknav
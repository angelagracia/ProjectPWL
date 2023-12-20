import './mybooknav.css';

function Mybooknav(){
    return(
        <div className="container5">
           <nav className='wrapper5'>
                <div className="titleSearch">
                    <div>
                        My Books
                    </div>
                    <div>
                        <input className='searchBar2' type="text" />
                        <button className='btnSearch2'>search</button>
                    </div>
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
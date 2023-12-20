import logo from '../img/logo.png';
import account from '../img/account.png';
import './navbar.css';
import { useNavigate } from 'react-router-dom'

function Navbar(){
    const navigate = useNavigate()
    return(
        <div className="container">
           <nav className='wrapper'>
                <div className='brand'>
                    <div className="logo" >
                        <img src={logo} alt="gambar logo" />
                    </div>
                    <div className='name'>
                        Ourlib
                    </div>
                </div>
                <ul className='navigation'>
                    <li className='home'>
                        <a onClick={() => navigate('/home')}>Home</a>
                    </li>
                    <li className='myBook'>
                        <a onClick={() => navigate('/mybook')}>My Books</a>
                    </li>
                    <li>
                        <a href=""><img src={account} alt="" /></a>
                    </li>
                </ul>
           </nav>
        </div>
    );
}
export default Navbar
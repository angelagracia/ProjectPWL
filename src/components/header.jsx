import logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom'
import './header.css';

function Header(){
    const navigate = useNavigate()

    return(
        <div className="container">
            <nav className='wrapper'>
                <div className='brand'>
                    <div className="logo" >
                        <img src={logo} alt="gambar logo" />
                    </div>
                    <h1 className="name">Ourlib</h1>
                </div>
                <ul className='accContainer'>
                    <li className='login'>
                        <button onClick={() => navigate('/login')}>Log In</button>
                    </li>
                    <li className='createAcc'>
                        <button onClick={() => navigate('/register')}>Create Account</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Header
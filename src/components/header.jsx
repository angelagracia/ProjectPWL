import logo from '../img/logo.png';
import './header.css';

function Header(){
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
                        <button>Log In</button>
                    </li>
                    <li className='createAcc'>
                        <button>Create Account</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Header
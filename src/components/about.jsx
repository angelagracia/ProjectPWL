import book from '../img/books.png';
import './about.css';


function About(){
    return(
        <div className="container3">
            <div className='wrapper3'>
                <div className='booksImg'><img src={book} alt="gambar buku" /></div>
                <div className='section'>
                    <div className='abt'>About Us</div>
                    <div className='text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla libero a turpis viverra vehicula. Sed ac pellentesque ligula, ac pharetra justo. Donec ut erat vitae tortor accumsan convallis. Aenean ornare commodo purus sed semper.
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About
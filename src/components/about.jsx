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
                        Ourlib is the site for readers and book recommendations. Our mission is to help readers discover books they love and get more out of reading. We allows individuals to search its database of books and annotations. Users can sign up and register books to generate library catalogs and reading lists.
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About
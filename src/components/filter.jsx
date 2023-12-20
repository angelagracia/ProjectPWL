import './filter.css';

const bookList = [
    {
        id: "001",
        title: "The Faults in Our Stars",
        author: "John Green",
        genre: ["Young Adult", "Fiction"],
        pages: "318 pages",
        year: "2014",
        publisher: "Penguin Young Readers Group",
        isbn: "9780142424179",
        cover: "https://upload.wikimedia.org/wikipedia/en/a/a9/The_Fault_in_Our_Stars.jpg",
        synopsis: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten."
    },
    {
        id: "002",
        title: "The Perks of Being A Wallflower",
        author: "Stephen Chbosky",
        genre: ["Young Adult", "Fiction"],
        pages: "213 pages",
        year: "2009",
        publisher: "MTV Books",
        isbn: "9781451696196",
        cover: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781847394071&w=&h=570",
        synopsis: "The critically acclaimed debut novel from Stephen Chbosky, Perks follows observant 'wallflower' Charlie as he charts a course through the strange world between adolescence and adulthood. First dates, family drama, and new friends. Sex, drugs, and The Rocky Horror Picture Show. Devastating loss, young love, and life on the fringes. Caught between trying to live his life and trying to run from it, Charlie must learn to navigate those wild and poignant roller-coaster days known as growing up."
    },
    {
        id: "003",
        title: "The Purpose Driven Life",
        author: "Rick Warren",
        genre: ["Christian Literature", "Non-Fiction"],
        pages: "361 pages",
        year: "2012",
        publisher: "Zondervan",
        isbn: "9780310329060",
        cover: "https://m.media-amazon.com/images/I/41ew7Q10GeL._SY445_SX342_.jpg",
        synopsis: "In The Purpose Driven Life you'll find the answers to three of life's most important questions: The Question of Existence: Why am I alive?The Question of Significance: Does my life matter?The Question of Purpose: What on earth am I here for? Living out the purpose you were created for moves you beyond survival or success to a life of significance - the life you were meant to live. You will discover the five benefits of knowing your purpose: It will explain the meaning of your life.It will simplify your life.It will focus your life.It will increase your motivation.It will prepare you for eternity."
    },
    {
        id: "004",
        title: "Five Feet Apart",
        author: "Rachael Lippincott",
        genre: ["Romance", "Fiction"],
        pages: "304 pages",
        year: "2018",
        publisher: "Simon & Schuster Books for Young Readers",
        isbn: "99781534437333",
        cover: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781665904964/five-feet-apart-9781665904964_lg.jpg",
        synopsis: "Can you love someone you can never touch? Will's exactly what Stella needs to stay away from. If he so much as breathes on Stella she could lose her spot on the transplant list. Either one of them could die. The only way to stay alive is to stay apart. But suddenly six feet doesn’t feel like safety. It feels like punishment. What if they could steal back just a little bit of the space their broken lungs have stolen from them? Would five feet apart really be so dangerous if it stops their hearts from breaking too?"
    },
    {
        id: "005",
        title: "Bad Summer People",
        author: "Emma Rosenblum",
        genre: ["Thriller", "Fiction"],
        pages: "272 pages",
        year: "2023",
        publisher: "Flatiron Books",
        isbn: "9781250887016",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1675084836i/61884844.jpg",
        synopsis: "None of them would claim to be a particularly good person. But who among them is actually capable of murder? Jen Weinstein and Lauren Parker rule the town of Salcombe, Fire Island every summer. They hold sway on the beach and the tennis court, and are adept at manipulating people to get what they want. Until a body is discovered, face down, off the side of the boardwalk."
    },
    {
        id: "006",
        title: "The Summer I Turned Pretty",
        author: "Jenny Han",
        genre: ["Young Adult", "Fiction"],
        pages: "276 pages",
        year: "2010",
        publisher: "Simon & Schuster Books for Young Readers",
        isbn: "9781416968290",
        cover: "https://m.media-amazon.com/images/I/71j25Ib5FSL._AC_UF1000,1000_QL80_.jpg"
    }
]

function ListFilter() {
    return(
        <div className='box'>
            <div className='wrap'>
                <table>
                    <tr>
                        <div className='item'>
                            <td className='cover'><img src={bookList[4].cover} alt="cover"/></td>
                            <td className='detail'>
                                <h4>{bookList[4].title}</h4>
                                <br />
                                <p>Author   : {bookList[4].author}</p>
                                <p>Genre    : {bookList[4].genre[0]}, {bookList[4].genre[1]}</p>
                                <p>Pages    : {bookList[4].pages}</p>
                                <p>Published: {bookList[4].publisher}, {bookList[4].year}</p>
                                <p>ISBN     : {bookList[4].isbn}</p>
                                <p className='btnContainer'>
                                    <button className="addbtn">
                                        + Add 
                                    </button>
                                </p>
                            </td>
                        </div>
                        <hr />
                    </tr>
                    <tr>
                        <div className='item'>
                            <td className='cover'><img src={bookList[5].cover} alt="cover"/></td>
                            <td className='detail'>
                                <h4>{bookList[5].title}</h4>
                                <br />
                                <p>Author   : {bookList[5].author}</p>
                                <p>Genre    : {bookList[5].genre[0]}, {bookList[5].genre[1]}</p>
                                <p>Pages    : {bookList[5].pages}</p>
                                <p>Published: {bookList[5].publisher}, {bookList[5].year}</p>
                                <p>ISBN     : {bookList[5].isbn}</p>
                                <p className='btnContainer'>
                                    <button className="addbtn">
                                        + Add 
                                    </button>
                                </p>
                            </td>
                        </div>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ListFilter
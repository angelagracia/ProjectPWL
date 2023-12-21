import './search.css';
import { useState } from 'react';
import axios from 'axios';
import ListFilter from './filter';



const Search=()=>{
    const [book,setBook]= useState("")
    const [result,setResult] = useState([])
    const [loading, setLoading] = useState(false);

    function handleChange(event){
        const book = event.target.value;
        setBook(book);
    }

    function handleSubmit(event){
        setLoading(true);
        event.preventDefault()
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key=AIzaSyAFbKGX_dljPzcz8j9u4wAYkCxGcP90d9E&maxResults=40").then(data=>{
        setResult(data.data.items);
        console.log(result)
        setLoading(false);
        })
          
    }

    return(
        <div className="container7">
           <nav className='wrapper7'>
                <form onSubmit={handleSubmit}>
                    <div className="titleSearch1">
                        <div>
                            <input className='searchBar3' type="text" onChange={handleChange}/>
                            <button type = "submit" className='btnSearch3'>search</button>
                        </div>
                    </div>
                </form>
           </nav>
           <ListFilter book={result}/>
        </div>
    );
}
export default Search
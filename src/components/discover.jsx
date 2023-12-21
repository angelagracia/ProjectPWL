import './discover.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


function Discover(){
    const navigate = useNavigate()
    const [book,setBook]= useState("")
    const [result,setResult] = useState([])

    function handleChange(event){
        const book = event.target.value;
        setBook(book);
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key=AIzaSyCXoffyhGf_NMRndtQOe1DAvFDDi03dmEE&maxResults=40").then(data=>{
            setResult(data.data.items);
        })
    }
    return(
        <div className="container2">
            <div className='wrapper2'>
                <form onSubmit={handleSubmit}>
                    <h1 className="discover">Discover Books</h1>
                    <div className='search'>
                        <input className='inputText' type="text" onChange={handleChange} />
                        <button type="submit" className='btnSearch' onClick={()=>navigate('/searchresult')}>search</button>
                    </div>
                </form>
            </div>

        </div>
    );
}
export default Discover
import Header from '../components/header';
import Detail from '../components/detail';
import { useState } from 'react';
import axios from 'axios';

function DetailBook1(isbn) {
  const [result,setResult] = useState([])
  const [loading, setLoading] = useState(false);
  setLoading(true);
  axios.get("https://www.googleapis.com/books/v1/volumes?q="+isbn+"&key=AIzaSyAFbKGX_dljPzcz8j9u4wAYkCxGcP90d9E&maxResults=40").then(data=>{
    setResult(data.data.items);
    setLoading(false);
  })
  return (
    <div className="App">
      <Header />
      <Detail book={result} isbnSearch={isbn}/>
    </div>
  );
}

export default DetailBook1;
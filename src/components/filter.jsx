import './filter.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Detail from './detail';

const ListFilter=({book})=> {
    const navigate = useNavigate()
    const [bookItem,setItem]=useState();

    console.log(book)
    return(
        <div className='box'>
            {
                book.map((item)=>{
                    let id = item.accessInfo.id;
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let title = item.volumeInfo.title;
                    let authors = item.volumeInfo.authors;
                    let language = item.volumeInfo.language;
                    let pages = item.volumeInfo.pageCount;
                    let publisher = item.volumeInfo.publisher;
                    let isbn = item.volumeInfo.industryIdentifiers && item.volumeInfo.industryIdentifiers[1] && item.volumeInfo.industryIdentifiers[1].identifier;
                    if(thumbnail && isbn !=undefined){
                    return(
                        <>
                            <div className='wrap'>
                                <table>
                                    <tr>
                                        <div className='item' onClick={() =>navigate('/detail/'+isbn)}>
                                            <td className='cover'><img src={thumbnail} alt="cover"/></td>
                                            <td className='detail'>
                                                <h4>{title}</h4>
                                                <br />
                                                <p>Author     : {authors}</p>
                                                <p>Language   : {language}</p>
                                                <p>Pages      : {pages}</p>
                                                <p>Publisher  : {publisher}</p>
                                                <p>ISBN       : {isbn}</p>
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
                        </>
                    )
                    }
                })
            }
        </div>
    )
}

export default ListFilter
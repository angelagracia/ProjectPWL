import React from "react";
import './detail.css';

const Detail = ({book}, isbnSearch) => {
    return(
        <div>
            {
                book.map((item)=>{
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
                    let title = item.volumeInfo.title;
                    let authors = item.volumeInfo.authors;
                    let language = item.volumeInfo.language;
                    let pages = item.volumeInfo.pageCount;
                    let publisher = item.volumeInfo.publisher;
                    let published = item.volumeInfo.publishedDate;
                    let description = item.volumeInfo.description;
                    let isbn = item.volumeInfo.industryIdentifiers && item.volumeInfo.industryIdentifiers[1] && item.volumeInfo.industryIdentifiers[1].identifier;
                    if(isbn == isbnSearch){
                        return (
                            <div className="container6">
                                <div className="gambar">
                                    <img className="buku" src={thumbnail} alt="buku" />
                                </div>
                                <div className="information">
                                    <h1 className="judul">{title}</h1>
                                    <ul>Author: {authors}</ul>
                                    <ul>Pages : {pages}</ul>
                                    <ul>Published : {published}, {publisher} </ul>
                                    <ul>ISBN : {isbn}</ul> 
                                    <ul>Language : {language}</ul>
                                    <h2 className="synopsis">Synopsis</h2>
                                    <p>{description}</p>
                                    <button className="addBtn">
                                        + Add 
                                    </button>
                                </div>    
                            </div>
                        )
                    }
                })
            }
        </div>

    )

}

export default Detail
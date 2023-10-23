import React from "react";
import './detail.css';

const Detail = () => {
    return (
        <div className="container6">
            <div className="gambar">
                <img className="buku" src="https://m.media-amazon.com/images/I/71j25Ib5FSL._AC_UF1000,1000_QL80_.jpg" alt="buku" />
            </div>
            <div className="information">
                <h1 className="judul">The Summer I  Turned Pretty</h1>
                <ul>Author: Jenny Han</ul>
                <ul>Format : 276 pages</ul>
                <ul>Published : May 5, 2009 by Simon & Schuster Books for Young Readers </ul>
                <ul>ISBN : 9781416968238 (ISBN10: 1416968237)</ul>
                <ul>Language : English</ul>
                <h2 className="synopsis">Synopsis</h2>
                <p>As far as teenager Isabel Conklin is concerned, summer is the only season that matters. For Isabel, nicknamed “Belly,” winter and spring are merely waiting periods. Not only is her birthday in August, but each June, she, her mother, Laurel, and her brother, Steven, travel to Cousins Beach to spend three months with the Fisher family, at their beach house on the Atlantic Coast.
    The summer that Belly turns sixteen, major changes impact everyone staying at the Fisher’s beach house. Belly has blossomed into a beautiful young woman, and both boys notice the change in her appearance.</p>
                <button className="addBtn">
                    + Add 
                </button>
            </div>    
        </div>
    )
}

export default Detail
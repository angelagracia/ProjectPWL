import './discover.css';

function Discover(){
    return(
        <div className="container2">
            <div className='wrapper2'>
                <h1 className="discover">Discover Books</h1>
                <div className='search'>
                    <input className='inputText' type="text" />
                    <button className='btnSearch'>search</button>
                </div>
            </div>
        </div>
    );
}
export default Discover
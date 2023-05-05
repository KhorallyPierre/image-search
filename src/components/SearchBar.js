import {useState} from 'react';
import './SearchBar.css'

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState('');


    const handleFormSubmit = (event) => {
        // this prevents the page from reloading so that the console log gets rendered
        event.preventDefault();

        onSubmit(term);
    }
    const handleChange = (event) => {
        setTerm(event.target.value)
    }
    return (
    <div className="search-bar">
        <h1 className="title"> Search an Image</h1>
        {/* submit events are automatically triggered with forms in the browser */}
        <form onSubmit={(handleFormSubmit)}>
           <label> Enter Search Term</label>
            <input value={term} onChange={handleChange}/>
           
        </form>


    </div>
    )
}

export default SearchBar
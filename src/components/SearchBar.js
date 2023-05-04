import {useState} from 'react';


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
    <div>
        {/* submit events are automatically triggered with forms in the browser */}
        <form onSubmit={(handleFormSubmit)}>
            Confirm your search: {term} <br/>
            <input value={term} onChange={handleChange}/>
            {term < 3 &&'term must be longer'}
        </form>


    </div>
    )
}

export default SearchBar
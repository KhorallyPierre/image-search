function SearchBar() {

    const handleFormSubmit = (event) => {
        // this prevents the page from reloading so that the console log gets rendered
        event.preventDefault();
        console.log('I need to tell the parent about some data')
    }
    return <div>
        {/* submit events are automatically triggered with forms in the browser */}
        <form onSubmit={(handleFormSubmit)}>
            <input />
        </form>


    </div>
}

export default SearchBar
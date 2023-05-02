import SearchBar from './components/SearchBar'

function App() {
    const handleSubmit = (term) => {
console.log('do a search for', term);
        SearchBar(term)
    }
    return <div> 
        <SearchBar onSubmit={handleSubmit}/>
    </div>
}

export default App
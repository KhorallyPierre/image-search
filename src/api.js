// axios helps us to make requests to the server because react isnt bult to do that
import axios from 'axios';

// async keyword is just a requirement to use await
const searchImages = async(term) => {
    // the await keyword tells JS to wait for response from api before returning / console.logging response
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 6GH_E975ZSI7pbAz8rBmp93VZPhwNNFabUq61E5JEzM',
        },
        params: {
            query: term,
        },
    });
    console.log(response.data.results)
    return response.data.results  ;
};

export default searchImages;
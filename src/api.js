// axios helps us to make requests to the server because react isnt bult to do that
import axios from 'axios';

// async keyword is just a requirement to use await
const searchImages = async() => {
    // the await keyword tells JS to wait for response from api before returning / console.logging response
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 6GH_E975ZSI7pbAz8rBmp93VZPhwNNFabUq61E5JEzM',
        },
        params: {
            query: 'cars',
        },
    });
    console.log(response)
    return response;
};

export default searchImages;
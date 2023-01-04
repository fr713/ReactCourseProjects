import axios from 'axios';

const searchImages = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID wANWM3_0LlD8FGdJxq6HnyhcYXTsqtnzix_IpxCHO_4'
        },
        params: {
            query: term
        }
    });
    //JS waits fire response from unsplash
    console.log(response);

    return response.data.results;
};

export default searchImages;
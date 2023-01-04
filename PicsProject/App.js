import { useState } from 'react';
import searchImages from './api';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar'

function App(){
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        //we want to access result after searchImages finishes but without "await", result doesnt know to wait
        setImages(result);
    };

    return (
        <div>
            <SearchBar onSubmit = {handleSubmit} />
            <ImageList images={images}/>
        </div>
    );
}

export default App;
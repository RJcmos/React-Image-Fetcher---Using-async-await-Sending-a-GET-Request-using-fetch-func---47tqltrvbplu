import React , { useState, useEffect }from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
  const [photoId, setPhotoId] = useState('');
  const [photoData, setPhotoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setPhotoId(e.target.value);
  };

   useEffect(() => {
    if (photoId) {
      setIsLoading(true);

      fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
        .then((response) => response.json())
        .then((data) => {
          setPhotoData(data);
          setIsLoading(false);
        });
    }
  }, [photoId]);

  return (
    <div className="app">
      <input
        type="number"
        value={photoId}
        onChange={handleInputChange}
        placeholder="Enter a number between 1-5000"
      />

      {isLoading ? (
        <Loader />
      ) : (
        photoData && <PhotoFrame url={photoData.url} title={photoData.title} />
      )}
    </div>
  );
  
}


export default App;

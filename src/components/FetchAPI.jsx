import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const API_KEY = '34954973-fc5c2eab35e9f140062a5ec5a';

async function SearchPhotos(inputValue, page) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=false&per_page=12&page=${page}`
    );
    if (response.data.total < 1) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}

export default SearchPhotos;

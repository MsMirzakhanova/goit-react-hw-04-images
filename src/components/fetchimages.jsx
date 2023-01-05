import axios from "axios";

axios.defaults.baseURL = `https://pixabay.com/api/`;

const KEY = `31186027-a505e8b90e1642af76a363134`;

export const fetchImages = async (query, page) => {
    const response = await axios.get(
      `/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
  return response.data;
}



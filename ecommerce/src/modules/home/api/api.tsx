import axios from 'axios';

export const fetchApiData = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/1',
  );
  console.log("response: ", response.data)
  return response.data
};

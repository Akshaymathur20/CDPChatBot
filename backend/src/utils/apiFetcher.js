import axios from "axios";

const fetchDocumentation = async (url, query) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    // console.log(data);
    
    return data.includes(query) ? `Found relevant info in ${url}` : "No relevant data found.";
  } 
  catch (error) {
    return "Error fetching data.";
  }
};
export default fetchDocumentation;

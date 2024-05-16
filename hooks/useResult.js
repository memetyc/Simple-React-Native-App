import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage,setErrorMessage] = useState('')
  const searchApi = async (searchTerm) => {
    const params = {
        limit: 50,
        location: "Izmir",
      };
      if(searchTerm){
        params.term = searchTerm
      }
    try {
      const response = await yelp.get("/search", {
        params,
      });
      setResults(response.data.businesses);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Baglantı hatası');
    }
  };
  useEffect(() => {
    searchApi();
  }, []);

  return [searchApi, results,errorMessage];
};

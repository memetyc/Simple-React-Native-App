import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [result, setResult] = useState([]);
  const [errorMessage,setErrorMessage] = useState('')
  const searchDetailApi = async (id) => {
   
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Bağlantı Hatası');
    }
  };
  

  return [searchDetailApi, result,errorMessage];
};

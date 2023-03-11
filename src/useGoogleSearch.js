import { useState, useEffect } from "react";
import API_KEY from "./keys/keys";

const CONTEXT_KEY = "15caf232606744e3b"; //SEARCH ENGINE ID

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  //whenever term changes we fire up the code inside the useEffecvt
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      );
      const res = await response.json();
      setData(res);
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;

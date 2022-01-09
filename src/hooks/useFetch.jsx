import { useEffect, useState } from "react";

function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchRequest = () => {
    url ? setLoading(true) : null;
    return url
      ? fetch(url)
          .then((res) => res.json())
          .then((res) => {
            setData(res);
            setLoading(false);
          })
          .catch(() => {
            setError(true);
            setLoading(false);
          })
      : null;
  };

  useEffect(() => {
    url && fetchRequest();
  }, []);

  return {
    loading,
    isError,
    data,
    fetchRequest
  };
}
export default useFetch;

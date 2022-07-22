import axios from "axios";
import { useEffect, useState } from "react";

export default function useRequest(BASE_URL) {
  const [data, setData] = useState(undefined);
  const [IsLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(BASE_URL)
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [BASE_URL]);

  return [data, setData, IsLoading, error];
}

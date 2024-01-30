import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
const [isFetching, setIsFetching]= useState(false)
const [error, setError] = useState()
const [fetchedData, setFetchedData] = useState(initialValue)

    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setFetchedData(data);
            console.log(" fetch data: ", data)
          } catch (error) {
            setError({ message: error.message || "failed to fetch data " });
          }
          setIsFetching(false);
        }
        fetchData();
      }, [fetchFn]);
      return {
        isFetching,
        error,
        fetchedData
      }
}
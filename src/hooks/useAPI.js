import { useEffect, useState } from 'react';

export default function useAPI(url) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((planetData) => setData(planetData));
  }, [url]);
  return [data || { results: [] }];
}

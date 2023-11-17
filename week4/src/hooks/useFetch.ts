import { useState, useEffect } from 'react';
import { client } from '../apis/client';

type FetchProps = {
  url: string;
  memberId: number;
};
const useFetch = ({ memberId }: FetchProps) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const get = async () => {
    try {
      const res = await client.get(`/api/v1/members/${memberId}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const response = get();

    setIsLoading(false);
  }, []);

  return [data, isLoading];
};

export default useFetch;

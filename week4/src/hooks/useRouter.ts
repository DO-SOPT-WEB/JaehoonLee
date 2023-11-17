import { useNavigate } from 'react-router-dom';

const useRouter = () => {
  const navigate = useNavigate();

  return {
    routeTo: (path: string) => navigate(path),
  };
};

export default useRouter;

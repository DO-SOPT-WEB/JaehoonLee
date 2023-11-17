import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import MyPage from './pages/myPage/MyPage';
import LayoutComponents from './components/LayoutComponents';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutComponents />}>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/mypage/:userId" element={<MyPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

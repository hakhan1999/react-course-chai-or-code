import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
        setLoading(false);
      })
      .finally(() => {
        dispatch(logout());
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-col">
      <div className="w-full block">
        <Header />
        <main>
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default App;

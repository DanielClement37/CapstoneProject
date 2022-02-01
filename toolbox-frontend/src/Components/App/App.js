
import './App.css';
import {  Route, Routes } from "react-router-dom";
import CustomRouter from '../CustomRouter/CustomRouter';
import Loading from '../Loading/Loading';
import Landing from '../Landing/Landing';
import Dashboard from '../Dashboard/Dashboard';
import { useAuth0 } from "@auth0/auth0-react";
import history from "../../Utils/history"


function App() {

  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <CustomRouter history={history}>
      <div id="app" className="app">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
      </div>
    </CustomRouter>
  );
}

export default App;

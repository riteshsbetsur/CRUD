import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CakeComponent from "./components/CakeComponent";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceComponent from "./components/IceComponent";
import AddUser from "./crudcomponents/AddUser";
import EditUser from "./crudcomponents/EditUser";
import HomeComponent from "./crudcomponents/HomeComponent";
import store from "./redux/store";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser/:id" element={<EditUser />} />
      </Routes>
      {/* <CakeComponent/>
        <hr/>
        <IceComponent/>
        <hr/>
        <HooksCakeContainer/> */}
    </BrowserRouter>
  );
};

export default App;

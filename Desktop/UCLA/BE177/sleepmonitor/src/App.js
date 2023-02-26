import React from "react";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ErrorMessage from "./Components/ErrorMessage";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import NavBar from "./Components/NavBar";
import WithPrivateRoute from "./Components/WithPrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <ErrorMessage />
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/profile"
            element={
              <WithPrivateRoute>
                <Profile />
              </WithPrivateRoute>
            }
          />
          <Route
            exact
            path="/"
            element={
              <WithPrivateRoute>
                <Home />
              </WithPrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

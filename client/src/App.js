import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./features/protectedRoute/ProtectedRoute";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Profile from "./pages/Profile";

function App() {
  const user = useSelector((state) => state.user.email);
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoute user={user}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="/authentication" element={<Authentication />} />
      </Routes>
    </div>
  );
}

export default App;

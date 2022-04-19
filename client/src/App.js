import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./features/protectedRoute/ProtectedRoute";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
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

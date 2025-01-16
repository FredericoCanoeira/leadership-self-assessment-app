import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles/App.css"

// Componentes
import Login from "./components/Login";
import Register from "./components/Register";
import Form from "./components/Form";
import AssessmentForm from './components/assessment/AssessmentForm';

// Páginas
import Home from "./pages/Home";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

// Layout
import Layout from "./components/common/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rotas protegidas (com layout) */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/assessment"
          element={
            <Layout>
              <AssessmentForm />
            </Layout>
          }
        />
        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

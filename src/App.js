import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";

// Componentes
import Login from "./components/Login";
import Register from "./components/Register";
import AssessmentForm from './components/assessment/AssessmentForm';
import PaymentInformation from "./pages//PaymentInformation";
import Solicitacao from './pages/Solicitacao';
// Páginas
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


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
        <Route path="/PaymentInformation" element={<PaymentInformation />} />
        <Route path="/Solicitacao" element={<Solicitacao />} />
        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

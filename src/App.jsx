import { Suspense, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Loading from "./components/Loading";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

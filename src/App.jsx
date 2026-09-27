import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/home";
import BrowseBusinesses from "./Pages/BrowseBusinesses";
import BusinessDetails from "./Pages/BusinessDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/businesses"
          element={<BrowseBusinesses />}
        />

        <Route
          path="/businesses/:id"
          element={<BusinessDetails />}
        />

        <Route
          path="*"
          element={
            <div className="min-h-screen bg-[#F7F5F0] px-6 py-32 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
                Coming soon
              </p>

              <h1 className="mt-4 font-['DM_Serif_Display'] text-5xl text-[#171717]">
                Working on Backend
              </h1>

              <a
                href="/"
                className="mt-8 inline-block bg-[#171717] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B08D57]"
              >
                Back to Home
              </a>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
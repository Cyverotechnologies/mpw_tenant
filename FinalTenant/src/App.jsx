import React, { lazy, Suspense, useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import DashboardTopHeader from "./Components/Dashboard/DashboardTopHeader";

// Lazy load the components

const Dashboard = lazy(() => import("./Components/Pages/Dashboard"));
const Profile = lazy(() => import("./Components/Pages/Profile"));
const Notice = lazy(() => import("./Components/Pages/Notices"));

const Aside = lazy(() => import("./Components/Common/Aside"));
const Payment = lazy(() => import("./Components/Pages/Payment"));
const Community = lazy(() => import("./Components/Pages/Community"));
const Services = lazy(() => import("./Components/Pages/Services"));
const Social = lazy(() => import("./Components/Pages/Social"));
const Helpdesk = lazy(() => import("./Components/Pages/Helpdesk"));
const SignUp = lazy(() => import("./Components/Pages/SignUp"));

function App() {
  const [asideToggle, setAsideToggle] = useState(false);
  const asideRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (asideRef.current && !asideRef.current.contains(event.target)) {
        setAsideToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // Add or remove the no-scroll class based on the asideToggle state
    if (asideToggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [asideToggle]);

  return (
    <BrowserRouter>
      <div className={`min-h-screen flex relative `}>
        <aside
          ref={asideRef}
          className={`fixed left-0  top-0 z-[999] min-w-[250px]  bg-white h-full overflow-y-scroll scrollbar-none scrollbar-thumb-gray-500   border-e lg:transform-none duration-200 ${
            asideToggle ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Aside setAsideToggleActive={setAsideToggle} />
          </Suspense>
        </aside>
        <main className="ml-0 lg:ml-[250px] flex-1 lg:basis-[80%] lg:border-s ">
          <div className=" mt-1">
            <Suspense fallback={<div>Loading...</div>}>
              <DashboardTopHeader setAsideToggleActive={setAsideToggle} />
            </Suspense>
          </div>
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-full text-xl text-gray-500">
                Loading...
              </div>
            }
          >
            <Routes>
              <Route
                path="/"
                element={<Dashboard setAsideToggleActive={setAsideToggle} />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/payments" element={<Payment />} />
              <Route path="/community" element={<Community />} />
              <Route path="/services" element={<Services />} />
              <Route path="/social" element={<Social />} />
              <Route path="/notices" element={<Notice />} />
              <Route path="/helpdesk" element={<Helpdesk />} />
              {/* <Route path="/signup" element={<SignUp />} /> */}
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

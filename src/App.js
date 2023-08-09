import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSetting } from "./components";
import { useStateContext } from "./contexts/ContextProvider";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Line,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";

import "./App.css";

const App = () => {
  const { activeMenu, themeSetting, setThemeSetting, currentColor, currentMode } = useStateContext();

  return (
    <div className={ currentMode === 'Dark' ? 'dark' : '' }>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSetting(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Sidebar</div>
          )}

          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              { themeSetting && <ThemeSetting />}

              <Routes>
                {/* dashboard */}
                <Route path="/dashboard" element={<Ecommerce />} />
                <Route path="/dashboard/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/dashboard/orders" element={<Orders />} />
                <Route path="/dashboard/employees" element={<Employees />} />
                <Route path="/dashboard/customers" element={<Customers />} />

                {/* App */}
                <Route path="/dashboard/kanban" element={<Kanban />} />
                <Route path="/dashboard/editor" element={<Editor />} />
                <Route path="/dashboard/calendar" element={<Calendar />} />
                <Route path="/dashboard/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/dashboard/line" element={<Line />} />
                <Route path="/dashboard/area" element={<Area />} />
                <Route path="/dashboard/bar" element={<Bar />} />
                <Route path="/dashboard/pie" element={<Pie />} />
                <Route path="/dashboard/financial" element={<Financial />} />
                <Route path="/dashboard/color-mapping" element={<ColorMapping />} />
                <Route path="/dashboard/pyramid" element={<Pyramid />} />
                <Route path="/dashboard/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

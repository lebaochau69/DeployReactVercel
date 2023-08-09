import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [themeSetting, setThemeSetting] = useState(true);
  const [currentMode,  setCurrentMode]  = useState("Light");
  const [activeMenu,   setactiveMenu]   = useState(true);
  const [screenSize,   setScreenSize]   = useState(undefined);
  const [isClicked,    setIsClicked]    = useState(initialState);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    // setThemeSetting(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    // setThemeSetting(false);
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,   setactiveMenu,
        isClicked,    setIsClicked,
        screenSize,   setScreenSize,
        currentColor, setColor,
        currentMode,  setMode,
        themeSetting, setThemeSetting,
        handleClick,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

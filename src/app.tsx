import React from "react";
import Home from "./pages/home";
import "tailwindcss/tailwind.css";
import "./app.css";
import { Toaster } from "react-hot-toast";
import { Navigator, Screen, ScreenHelmet } from "@karrotframe/navigator";
import "@karrotframe/navigator/index.css";
import BottomNavBar from "./components/BottomNavBar";

const App = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navigator theme="Cupertino">
          <Screen path="/" component={Home} />
          <Screen
            path="/community"
            component={() => (
              <div>
                community
                <BottomNavBar />
              </div>
            )}
          />
        </Navigator>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default App;

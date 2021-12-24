import React, { useState } from "react";
import Home from "./pages/home";
import { Tabs } from "@karrotframe/tabs";
import "@karrotframe/tabs/index.css";
import "tailwindcss/tailwind.css";
import "./app.css";
import { Toaster } from "react-hot-toast";

type TabKeys = "category" | "add-product" | "community";

const App = () => {
  const [activeTabKey, setActiveTabKey] = useState<TabKeys>("category");

  return (
    <>
      <h2 className="text-2xl text-gray-700 p-2">LIKEY</h2>
      <Tabs
        activeTabKey={activeTabKey}
        tabs={[
          {
            key: "category",
            buttonLabel: "카테고리",
            render: () => <Home />,
          },
          {
            key: "add-product",
            buttonLabel: "상품 추가",
            render: () => <div>add-product</div>,
          },
          {
            key: "community",
            buttonLabel: "커뮤니티",
            render: () => <div>community</div>,
          },
        ]}
        onTabChange={(key) => {
          setActiveTabKey(key as TabKeys);
        }}
      />
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};

export default App;

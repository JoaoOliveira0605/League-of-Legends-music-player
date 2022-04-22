import { useState } from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import "./../styles/global.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
}

export default Home;

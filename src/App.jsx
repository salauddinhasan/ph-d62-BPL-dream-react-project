import { Suspense } from "react";
import "./App.css";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Tab from "./component/Tab";
import Players from "./component/players";

const getData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const getDataPromise = getData();

  return (
    <div >
      <Navbar />
      <Hero />
      <Tab />
      <Suspense fallback={<p>salauddin....</p>}>
        <Players getDataPromise={getDataPromise} />
      </Suspense>
    </div>
  );
}

export default App;

import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries";

const countriesPromise = fetch("https://restcountries.com/v3.1/all").then(
  (res) => res.json()
);

function App() {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  );
}

export default App;

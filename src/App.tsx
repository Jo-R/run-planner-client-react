import React from "react";
import styles from "./App.module.css";
import { RunCard } from "./components/RunCard";

const days = ["M", "T", "W", "T", "F", "S", "S"];

function App() {
  return (
    <div className={styles.app}>
      <header>
        <h1>Run planner</h1>
      </header>
      <main>
        <div className={styles.cardsContainer}>
          {days.map((d) => (
            <div className={styles.dayContainer}>
              <p>{d}</p>
              <RunCard />
            </div>
          ))}
        </div>
        <div>
          <p>your run types...little list with colour code keys mebe</p>
        </div>
      </main>
    </div>
  );
}

export default App;

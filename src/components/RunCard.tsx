import React from "react";
import styles from "./RunCard.module.css";
import { MdEditNote } from "react-icons/md";

export const RunCard = () => {
  return (
    <div className={styles.card}>
      <p>6 miles</p>
      <p>Gen aerobic</p>
      <div className={styles.buttonWrapper}>
        <input type="checkbox" />
        <button aria-label="edit">
          <MdEditNote />
        </button>
      </div>
    </div>
  );
};

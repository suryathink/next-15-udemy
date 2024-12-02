// loading.js is a reserved file name
import React from "react";
import styles from "./loading.module.css";

const MealsLoadingPage = () => {
  return <p className={styles.loading}>Fetching meals......</p>;
};

export default MealsLoadingPage;

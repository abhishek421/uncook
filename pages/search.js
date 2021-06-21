import Head from "next/head";
import styles from "../styles/Mobile.module.css";
import Navbar from "../components/navbar";
import LocBar from "../components/locationbar";
import React, { useState } from "react";
import ResCard from "../components/restcard";
import Restaurants from "./data";

function Search() {
  const { search } = window.location;
  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (data, query) => {
    var newQuery = query.toLowerCase();
    if (!newQuery) {
      return [];
    }

    return data.filter((item) => {
      const itemName = item.name.toLowerCase();
      return itemName.includes(newQuery);
    });
  };
  const filteredData = filterData(Restaurants, searchQuery);

  function handleChange(e) {
    e.preventDefault();
    setSearchQuery(e.target.value);
  }
  return (
    <div className={styles.background}>
      <Head>
        <title>UnCook</title>
        <link rel="icon" href="/logo-r.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.navbar}>
        <div className={styles.menu}></div>
        <div className={styles.logo}></div>
        <div className={styles.profile}></div>
      </div>
      <div className={styles.container} id="mainscreen">
        <input
          className={styles.searchbar}
          key="random1"
          onChange={handleChange}
          placeholder={"Search Restaurants, Cuisines, Dishes"}
        />
        {searchQuery ? (
          <div
            style={{
              display: "flex",
              flexFlow: "column",
              width: "100%",
              padding: "0 2em",
            }}
          >
            {filteredData.map((item) => (
              <ResCard key={item.index} restro={item} />
            ))}
          </div>
        ) : (
          <div className={styles.serimg}></div>
        )}
      </div>
      <Navbar />
    </div>
  );
}

export default Search;

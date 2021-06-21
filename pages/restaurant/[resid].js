import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import zomato from "../api/zomato";
import { Dishes } from "../../data";
import styles from "../../styles/Mobile.module.css";
import Head from "next/head";
import Navbar from "../../components/navbar";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const Post = () => {
  const router = useRouter();
  const { resid } = router.query;
  const { data, error } = useSWR(
    () => resid && `/api/restros/${resid}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexFlow: "row",
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "1em",
            }}
          >
            <div
              style={{
                display: "flex",
                flexFlow: "column",
                lineHeight: "10px",
              }}
            >
              <h2>{data.name}</h2>
              <h3>{data.location}</h3>

              <div style={{ display: "flex", flexFlow: "row" }}>
                {data.type.map((i) => (
                  <h4 style={{ padding: "0 5px" }}>{i}</h4>
                ))}
              </div>
            </div>
            <h4>ID: {resid}</h4>
          </div>
          <div
            style={{
              display: "flex",
              flexFlow: "wrap",
              alignItems: "center",
              width: "100%",
              height: "100%",
              flexWrap: "wrap",
              padding: "0 2em",
            }}
          >
            {Dishes.map((dish) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "2em",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "180px",
                  height: "200px",
                  color: "black",
                  boxShadow: "0 0 15px black",
                  margin: "25px 15px",
                  backgroundColor: "white",
                  borderRadius: "15px",
                }}
              >
                <img
                  src={dish.image}
                  style={{
                    height: "170px",
                    width: "170px",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexFlow: "row",
                    width: "170px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "left",
                    padding: "0.2em",
                  }}
                >
                  <h4>{dish.name}</h4>
                  <h6>₹{dish.price}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Post;

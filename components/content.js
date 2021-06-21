import styles from "../styles/Content.module.css";
import Cuisines from "./cuisines";
import { useEffect, useState } from "react";
import zomato from "../pages/api/zomato";
import Restros from "./restros";
import Restaurants from "./data";

function Content(props) {
  const [zomData, setzomData] = useState([]);
  const [Cuisi, setCuisi] = useState([]);

  return (
    <div className={styles.Content}>
      <Cuisines cuisines={Cuisi} />
      <Restros rests={Restaurants} />
    </div>
  );
}

export default Content;

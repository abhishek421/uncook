import Link from "next/link";
import styles from "../styles/ResCard.module.css";

function ResCard(props) {
  return (
    <Link href="/restaurant/[resid]" as={`/restaurant/${props.restro.id}`}>
      <a className={styles.wrapper}>
        <div
          className={styles.image}
          style={{ backgroundImage: "url(" + props.restro.image + ")" }}
        ></div>
        <div className={styles.details}>
          <div className={styles.name}>{props.restro.name}</div>
          <div className={styles.address}>{props.restro.location}</div>
          <div className={styles.tags}>{props.restro.type}</div>
          <div className={styles.info}>
            <div className={styles.rating}>{props.restro.rating}</div>
            <div className={styles.reviews}>{props.restro.reviews}</div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ResCard;

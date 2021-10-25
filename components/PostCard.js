import Link from "next/link";
import styles from "../styles/Home.module.css";

import { useAppContext } from "../context/state";

const PostCard = ({ post }) => {
  const { title, body, id } = post;

  //const { cases } = useAppContext();

  return (
    <div className={styles.card}>
      <Link href={`/posts/${id}`}>
        <a>
          <h3>{title}</h3>
          <p>{body}</p>          
        </a>
      </Link>
    </div>
  );
};

export default PostCard;

import styles from "@/styles/Home.module.css";
import ParentToChild from "./ParentOne";
import ChildtoParent from "./ParentTwo";

export default function Home() {
  return (
      <main className={`${styles.main}`}>
        <ParentToChild/>
        <ChildtoParent/>
      </main>
  );
}

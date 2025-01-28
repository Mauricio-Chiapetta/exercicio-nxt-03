import Link from "next/link";
import styles from "@/app/page.module.css";
export default function Home() {
  return (
    <div className={styles.root}>
      <div>
        <h1 className={styles.title}>Conheça as Naves do Universo Star Wars</h1>
        <Link href={"/espaconaves"}>
          <button>Ver Todas</button>
        </Link>
      </div>
    </div>
  );
}

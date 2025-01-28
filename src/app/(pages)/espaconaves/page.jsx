import styles from "@/app/(pages)/espaconaves/page.module.css";
import Link from "next/link";
import { spaceships } from "@/app/data/spaceships";
export default function Espaconaves() {
  return (
    <div className={styles.root}>
      <div>
        <h1 className={styles.title}>Todas as Espaçonaves</h1>
        <div className={styles.gridSpaceship}>
          {spaceships.map((spaceship) => (
            // aqui no link da para colocar inves de /spaceship.id -> /spaceship.name
            // e levar para a pagina de espaconave com aquele nome, fica mais facil
            <Link key={spaceship.id} href={`/espaconaves/${spaceship.id}`}>
              <button className={styles.button}>{spaceship.name}</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

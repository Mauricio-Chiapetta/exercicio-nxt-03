import styles from "@/app/(pages)/espaconaves/page.module.css";
import Link from "next/link";
import { spaceships } from "@/app/data/spaceships";
export default function Categorias() {
  return (
    <div className={styles.root}>
      <div>
        <h1 className={styles.title}>Categorias</h1>
        <div className={styles.gridSpaceship}>
          {spaceships.map((spaceship) => (
            // aqui no link da para colocar inves de /spaceship.id -> /spaceship.name
            // e levar para a pagina de espaconave com aquele nome, fica mais facil
            <Link key={spaceship.id} href={`/categorias/${spaceship.category}`}>
              <button className={styles.button}>{spaceship.category}</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

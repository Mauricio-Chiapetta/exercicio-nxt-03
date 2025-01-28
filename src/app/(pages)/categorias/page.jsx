import styles from "@/app/(pages)/espaconaves/page.module.css";
import Link from "next/link";
import { spaceships } from "@/app/data/spaceships";
export default function Categorias() {
  const categorySet = new Set(spaceships.map((ship) => ship.category));
  const categoriesArray = Array.from(categorySet);

  return (
    <div className={styles.root}>
      <div>
        <h1 className={styles.title}>Categorias</h1>
        <div className={styles.gridSpaceship}>
          {categoriesArray.map((category) => (
            <Link
              key={category}
              href={`/categorias/${category.replace(" ", "_")}`}
            >
              <button className={styles.button}>{category}</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

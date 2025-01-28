"use client";
import { useParams } from "next/navigation";
import styles from "@/app/(pages)/espaconaves/page.module.css";
import { spaceships } from "@/app/data/spaceships";
import Link from "next/link";

export default function Page() {
  const params = useParams();
  const category = params.category.replace("_", " ");
  const categorySpaceShip = spaceships.filter(
    (ship) => ship.category === category
  );

  return (
    <div className={styles.root}>
      <div>
        <h1 className={styles.title}>{category}</h1>
        <div className={styles.gridSpaceship}>
          {categorySpaceShip.map((ship) => (
            <Link key={ship.id} href={`/espaconaves/${ship.id}`}>
              <button className={styles.button}>{ship.name}</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

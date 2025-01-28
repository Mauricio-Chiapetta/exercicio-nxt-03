"use client";
import { useParams } from "next/navigation";
import { spaceships } from "@/app/data/spaceships";
import styles from "@/app/(pages)/espaconaves/[id]/page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const { id } = useParams();
  const ship = spaceships.find((ship) => ship.id === +id);

  return (
    <main>
      <div className={styles.root}>
        <h1 className={styles.title}>{ship.name}</h1>
        <Image
        className={styles.image}
          src={ship.imageUrl}
          width={400}
          height={300}
          alt={ship.name}
        ></Image>

        <div className={styles.cardSpacechip}>
          <h5 className={styles.h5}>Classe: {ship.category}</h5>
          <h5 className={styles.h5}>Modelo: {ship.model}</h5>
          <p
            style={{ fontFamily: "sans-serif" }}
            className={styles.description}
          >
            {ship.description}
          </p>
          <div className={styles.cardBtn}>
            <Link href={"/espaconaves"}>
              <button>Ver Todas</button>
            </Link>
            <div style={{ display: "flex", gap: "1rem" }} className={styles.cardBtn2}>
              <Link
                href={`/espaconaves/${
                  ship.id === 1 ? spaceships.length : ship.id - 1
                }`}
              >
                {/* ship.id === 1: Verifica se o ID atual é 1, ou seja, o primeiro da lista.
                   Se for 1, o ID anterior será o último (spaceships.length).
                   ship.id - 1: Caso contrário, decrementa o ID normalmente para obter o anterior. */}
                <button>Anterior</button>
              </Link>
              <Link href={`/espaconaves/${(ship.id % spaceships.length) + 1}`}>
                <button>Próxima</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

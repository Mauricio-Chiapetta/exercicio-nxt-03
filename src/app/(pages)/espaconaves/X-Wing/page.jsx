import { spaceships } from "@/app/data/spaceships";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/(pages)/espaconaves/X-Wing/page.module.css";
// ver se da pra tranformar um component para cada card (pagina) para o codigo nao ficar repetitivo
export default function xwing() {
  return (
    <>
      {spaceships.map((spaceship, index) =>
        spaceship.name === "X-Wing" ? (
          <>
            <div className={styles.root}>
              <h1 className={styles.title}>{spaceship.name}</h1>
              <Image
                src={spaceship.imageUrl}
                width={400}
                height={300}
                alt="x-wing"
              ></Image>

              <div className={styles.cardSpacechip}>
                <h5 className={styles.h5}>Classe: {spaceship.category}</h5>
                <h5 className={styles.h5}>Modelo: {spaceship.model}</h5>
                <p
                  style={{ fontFamily: "sans-serif" }}
                  className={styles.description}
                >
                  {spaceship.description}
                </p>
                <div className={styles.cardBtn}>
                  <Link href={"/espaconaves"}>
                    <button>Ver Todas</button>
                  </Link>
                  <Link
                    href={`/espaconaves/${
                      spaceships[index + 1]
                        ? spaceships[index + 1].name // Próximo ID, se existir
                        : spaceships[0].name // Voltar para o primeiro ID
                    }`}
                  >
                    <button>Próxima</button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : null
      )}
    </>
  );
}

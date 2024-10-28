import styles from '../styles/Home.module.css';

export default function SectionCasal() {
    return (
        <section id="casal" className={`${styles.section} ${styles.casalSection}`}>
          <div className={styles.casalTexto}>
            <h2 className={styles.boldText}>O casal</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, accusantium praesentium. Temporibus perferendis, dignissimos harum, dolore sed dolores ex doloremque atque voluptates a architecto laboriosam esse voluptatum ratione quibusdam odio?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, accusantium praesentium. Temporibus perferendis, dignissimos harum, dolore sed dolores ex doloremque atque voluptates a architecto laboriosam esse voluptatum ratione quibusdam odio?
            </p>
          </div>
        </section>
    );
}
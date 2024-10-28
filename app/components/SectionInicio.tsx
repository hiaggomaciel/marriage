import styles from '../styles/Home.module.css';

export default function SectionInicio() {
    return (
      <section id="inicio" className={`${styles.section} ${styles.inicio} ${styles.componentSpacing}`}>
        <div className={styles.backgroundImage}>
          {/* TODO: mudar a fonte */}
            <h1>Amanda e Hiaggo</h1>
            <p className={styles.boldText}>25 de Janeiro de 2025</p>
            Cocal

        </div>
        <div className={styles.contagemRegressiva}>
          {/* TODO: mudar a fonte */}
          <p>Contagem Regressiva</p>
          {/* TODO: colocar contador */}
        </div>
      </section>
    );
}
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const TarjetasLink = ({href, titulo, parrafo}) => {
    return (
      <Link href={href}>
        <a className={styles.card}>
          <h2>{titulo} &rarr;</h2>
          <p>{parrafo}</p>
        </a>
      </Link>
    );
};

export default TarjetasLink;
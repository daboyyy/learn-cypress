import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Snacks(props) {
  const favoriteSnacks = props.snacks;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Favorite Snacks
        </h1>
        <ul className="snacks">
            {favoriteSnacks.map((snack) => {
                return <li key={snack}>{snack}</li>;
            })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
    const snacks = ["Chips", "Popcorn", "M&Ms", "Rice Cakes", "Jerky"];

    return {
        props: {
            snacks: snacks
        }
    }
}

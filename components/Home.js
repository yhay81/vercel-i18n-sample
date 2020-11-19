import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { asPath, locale } = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>This is sample app for i18n feature.</h1>

        <p className={styles.description}>
          Here is index page. router.asPath is{' '}
          <code className={styles.code}>{asPath}</code>. router.locale is{' '}
          <code className={styles.code}>{locale}</code>.
        </p>

        <div className={styles.grid}>
          <a href='https://webv.jp/' className={styles.card}>
            <h3>Go to Index with</h3>
            <p>
              <code
                className={styles.code}>{`<a  href='https://webv.jp/'/>`}</code>
            </p>
          </a>

          <a href='https://webv.jp/page1' className={styles.card}>
            <h3>Go to Page1 with</h3>
            <p>
              <code
                className={
                  styles.code
                }>{`<a  href='https://webv.jp/page1'/>`}</code>
            </p>
          </a>

          <a href='https://en.webv.jp/' className={styles.card}>
            <h3>Go to Index with</h3>
            <p>
              <code
                className={
                  styles.code
                }>{`<a  href='https://en.webv.jp/'/>`}</code>
            </p>
          </a>

          <a href='https://en.webv.jp/page1' className={styles.card}>
            <h3>Go to Page1 with</h3>
            <p>
              <code
                className={
                  styles.code
                }>{`<a  href='https://en.webv.jp/page1'/>`}</code>
            </p>
          </a>

          <Link href='/' locale='ja'>
            <a className={styles.card}>
              <h3>Go to Index with</h3>
              <p>
                <code
                  className={
                    styles.code
                  }>{`<Link  href='/' locale='ja'/>`}</code>
              </p>
            </a>
          </Link>

          <Link href='/page1' locale='ja'>
            <a className={styles.card}>
              <h3>Go to Page1 with</h3>
              <p>
                <code
                  className={
                    styles.code
                  }>{`<Link  href='/page1' locale='ja'/>`}</code>
              </p>
            </a>
          </Link>

          <Link href='/' locale='en'>
            <a className={styles.card}>
              <h3>Go to Index with</h3>
              <p>
                <code
                  className={styles.code}>{`<Link href='/' locale='en'>`}</code>
              </p>
            </a>
          </Link>

          <Link href='/page1' locale='en'>
            <a className={styles.card}>
              <h3>Go to Page1 with</h3>
              <p>
                <code
                  className={
                    styles.code
                  }>{`<Link href='/page1' locale='en'>`}</code>
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

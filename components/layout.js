import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
// import Navbar from '../components/Navbar';

const name= 'Harrison Given'
export const siteTitle = 'Portfolio';

export default function Layout({ children, home }) {
    return (
      
      <div className={styles.container}>
        {/* < Navbar/> */}
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="https://hgiven.github.io/portfolio/public/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt=""
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src="https://hgiven.github.io/portfolio/public/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt=""
                />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
    );
  }
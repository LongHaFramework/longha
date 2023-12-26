import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SMM PANEL</title>
        <link rel="icon" href="/" />
      </Head>

      <main>
        <Header title="VietSMM" />
        <p className="description">
          LONG HÀ <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

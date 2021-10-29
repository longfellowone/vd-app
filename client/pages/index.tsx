import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <main>
        <div>Index</div>
      </main>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}

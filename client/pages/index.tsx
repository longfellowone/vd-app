import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import WireSizeOption from '../components/WireSizeOption'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <main>
        <WireSizeOption />
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

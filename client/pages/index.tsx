import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import WireSizeOption from '../components/WireSizeOption'

interface Props {
  data?: string
}

const Home: NextPage<Props> = ({ data }) => {
  console.log(data)

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
  const data: string = 'data'
  return {
    props: { data },
  }
}

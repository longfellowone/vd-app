import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import MaxDistanceTable from '../components/MaxDistance/MaxDistanceTable'
import ConduitFillTable from '../components/ConduitFill/ConduitFillTable'

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
        <div className="bg-green-300 h-screen space-y-2 md:space-y-0 md:flex md:justify-around md:items-center">
          <MaxDistanceTable />
          <ConduitFillTable />
        </div>
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

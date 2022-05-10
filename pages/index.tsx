import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'

interface Props {
  tweets: Tweet[]
}

const Home = ({ tweets }: Props) => {
  return (
    // <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid grid-cols-9'>
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed tweets={tweets} />
        {/* widgets */}
        <Widgets />
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GETServerSideProps = async (context) => {
  const tweets = await fetchTweets()
  return {
    props: {
      tweets,
    }
  }
}

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Blake's blog</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name's Blake, I'm a software developer at FoodServiceDirect.com.  Please take a look through my posts.
          These include personal projects related to things I've been doing at work, and generally things I enjoy in terms of programming.
        </p>
        <p>
          (If you'd like you can contact me, {' '}
          <a href="mailto: blucey7@gmail.com">here</a>:)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
          <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}

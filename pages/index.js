import Meta from '../components/Meta'
//import PostsList from '../components/PostsList';
import TotalData from '../components/TotalData';
import styles from '../styles/Home.module.css'

export default function Home({ cases, vaccinations, deaths }) {

  //console.log(posts);

  return (
    <>
    <Meta title="Next App | Homepage" />
    <div className={styles.container}>
      {/* <PostsList posts={posts} />       */}
      {/* <TotalData cases={cases} vaccinations={vaccinations} deaths={deaths} /> */}
      <TotalData />
    </div>
    </>
  )
}


// export const getStaticProps = async () => {
//   // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   // const posts = await res.json();

//   const resCases = await fetch('https://epistat.sciensano.be/Data/COVID19BE_CASES_AGESEX.json');
//   const cases = await resCases.json();

//   const resVacc = await fetch('https://epistat.sciensano.be/Data/COVID19BE_VACC.json');
//   const vaccinations = await resVacc.json();

//   const resDeaths = await fetch('https://epistat.sciensano.be/Data/COVID19BE_MORT.json');
//   const deaths = await resDeaths.json();

//   return {
//     props: {
//       cases,
//       vaccinations,
//       deaths      
//     },
//     revalidate: 60 * 60 * 6,
//   }
// }

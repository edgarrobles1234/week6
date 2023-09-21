import Link from 'next/link'
import Layout from '../components/layout';
import { getSortedList} from '../lib/data';

export async function getStaticProps(){
  const allData = getSortedList();//do same thing but for other json write function
  return {
    props: { allData}
  };
}

export default function HomePage ( {allData} ){
  return (
    <Layout itIsHome>

    <h1>Sorted NFL list</h1>
    <h2>NFL QBS</h2>
    <ul className="list-group list-group-flush card">
      <h4>List 1 of QBs</h4>
      { allData && allData.map (
        
        ({id,team, name}) =>
        <Link key ={id} href={`/${id}`} className="list-group-item list-group-item-action">
          <div>{name}</div>
          <div>{team}</div>
        </Link>

      )
      }
    </ul>

    </Layout>
  );
};
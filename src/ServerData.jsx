import { useEffect, useState } from 'react';
import './index.css';

const ServerData = () => {
  // step 1: create a slice of state called serverData
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    // step 2: define an async function to fetch data
    const fetchFortnite = async () => {
      const data = await fetch('https://fortnite-api.com/v2/news');
      const response = await data.json();
      const parsedData = response.data.stw.messages;

      // step 3: update the state with the fetched data
      setServerData(parsedData); // update the state
      console.log(parsedData); // log data for inspection 
    };
    fetchFortnite();
  }, []);

  if (!serverData) return <h1>No Data to Display</h1>

  return (
    <div>
      {serverData.map((data, index) => (
        <div className='serverContainer' key={index}>
          <h1 className='title'>{data.title}</h1>
          <h2 className='body'>{data.body}</h2>
          <img className='img' src={data.image} alt={data.title} />
        </div>
      ))} 
    </div>
    
  )             

};

export default ServerData;

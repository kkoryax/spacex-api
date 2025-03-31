import {useEffect, useState} from 'react';
import axios from 'axios';

export function AxiosFetchData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState([null]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://api.spacexdata.com/v4/launches/latest"
                );
                setData(response.data);
            } catch(error) {
                setError("Failed to fetch data");
                console.log(error)
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [])

    let youTubeUrl = null;
    if (data.links?.youtube_id) {
        youTubeUrl = `https://www.youtube.com/embed/${data.links.youtube_id}`;
      } else {
        youTubeUrl = null;
      }

      let redditUrl = null;
      if (data.links?.reddit?.launch) {
        redditUrl = `${data.links?.reddit?.launch}`;
      } else {
        redditUrl = null;
      }

      let wikipediaUrl = null;
      if (data.links?.wikipedia) {
        wikipediaUrl = `${data.links?.wikipedia}`;
      } else {
        wikipediaUrl = null;
      }

    return(
        <div>
            {loading && <p>Loading Data . . .</p>}
            {error && <p>{error}</p>}

            <article className='flex flex-col items-center justify-center w-full h-full'>
                <h1>LATEST LAUNCH DETAILS</h1>
                <img src={data.links?.patch?.small} className='mt-6 w-35 h-35 animate-pulse'></img>
                <h2 className='text-3xl m-2 font-bold'>{data.name}</h2>
                <div className='flex flex-col bg-white text-black p-4 m-2 rounded-md gap-4'>
                    <div>
                        <h2 className='flex justify-center m-4 text-2xl font-bold'>Live on YouTube</h2>
                        <iframe className='w-full h-64'
                        allow = "autoplay; picture-in-picture;"
                        allowFullScreen
                        src={youTubeUrl}
                        ></iframe>
                    </div>
                    <div className='flex flex-col-2 text-black p-4 m-2 rounded-md gap-8 outline-2'>
                        <p className='text-lg font-bold'>Flight Detail</p>
                        <div className='flex flex-col items-start'>
                            <p>Flight Name : </p>
                            <p>Flight Number : </p>
                            <p>Date : </p>
                        </div>
                        <div className='flex flex-col'>
                            <p>{data.name}</p>
                            <p>{data.flight_number}</p>
                            <p>{data.date_local}</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-lg font-bold'>REDDIT</h2>
                        <a href={redditUrl}
                        className='text-blue-500 underline'>{redditUrl}</a>
                    </div>
                    <div>
                        <h2 className='text-lg font-bold'>Wikipedia</h2>
                        <a href={wikipediaUrl}
                        className='text-blue-500 underline'>{data.links?.wikipedia}</a>
                    </div>
                </div>
            </article>
        </div>
    );
}
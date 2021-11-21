import MeetupList from '../components/meetups/MeetupList'
import {useState, useEffect} from 'react';
import axios from 'axios';

function AllMeetupsPage() {
  // Probleme : infinite loop bc each changes of state the component content rerendered
  // solution => useEffect() is a hook that allows you to run some code under certain conditions
  const [isLoading, setIsLoading] = useState(true); 
  const [meetupsData, setMeetupsData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get(
      `https://meetups-project-86e41-default-rtdb.firebaseio.com/meetups.json`
    )
      .then((response) => {
          return  response.data;
      }).then(data => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id:  key,
            ...data[key]
          };
          meetups.push(meetup);
        }
        const sortedMeetups = meetups.slice().sort((a, b) => new Date(a.createdAt) < new Date(b.createdAt)  ? 1 : -1);
        setMeetupsData(sortedMeetups);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error occured when fetching meetups data. ", err);
      });

  }, []);

      if(isLoading) {
        return  (
          <section>
            <p>Loading ... </p>
          </section>
        );
      }
  
  return (
    <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={meetupsData} />
    </section>
  );
}

export default AllMeetupsPage;

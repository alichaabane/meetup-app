import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate  } from "react-router-dom";
function NewMeetupPage() {
  // react router dom v6 : useHistory => useNavigate & history.replace(url) => navigate(url)
  const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://meetups-project-86e41-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then(() => {
        console.log(meetupData);
        navigate('/');
      })
      .catch((err) => {
        console.log("error occured . ", err);
      });
  }
  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetupPage;

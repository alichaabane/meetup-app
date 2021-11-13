import Card from '../shared/Card';
import classes from './NewMeetupForm.module.css';
import {useRef} from 'react';
function NewMeetupForm(props) {

  const meetupTitleRef =  useRef();
  const meetupImageRef =  useRef();
  const meetupAddressRef =  useRef();
  const meetupDescriptionRef =  useRef();

  function submitHandler(event) {
    event.preventDefault();
    const meetupTitle = meetupTitleRef.current.value;
    const meetupImage = meetupImageRef.current.value;
    const meetupAddress = meetupAddressRef.current.value;
    const meetupDescription = meetupDescriptionRef.current.value;
    const meetupData = {
      title: meetupTitle,
      image: meetupImage,
      address: meetupAddress,
      description: meetupDescription,
      createdAt: new Date()
    }
    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={meetupTitleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input placeholder="Put url image here " type="url" required id="image" ref={meetupImageRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address"  ref={meetupAddressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea placeholder="Like : a wonderful place ... "  id="description" required rows="5" ref={meetupDescriptionRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;

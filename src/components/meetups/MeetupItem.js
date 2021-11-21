import Card from '../shared/Card';
import classes from './MeetupItem.module.css';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
function MeetupItem(props) {
  
  const goToGoogleMaps = () => {
    window.open("https://www.google.com/maps/search/?api=1&query="+ props.title );
  };
  
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <Card>
      <ul>
    <li className={classes.item}>
      <div className={classes.image} onClick={goToGoogleMaps}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h2>{props.title}</h2>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleFavoriteStatusHandler}>
        {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
        </button>
      </div>
    </li>
    </ul>
    </Card>
  );
}

export default MeetupItem;
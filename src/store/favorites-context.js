import { createContext, useEffect, useState } from 'react';

// React Context is a method to pass props from parent to child component(s)

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    const FavoriteList = JSON.parse(localStorage.getItem('favoritesList'));
    
    if (FavoriteList) {
        setUserFavorites(FavoriteList)
    }
}, []);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
        let favoritesList = prevUserFavorites.concat(favoriteMeetup);
        localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
      return favoritesList;
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevUserFavorites => {
        let favoritesList = prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
      return favoritesList;
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/favorites-context';
import classes from './MainNavigation.module.css';
function MainNavigation() {
    const favoriteContext = useContext(FavoritesContext);
    return (
           <header className={classes.header}>
               <Link to="/"><span className={classes.header}>Meetups App </span></Link>
               <nav className={classes.nav}>
                   <ul>
                       <li  className={classes.li}><Link to="/">All Meetups</Link></li>
                       <li  className={classes.li}><Link to="/new-meetup">Add New Meetup</Link></li>
                       <li  className={classes.li}><Link to="/favorites">Favorites
                       <span className={classes.badge}>
                        {favoriteContext.totalFavorites}
                       </span>
                       </Link></li>
                   </ul>
               </nav>
           </header>     
    );

}
export default MainNavigation;

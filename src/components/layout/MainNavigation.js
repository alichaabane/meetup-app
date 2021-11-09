import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
function MainNavigation() {

    return (
           <header className={classes.header}>
               <span>React Meetups </span>
               <nav>
                   <ul>
                       <li><Link to="/">All Meetups</Link></li>
                       <li><Link to="/meetups">Meetups</Link></li>
                       <li><Link to="/favorites">Favorites</Link></li>
                   </ul>
               </nav>
           </header>     
    );

}
export default MainNavigation;

import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
function MainNavigation() {

    return (
           <header className={classes.header}>
               <span> 𝑀𝑒𝑒𝓉𝓊𝓅𝓈 𝒜𝓅𝓅 </span>
               <nav>
                   <ul>
                       <li><Link to="/">All Meetups</Link></li>
                       <li><Link to="/new-meetup">Add New Meetup</Link></li>
                       <li><Link to="/favorites">Favorites</Link></li>
                   </ul>
               </nav>
           </header>     
    );

}
export default MainNavigation;

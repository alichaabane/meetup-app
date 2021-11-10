import classes from './Card.module.css';
function Card(props) {
    // update:  react-router-dom v6
  
    return (  
        <div className={classes.card}>
             {props.children}
             </div>
    );
}

export default Card;
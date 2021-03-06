import { Link } from 'react-router-dom';
import classes from './Button.module.css';

const Button = (props) => {
  if (props.to) {
    return (
      <Link to={props.to} exact={props.exact} className={classes.button}>
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={props.className || classes.button}
      onClick={props.onClick}
      disabled={props.disabled}
      style={props.style}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;

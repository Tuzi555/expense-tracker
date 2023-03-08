import React, {FC, PropsWithChildren} from 'react';

import './Card.css';

interface CardProps{
  className?:string
}

const Card:FC<PropsWithChildren<CardProps>> = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;

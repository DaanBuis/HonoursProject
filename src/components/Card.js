import React from "react";
import classnames from "classnames";
import "../card.scss";
import logo from "../images/JavaScript-logo.png"

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={logo} alt="Image"></img>
      </div>
      <div className="card-face card-back-face">
        <p className="py-1 ms-auto text-center fs-5"> {card.answer}</p>
      </div>
    </div>
  );
};

export default Card;
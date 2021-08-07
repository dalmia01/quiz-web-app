import React from "react";
import "./Button.scss";

export const Button = ({ text, clickHandler, classType }) => (
    <input className={classType || "button-1"} type="button" value={text} onClick={clickHandler} />
);

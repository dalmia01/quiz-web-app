import React from "react";
import "./input.scss";

export const Input = ({ numInputVal, numValChange, isStart }) => {
    return <input className="input-1" type="text" value={numInputVal} onChange={numValChange} disabled={isStart} />;
};

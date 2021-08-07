import React, { useContext } from "react";
import { GameContext } from "../../Context/GameContext";
import { Button } from "../Button/button";
import { Input } from "../Input/Input";

export const GameStateInputs = () => {
    const { item, startQuiz, onTotalQuesChange, index } = useContext(GameContext);

    const { totalQuestions, isStart, maxOperand } = { ...item };

    return (
        <div>
            <Button text="Start" clickHandler={(e) => startQuiz(e, index)} />

            <div className="set-customs">
                <label>Set Total Questions : </label>
                <Input numValChange={(e) => onTotalQuesChange(e, index, "totalQuestions")} numInputVal={totalQuestions} isStart={isStart} />
            </div>
            <div className="set-customs">
                <label>Set Max Number : </label>
                <Input numValChange={(e) => onTotalQuesChange(e, index, "maxOperand")} numInputVal={maxOperand} isStart={isStart} />
            </div>
        </div>
    );
};

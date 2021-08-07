import React, { useContext } from "react";
import { GameContext } from "../../Context/GameContext";
import { Button } from "../Button/button";
import { Input } from "../Input/Input";

export const Questionnaire = () => {
    const { item, answerChange, nextQuestion, submitQuiz, index } = useContext(GameContext);

    const { questionnaire, counter, totalQuestions } = { ...item };

    const currentQuestion = questionnaire[counter - 1];

    return (
        <div>
            <div>
                Question {counter} of {totalQuestions}
            </div>
            <div>
                <label>
                    <span className="operands">{currentQuestion.operand1}</span>
                    <b>{currentQuestion.operator}</b>
                    <span className="operands">{currentQuestion.operand2}</span>
                </label>
                <b> = </b>
                <Input focus numValChange={(e) => answerChange(e, index)} numInputVal={currentQuestion.given} />
                {currentQuestion.given.length > 0 && counter < totalQuestions && (
                    <Button text="Next" clickHandler={(e) => nextQuestion(e, index)} />
                )}
                {Number(totalQuestions) === counter && currentQuestion.given.length > 0 && (
                    <Button text="Submit" clickHandler={(e) => submitQuiz(e, index)} />
                )}
            </div>
        </div>
    );
};

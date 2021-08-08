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
                <span>
                    <label className="operands">{currentQuestion.operand1}</label>
                    <b className="operator">{currentQuestion.operator}</b>
                    <label className="operands">{currentQuestion.operand2}</label>
                </span>
                <b> = </b>
                <Input focus numValChange={(e) => answerChange(e, index)} numInputVal={currentQuestion.given} />
                {currentQuestion.given.length > 0 && counter < totalQuestions && (
                    <Button text="Next" clickHandler={(e) => nextQuestion(e, index)} />
                )}
                {Number(totalQuestions) === counter && currentQuestion.given.length > 0 && (
                    <Button text="Submit" clickHandler={(e) => submitQuiz(e, index)} />
                )}
            </div>
            <div>Score : {item.correctQues}</div>
        </div>
    );
};

import React from "react";
import { GameStateInputs } from "../GameStateInputs/GameStateInputs";
import { Questionnaire } from "../Questionnarie/Questionnaire";
import { Result } from "../Result/Result";
import "./quiz.scss";

export const Quiz = ({ title, quiz, resetQuiz }) => {
    return (
        <div className="quiz-section">
            <header className="title">{title}</header>
            {!quiz.isStart && <GameStateInputs />}
            {quiz.isStart && !quiz.isSubmitted && <Questionnaire />}
            {/** Result Section */}
            {quiz.isSubmitted && (
                <Result
                    resetQuiz={resetQuiz}
                    questionnaire={quiz.questionnaire}
                    totalQuestions={quiz.totalQuestions}
                    correctQues={quiz.correctQues}
                />
            )}
        </div>
    );
};

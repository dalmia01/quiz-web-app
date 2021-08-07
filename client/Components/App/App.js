import React, { useState } from "react";
import { defaultQuizState, numberWithDecimal, onlyNumbers } from "../../Constants/Constants";
import { GameContext } from "../../Context/GameContext";
import { evaluateAnswer, generateQuestion } from "../../Utility/Uttility";
import { Quiz } from "../Quiz/Quiz";
import "./app.scss";

export const App = () => {
    const [quiz, setQuiz] = useState([...defaultQuizState]);

    /** Start Quiz */
    const startQuiz = (e, index) => {
        let isquizStarted = !quiz[index].isStart;
        const question = generateQuestion(quiz[index].maxOperand);
        const maxOperand = Number(quiz[index].maxOperand) ? quiz[index].maxOperand : 10;
        const totalQuestions = Number(quiz[index].totalQuestions) ? quiz[index].totalQuestions : 10;

        let modQuiz = [...quiz];
        modQuiz[index] = { ...modQuiz[index], isStart: isquizStarted, counter: 1, questionnaire: [question], maxOperand, totalQuestions };
        setQuiz(modQuiz);
    };

    /** Set total questions to answer */
    const onTotalQuesChange = (e, index, field) => {
        let modQuiz = [...quiz];
        modQuiz[index] = { ...modQuiz[index], [field]: e.target.value };
        (e.target.value === "" || onlyNumbers.test(e.target.value)) && setQuiz(modQuiz);
    };

    /** Set answer of question - onchange */
    const answerChange = (e, index) => {
        if (!(e.target.value === "" || e.target.value === "-" || numberWithDecimal.test(e.target.value))) {
            return false;
        }

        let modQuiz = [...quiz];
        let modifiedQuestion = [...modQuiz[index].questionnaire];
        modifiedQuestion[quiz[index].counter - 1].given = e.target.value;
        modQuiz[index] = { ...modQuiz[index], questionnaire: modifiedQuestion };
        setQuiz(modQuiz);
    };

    /** move to next question */
    const nextQuestion = (e, index) => {
        let updatedCounter = quiz[index].counter + 1;
        let { modifiedQuestion, modifiedCorrectQues, question } = evaluateAnswer(quiz, index);
        modifiedQuestion = [...modifiedQuestion, question];
        let modQuiz = [...quiz];
        modQuiz[index] = { ...modQuiz[index], correctQues: modifiedCorrectQues, counter: updatedCounter, questionnaire: modifiedQuestion };

        setQuiz(modQuiz);
    };

    /** Submit quiz */
    const submitQuiz = (e, index) => {
        let { modifiedCorrectQues, modifiedQuestion } = evaluateAnswer(quiz, index);
        let modQuiz = [...quiz];
        modQuiz[index] = { ...modQuiz[index], correctQues: modifiedCorrectQues, questionnaire: modifiedQuestion, isSubmitted: true };
        setQuiz(modQuiz);
    };

    /** resetQuiz */
    const resetQuiz = (e, index) => {
        let modQuiz = [...quiz];
        modQuiz[index] = { ...defaultQuizState[index] };
        setQuiz(modQuiz);
    };

    return (
        <div className="main">
            {quiz.map((item, index) => (
                <GameContext.Provider
                    key={`quiz${index}`}
                    value={{ item, startQuiz, onTotalQuesChange, answerChange, nextQuestion, submitQuiz, index, resetQuiz }}
                >
                    <Quiz title={`Quiz${index + 1}`} quiz={item} resetQuiz={(e) => resetQuiz(e, index)}></Quiz>
                </GameContext.Provider>
            ))}
        </div>
    );
};

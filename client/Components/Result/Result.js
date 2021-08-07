import React, { Fragment } from "react";
import { Button } from "../Button/button";
import "./result.scss";

export const Result = ({ questionnaire, correctQues, totalQuestions, resetQuiz }) => {
    return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Operand 1</th>
                        <th>Operator</th>
                        <th>Operand 2</th>
                        <th>Given answer</th>
                        <th>Correct answer</th>
                        <th>IsCorrect</th>
                    </tr>
                </thead>
                <tbody>
                    {questionnaire.map((item, index) => (
                        <tr key={`question${index}`} className={item.isCorrect ? "green" : "red"}>
                            <td>{index + 1}.</td>
                            <td>{item.operand1}</td>
                            <td>{item.operator}</td>
                            <td>{item.operand2}</td>
                            <td>{item.given}</td>
                            <td>{item.correct}</td>
                            <td>{item.isCorrect ? "correct" : "wrong"}</td>
                        </tr>
                    ))}
                </tbody>
                <thead>
                    <tr>
                        <th colSpan="1">Result</th>
                        <th colSpan="2">Total Correct : {correctQues}</th>
                        <th colSpan="2">Total Wrong : {totalQuestions - correctQues}</th>
                        <th colSpan="2">Percentage : {Number((correctQues / totalQuestions) * 100).toFixed(2)}% </th>
                    </tr>
                </thead>
            </table>
            <Button text="Reset" clickHandler={resetQuiz} classType="reset-btn" />
        </Fragment>
    );
};

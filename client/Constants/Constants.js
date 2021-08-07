export const onlyNumbers = /^[0-9]+$/;
export const numberWithDecimal = /^[+-]?\d*\.?\d{0,9}$/;
export const operatorTypes = ["+", "-", "/", "*"];
export const defaultQuizState = [
    { counter: 0, totalQuestions: 10, isStart: false, maxOperand: 8, questionnaire: [], correctQues: 0 },
    { counter: 0, totalQuestions: 5, isStart: false, maxOperand: 10, questionnaire: [], correctQues: 0 },
];

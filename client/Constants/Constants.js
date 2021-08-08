export const onlyNumbers = /^[0-9]+$/;
export const numberWithDecimal = /^[+-]?\d*\.?\d{0,9}$/;
export const operatorTypes = ["+", "-", "/", "*"];
export const defaultQuizState = Array.from({ length: 2 }, () => ({
    counter: 0,
    totalQuestions: 20,
    isStart: false,
    maxOperand: 10,
    questionnaire: [],
    correctQues: 0,
}));

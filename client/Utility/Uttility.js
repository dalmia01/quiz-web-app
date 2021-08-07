import { operatorTypes } from "../Constants/Constants";

/** generate question - numbers & operator to operate upon */
export const generateQuestion = (max) => {
    const operand1 = Math.floor(Math.random() * max + 1);
    const operand2 = Math.floor(Math.random() * max + 1);
    const operatorNum = Math.floor(Math.random() * 4);

    let correct = 0;

    switch (operatorNum) {
        case 0:
            correct = operand1 + operand2;
            break;
        case 1:
            correct = operand1 - operand2;
            break;
        case 2:
            let value = operand1 / operand2;
            correct = value % 1 === 0 ? value : value.toFixed(2);
            break;
        case 3:
            correct = operand1 * operand2;
            break;
    }

    return { operand1, operand2, correct, operator: operatorTypes[operatorNum], given: "" };
};

/** evalute anser and generate next question */
export const evaluateAnswer = (quiz, index) => {
    let currentCoutner = quiz[index].counter - 1;
    const question = generateQuestion(quiz[index].maxOperand);
    let modifiedQuestion = [...quiz[index].questionnaire];
    let isCorrect = Number(modifiedQuestion[currentCoutner].correct) === Number(modifiedQuestion[currentCoutner].given);
    const modifiedCorrectQues = isCorrect ? quiz[index].correctQues + 1 : quiz[index].correctQues;
    modifiedQuestion[currentCoutner].isCorrect = isCorrect;
    return { modifiedCorrectQues, modifiedQuestion, question };
};

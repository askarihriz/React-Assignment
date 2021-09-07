import React, { useState } from 'react'
import { AppContainer, Page, ProgressBar, Heading, SubHeading, Border, MaxScoreBar, BarWrapper, ScoreBar, LowestScoreBar, MaxScore, ScoreWrapper, Score, RowWrapper1, RowWrapper2, Choice1,Choice2, Choice3, Choice4, Question, AppWrapper, StarOne, StarTwo, StarThree, StarNotOne, StarNotTwo, StarNotThree } from './ApplicationElements'
import data from "../../questions.json";
import src from "../../images/star solid.svg";
import src2 from "../../images/star.svg";

const Application = () => {

    const [questionNumber, setQuestionNumber] = useState(1);
    const [array, setArray] = useState([data[0].correct_answer, data[0].incorrect_answers[0], data[0].incorrect_answers[1], data[0].incorrect_answers[2], data[questionNumber-1].incorrect_answers[3]]); 
    const update = () => {
        if(questionNumber !== 20) {
            setArray([data[questionNumber].correct_answer, data[questionNumber].incorrect_answers[0], data[questionNumber].incorrect_answers[1], data[questionNumber].incorrect_answers[2], data[questionNumber].incorrect_answers[3]]);
            shuffle(array);
        }
        else {
            setArray([data[0].correct_answer, data[0].incorrect_answers[0], data[0].incorrect_answers[1], data[0].incorrect_answers[2], data[0].incorrect_answers[3]]);
            shuffle(array);
        }

    }

    const numberSetter = () => {
        if(questionNumber >= 20) {
            setQuestionNumber(1);
        }
        else{
            setQuestionNumber(questionNumber + 1);
        }
    }

    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    const [easy, setEasy] = useState(true);
    const [medium, setMedium] = useState(true);
    const [hard, setHard] = useState(true);

    const [isBoolean, setIsBoolean] = useState(false);

    const Checker = () => {
        if(questionNumber!== 20) {
            if(data[questionNumber].type === "boolean") {
                setIsBoolean(true);
            }
            else {
                setIsBoolean(false);
            }
        }
        else {
            if(data[0].type === "boolean") {
                setIsBoolean(true);
            }
            else {
                setIsBoolean(false);
            }
        }
    }

    const AllFunctions = (e) => {
        numberSetter();
        Trigger();
        Checker();
        CheckScore(e);
        update();
    }

    const CheckScore = (e) => {
        if(questionNumber>=20) {
            setScore(0);
        }
        else {
            if(data[questionNumber-1].correct_answer === e.target.value){
                setScore(score + 1);
            }
        }
    }
    
    const Trigger = () => {
        if(questionNumber!== 20) {
            if(data[questionNumber].difficulty === "easy") {
                setEasy(true);
                setMedium(false);
                setHard(false);
            }
            else if(data[questionNumber].difficulty === "medium") {
                setEasy(true);
                setMedium(true);
                setHard(false);
            }
            else {
                setEasy(true);
                setMedium(true);
                setHard(true);
            }
        }
        else {
            if(data[0].difficulty === "easy") {
                setEasy(true);
                setMedium(false);
                setHard(false);
            }
            else if(data[0].difficulty === "medium") {
                setEasy(true);
                setMedium(true);
                setHard(false);
            }
            else {
                setEasy(true);
                setMedium(true);
                setHard(true);
            }
        }


    }

    const [score, setScore] = useState(0);

    return (
        <>
            <AppContainer id="app">
                <Page>
                    <ProgressBar prop={questionNumber}></ProgressBar>
                    <AppWrapper>
                        <Heading>Question {questionNumber} out of 20</Heading>
                        <SubHeading>{data[questionNumber-1].category}</SubHeading>
                        <StarOne src={src} show={easy} />
                        <StarTwo src={src} show={medium} />
                        <StarThree src={src} show={hard} />
                        <StarNotOne src={src2} />
                        <StarNotTwo src={src2} />
                        <StarNotThree src={src2} />
                        <Question>{data[questionNumber-1].question}</Question>
                        <RowWrapper1>
                            <Choice1 onClick={AllFunctions} type="button" value={array[0]}></Choice1>
                            <Choice2 onClick={AllFunctions} type="button" value={array[1]} ></Choice2>
                        </RowWrapper1>
                        <RowWrapper2>
                            <Choice3 onClick={AllFunctions} visible={isBoolean} type="button" value={array[2]} ></Choice3>
                            <Choice4 onClick={AllFunctions} visible={isBoolean} type="button" value={array[3]} ></Choice4>
                        </RowWrapper2>
                        <ScoreWrapper>
                            <Score>Score: {(score/(questionNumber-1)) * 100}% </Score>
                            <MaxScore>MaxScore: {((score+(20-questionNumber+1))/20 * 100)}%</MaxScore>
                        </ScoreWrapper>
                        <BarWrapper>
                            <MaxScoreBar prop={((score+(20-questionNumber+1))/20 * 100)}></MaxScoreBar>
                            <ScoreBar prop={(score/(questionNumber-1)) * 100}></ScoreBar>
                            <LowestScoreBar prop={(score/20) * 100}></LowestScoreBar>
                            <Border></Border>
                        </BarWrapper>
                    </AppWrapper>
                </Page>
            </AppContainer>
        </>
    )
}

export default Application

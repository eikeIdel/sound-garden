import React, {useState, useEffect} from 'react';
import Questionnaire from './Questionnaire';
import './Questionnaire/index.css';
import {Link} from "react-router-dom";

const API_URL = 'https://opentdb.com/api.php?amount=3&category=17&type=multiple';



function Quiz() {

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [newQuestions, setNewQuestions] = useState(false);

  useEffect (() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((question) =>
        ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random()- 0.5),
        }))
        setQuestions(questions)
      });
  }, [newQuestions]);


  const handleAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }
    
    setShowAnswers(true);
  }

  const handleNext = () => {
    setShowAnswers(false);
    setCurrentIndex(currentIndex + 1);
  }

  const handelRestart = () => {
    setCurrentIndex(0);
    setNewQuestions(!newQuestions);
  }

  return questions.length > 0
        ? (currentIndex >= questions.length
          ? (<div id="ScoreContainer">
              <div id="Score">Your final score is: {score}</div>
              <div className="brnEnd">
                
                <button id="btnRestart" onClick={handelRestart}>New Quiz!</button>
                
                <Link to="/" id="leaveQuizLink">
                    <button id="btnLeave"><Link to="/">Leave Quiz!</Link></button>
                </Link>
              </div> 
            </div>)
          : (<div>
              <Questionnaire 
                handleAnswer={handleAnswer}
                handleNext={handleNext}
                showAnswers={showAnswers}
                currentIndex={currentIndex}
                quizLength={questions.length}
                data={questions[currentIndex]}
              />
              {console.log(`index: ${currentIndex}`)}
          </div>))
        : (<h2>Loading...</h2>)
};

export default Quiz;

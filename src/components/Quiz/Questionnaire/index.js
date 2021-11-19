import './index.css';

const Quiz = ({
    handleAnswer, 
    handleNext, 
    showAnswers, 
    currentIndex,
    quizLength,
    data: {question, correct_answer, answers}
}) => {

    return (
    <div id="QuizContainer">
        <div id="QuestionContainer"><p id="Question" dangerouslySetInnerHTML={{__html: question}}></p></div>
        <div id="Answers"> 
            {answers.map((answer) => {

                const trueOrFalse = correct_answer === answer ? 'green' : 'red';

                return (
                    <button
                        className="btnAnswer"
                        style={showAnswers
                            ? {backgroundColor: trueOrFalse}
                            : {backgroundColor: 'white'}}
                        onClick={() => handleAnswer(answer)}
                    >{answer}
                    </button>
                )
            })}        
        </div>
        {showAnswers && (
            <button 
                id="btnNext"
                onClick={handleNext}
            >{currentIndex < quizLength -1 ? 'Next Question!' : 'Finish Quiz!'}
            </button>
        )} 
    </div>
    )
};

export default Quiz;
    
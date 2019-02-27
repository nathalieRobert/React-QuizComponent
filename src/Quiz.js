import React, {Component} from 'react';

let quizData = require('./quiz_data.json')

class Quiz extends Component {

        constructor(props) {
            super(props)
            this.state = { quiz_position: 1}
        }

        //div className appelle la question à l'index 0, "l'instruction de texte" (voir quiz_data.json)
        render(){

        return(
        <div><div className = "QuizQuestion"> {quizData.quiz_questions[0].instruction_text}</div></div>
        )
    }

}

export default Quiz
import { useState } from "react"
import '../styles/gamestyle.css';


const questions = [
    {
      urlImage: "https://i.pinimg.com/originals/d9/8f/1a/d98f1aa604b49a3e10a422321da08768.jpg",
      question: "Cual es la capital de Italia?",
      correctAnswer: 4,
      answers: [ 
        {
            id: 1,
            response: "Venecia."
        },
        {
            id: 2,
            response:"Verona."
        },
        {
            id: 3,
            response: "Nápoles."
        },
        {
            id: 4,
            response: "Roma." }]
    },

    {
      urlImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/270px-Flag_of_France.svg.png",
      question:"A que país pertenece esta bandera?",
      correctAnswer: 6,
      answers: [ {
        id: 5,
        response: "África."
    },
    {
        id: 6,
        response:"Francia."
    },
    {
        id: 7,
        response:"México."
    },
    {
        id: 8,
        response: "Perú." }]
    },

    {
      urlImage: "https://i.pinimg.com/originals/d9/8f/1a/d98f1aa604b49a3e10a422321da08768.jpg",
      question: "Cuál es la capital de Alemania?",
      correctAnswer: 11,
      answers: [ 
        {
            id: 9,
            response: "Hamburgo."
        },
        {
            id: 10,
            response:"Stuttgart."
        },
        {
            id: 11,
            response: "Berlin."
        },
        {
            id: 12,
            response: "Colonia."
        }],
      
    },

    {
      urlImage:  "https://png.vector.me/files/images/3/9/398377/flag_of_bolivia_preview",
      question: "A que pais pertenece esta bandera?",
      correctAnswer: 13,
      answers: [ 
        {
            id: 13,
            response: "Bolivia."
        },
        {
            id: 14,
            response: "Italia."
        },
        {
            id: 15,
            response: "Estados Unidos."
        },
        {
            id: 16,
            response: "Argentina."
        } ]
    },
    {
      urlImage:  "https://i.pinimg.com/originals/d9/8f/1a/d98f1aa604b49a3e10a422321da08768.jpg",
      question: "Cual es la capital de España?",
      correctAnswer: 20,
      answers: [ 
        {
            id: 17,
            response: "Barcelona."
        },
        {
            id: 18,
            response: "Sevilla."
        },
        {
            id: 19,
            response:"Valencia."
        },
        {
            id: 20,
            response: "Madrid."
        } 
    ]}
]


function PlayGame() {
    const [index, setIndex] = useState(0);
    const question = questions[index].question;
    const image = questions[index].urlImage; 
    const [end, setEnd] = useState(false);
    const [points, setPoints] = useState (0);
    const [selectedAnswer, setSelectedAnswer] = useState();
    const [isCorrect, setIsCorrect] = useState (false);

const buttonNext = () => {
    setSelectedAnswer (null);
    
    if (index < questions.length -1) {
        setIndex (index + 1)
    } 

     if (index == questions.length -1) {
        showEnd();
    }}


const showEnd = () => {
  setEnd(true);
}

const checkTheAnswer = (id) => {
    if (!selectedAnswer) {
        setSelectedAnswer(id)
    }
   
    const correctAnswer = questions[index].correctAnswer;
   
    if (correctAnswer === id) {
        setPoints (points + 1);
        setIsCorrect(true); 
    } else {
        setIsCorrect(false);
    }} 


        console.log(points);


        const addClass = (id) => {

            if (selectedAnswer != id) {
              return 'answers'
            } else {
                if (isCorrect) {
                    return 'answers correctAnswer'
                } else {
                    return 'answers incorrectAnswer'
                }
            }}

    const playAgain = () => {
        setEnd(false);
        setIndex(0);
        setPoints(0);
    }


    return (
        <>
        
        <div className='container'>
           {!end &&  <img className='image'src={image}/>} 
           {end &&  <img className='imageResult'src='https://us.123rf.com/450wm/keltmd/keltmd1707/keltmd170700315/82243421-ganador-premio-trofeo-de-oro-taza-en-el-elemento-de-dibujos-animados-plana-elemento-de-dise%C3%B1o-para-e.jpg?ver=6'/>} 
            <div className='question'>
                {!end && question}
                {end && `Has obtenido`}
            </div>
            <div>
                {!end && questions[index].answers.map((answer) => { return(  
                    <div className={addClass(answer.id)} key={answer.id} onClick= {() => {checkTheAnswer(answer.id)}}> 
                    {answer.response}
                    </div> )
                })}
                {end && <span className='score'>
                   {points} </span>}
            </div>
            {!end && <button className='buttonNext' onClick={buttonNext}>NEXT</button>}
            {end && <button className='buttonPlayAgain' onClick={playAgain}> PLAY AGAIN</button>}
        </div>
        </>
    );
}

export default PlayGame;
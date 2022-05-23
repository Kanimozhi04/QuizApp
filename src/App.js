import { useState } from 'react';
import Quizdatas from './Quizdatas';
import {Card,CardContent,Typography,Button} from '@mui/material';
import {v4 as uuidv4} from "uuid";

import './App.css';
  
function App() {
  const [currentQuestions,setCurrentQuestions]=useState(0);
  const [score,setScore]=useState(0);
  const [clicked,setClicked]=useState(false);
  const [showScore,setShowScore]=useState(false);

  const handleCorrectAnswer=(isCorrect)=>
  {
    if (isCorrect)
    {
        setScore(score + 1);
    }
    setClicked(true);
  }
   const handleNextQuestion =()=>{
     setClicked(false);
     if(currentQuestions < Quizdatas.length-1)
     {
        setCurrentQuestions(currentQuestions + 1);
     }
     else
     {
         setShowScore(true);
     }
   }
  return (
   <main>
    <Card sx={{display:"flex",justifyContent:"center",}} >
      <CardContent>
          <Typography>Question {currentQuestions + 1} of {Quizdatas.length}</Typography>
         
            <Typography> {Quizdatas[currentQuestions].question}</Typography>
             
              {Quizdatas[currentQuestions].options.map((ansOptions)=>(
              <div key={uuidv4()} className="quiz_options" >
               <Button  onClick={()=>handleCorrectAnswer(ansOptions.isCorrect)} >{ansOptions.answerText}</Button>
            
                
            
              </div>
             
              
           ))}
           <Button  variant="contained" onClick={handleNextQuestion}>Next</Button>
          
        
    
  
      </CardContent>
       </Card>      
    </main>  
     
           
         
      
         	
    





  );
}

export default App;

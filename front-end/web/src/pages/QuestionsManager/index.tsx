import React, { useEffect, useState } from "react";
import { IQuestionQuery } from "../../interfaces";
import { getQuestions,
  removeAll,
  removeQuestion,
} from "../../firebase/firestore";

const QuestionsManager = () => {
  
  const [questions, setQuestions] = useState([] as IQuestionQuery[]);
  
  
  useEffect(() => {
    console.log('questions: ');
    
    const getQuestionsFromFirestore = async () => {
      const questions = await getQuestions();
      setQuestions(questions);
    }
    getQuestionsFromFirestore();
  }, []);

  const removeOne = async (id: string) => {
    await removeQuestion(id);
    const questions = await getQuestions();
    setQuestions(questions);
  }


  return (
    <div>
      <h1>Questions Manager</h1>
      <div>
        {questions.map((question, index) => (
          <div key={index}>
            {/* <h2>{question.id}</h2> */}
            <p>{question.question}</p>
            <p>{question.id}</p>
            <button>
              <a href={`/question/${question.id}`}>Edit</a>
            </button>
            <button
              onClick={() => {
                console.log("delete");
                removeOne(question.id);
              }}
            >  Delete  </button>

            {/* <p>{question.category}</p> */}
            {/* <p>{question.difficulty}</p> */}
          </div>
        ))}

          
      </div>
    </div>
  );
};

export default QuestionsManager;
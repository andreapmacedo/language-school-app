import { useEffect, useState } from "react";
import { IQuestionQuery } from "../../interfaces";
import { getQuestions,
  removeAll,
  removeQuestion,
} from "../../firebase/questions";

import Modal from "react-modal";

Modal.setAppElement('#root');

const QuestionsManager = () => {
  
  const [questions, setQuestions] = useState([] as IQuestionQuery[]);
  
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
    // setModalModeUpdate(false)
    // setTask(schedule);
  }

  useEffect(() => {    
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
                removeOne(question.id);
              }}
            >  Delete  </button>

            {/* <p>{question.category}</p> */}
            {/* <p>{question.difficulty}</p> */}
          </div>
        ))}

          
      </div>


      <button onClick={openModal}>Adicionar Tarefa</button>
          <div>
            <Modal
              isOpen={modalIsOpen}
              // closeTimeoutMS={10000}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              overlayClassName="modal-overlay"
              className="modal-content"
            >
              <h1>TaskArea</h1>
              <p>Title</p>
              <button className="modal-close" onClick={closeModal}>close</button>
            </Modal>
          </div>


    </div>
  );
};

export default QuestionsManager;
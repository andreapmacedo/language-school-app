import { db } from './config';

export async function addQuestion() {
  console.log('addQuestion');
  const question = {
    correct_answer: "B",
    question: "Which of the following is not a valid JavaScript variable name?",
    answers: [
      "2names",
      "Which of the following is not a valid JavaScript variable name?",
      "FirstAndLast",
      "None of the above"
    ],
    level: "easy",
    type: "multiple",
    category: "JavaScript",
    difficulty: "easy"
  };

  try {
    const docRef = await db.collection('questions').add(question);
    console.log('Question added with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding question: ', error);
  }
}

export async function addQuestionBy(query: any) {
  
  try {
    const docRef = await db.collection('questions').add(query);
    console.log('Question added with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding question: ', error);
  }
}

// export {addQuestion};
// addQuestion();
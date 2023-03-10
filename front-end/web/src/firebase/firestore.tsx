import { db } from './config';

import { IQuestionQuery } from '../interfaces';

export async function addQuestionBy(query: IQuestionQuery): Promise<void> {
  try {
    const docRef = await db.collection('questions').add(query);
    console.log('Question added with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding question: ', error);
  }
}

export async function removeQuestion(id: string): Promise<void> {
  try {
    await db.collection('questions').doc(id).delete();
    console.log('Question removed with ID: ', id);
  } catch (error) {
    console.error('Error removing question: ', error);
  }
}

export async function removeAll (): Promise<void> {
  try {
    const querySnapshot = await db.collection('questions').get();
    querySnapshot.forEach((doc) => {
      doc.ref.delete();
    });
  } catch (error) {
    console.error('Error removing all questions: ', error);
  }
}

export async function updateQuestion(id: string, query: IQuestionQuery): Promise<void> {
  try {
    await db.collection('questions').doc(id).update(query);
    console.log('Question updated with ID: ', id);
  } catch (error) {
    console.error('Error updating question: ', error);
  }
}

export async function getQuestions(): Promise<IQuestionQuery[]> {
  const MAX_QUESTIONS = 100;
  let response = [] as IQuestionQuery[];
  try {
    const querySnapshot = await db.collection('questions').get();

    // const querySnapshot = await db
    //   .collection('questions')
    //   .orderBy('createdAt', 'desc')
    //   .limit(MAX_QUESTIONS)
    //   .get();


    querySnapshot.forEach((doc) => {
      // response.push(doc.data() as IQuestionQuery);
      response.push({id: doc.id, ...doc.data() as IQuestionQuery});
    });
  } catch (error) {
    console.error('Error getting questions: ', error);
    throw error;
  }
  return response;
}


export async function getQuestion(id: string): Promise<IQuestionQuery> {
  let response = {} as IQuestionQuery;
  try {
    const doc = await db.collection('questions').doc(id).get();
    if (doc.exists) {
      response =  doc.data() as IQuestionQuery;
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error getting question: ', error);
    throw error;
  }
  return response;
}

// export async function getQuestion(id: string): Promise<IQuestionQuery> {
//   try {
//     const doc = await db.collection('questions').doc(id).get();
//     if (doc.exists) {
//       return doc.data() as IQuestionQuery;
//     } else {
//       console.log('No such document!');
//     }
//   } catch (error) {
//     console.error('Error getting question: ', error);
//   }
// }


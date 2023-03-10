import { db } from './config';

import { IThemeQuery } from '../interfaces';

export async function addThemeToDB(query: IThemeQuery): Promise<void> {
  console.log('addThemeToDB: ', query);
  
  try {
    const docRef = await db.collection('themes').add(query);
    console.log('Theme added with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding theme: ', error);
  }
}

export async function removeThemeFromDB(id: string): Promise<void> {
  try {
    await db.collection('themes').doc(id).delete();
    console.log('Theme removed with ID: ', id);
  } catch (error) {
    console.error('Error removing theme: ', error);
  }
}

export async function removeAllThemesFromDB (): Promise<void> {
  try {
    const querySnapshot = await db.collection('themes').get();
    querySnapshot.forEach((doc) => {
      doc.ref.delete();
    });
  } catch (error) {
    console.error('Error removing all themes: ', error);
  }
}

export async function updateThemeFromDB(id: string, query: IThemeQuery): Promise<void> {
  try {
    await db.collection('themes').doc(id).update(query);
    console.log('Theme updated with ID: ', id);
  } catch (error) {
    console.error('Error updating theme: ', error);
  }
}

export async function getThemesFromDB(): Promise<IThemeQuery[]> {
  const MAX_THEMES = 100;
  let response = [] as IThemeQuery[];
  try {
    const querySnapshot = await db.collection('themes').get();

    // const querySnapshot = await db
    //   .collection('themes')
    //   .orderBy('createdAt', 'desc')
    //   .limit(MAX_THEMES)
    //   .get();

    querySnapshot.forEach((doc) => {
      response.push({id: doc.id, ...doc.data() as IThemeQuery});
    });
  } catch (error) {
    console.error('Error getting themes: ', error);
  }
  return response;
}

export async function getThemeFromDB(id: string): Promise<IThemeQuery> {
  let response = {} as IThemeQuery;
  try {
    const doc = await db.collection('themes').doc(id).get();
    response = {id: doc.id, ...doc.data() as IThemeQuery};
  } catch (error) {
    console.error('Error getting theme: ', error);
  }
  return response;
}
    


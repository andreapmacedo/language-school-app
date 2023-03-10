import { db } from './config';

import { ITagQuery } from '../interfaces';

export async function addTagToDB(query: ITagQuery): Promise<void> {
  console.log('addTagToDB: ', query);
  
  try {
    const docRef = await db.collection('tags').add(query);
    console.log('Tag added with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding tag: ', error);
  }
}

export async function removeTagFromDB(id: string): Promise<void> {
  try {
    await db.collection('tags').doc(id).delete();
    console.log('Tag removed with ID: ', id);
  } catch (error) {
    console.error('Error removing tag: ', error);
  }
}

export async function removeAllTagsFromDB (): Promise<void> {
  try {
    const querySnapshot = await db.collection('tags').get();
    querySnapshot.forEach((doc) => {
      doc.ref.delete();
    });
  } catch (error) {
    console.error('Error removing all tags: ', error);
  }
}

export async function updateTagFromDB(id: string, query: ITagQuery): Promise<void> {
  try {
    await db.collection('tags').doc(id).update(query);
    console.log('Tag updated with ID: ', id);
  } catch (error) {
    console.error('Error updating tag: ', error);
  }
}

export async function getTagsFromDB(): Promise<ITagQuery[]> {
  const MAX_TAGS = 100;
  let response = [] as ITagQuery[];
  try {
    const querySnapshot = await db.collection('tags').get();
    querySnapshot.forEach((doc) => {
      response.push({id: doc.id, ...doc.data() as ITagQuery});
    });
    // const querySnapshot = await db
    //   .collection('tags')
    //   .orderBy('createdAt', 'desc')
    //   .limit(MAX_TAGS)
    //   .get();  querySnapshot.forEach((doc) => {      
    // response.push({id: doc.id, ...doc.data() as ITagQuery});
  } catch (error) {
    console.error('Error getting tags: ', error);
  }
  return response;
}

export async function getTagFromDB(id: string): Promise<ITagQuery> {
  let response = {} as ITagQuery;
  try {
    const doc = await db.collection('tags').doc(id).get();
    response = {id: doc.id, ...doc.data() as ITagQuery};
  } catch (error) {
    console.error('Error getting tag: ', error);
  }
  return response;
}

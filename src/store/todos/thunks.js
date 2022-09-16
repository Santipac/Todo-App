import {
  doc,
  collection,
  setDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { loadNotes } from '../../firebase/providers';
import { createTask, deleteTask, setPrevTasks, updateTask } from './todosSlice';

export const startNewTask = name => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newTask = {
      name,
      completed: false,
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/todo/tasks`));
    await setDoc(newDoc, newTask);
    newTask.id = newDoc.id;

    dispatch(createTask(newTask));
  };
};

export const startLoadingTasks = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const prevTasks = await loadNotes(uid);
    dispatch(setPrevTasks(prevTasks));
  };
};

export const startCheckingTasks = (id, completed) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const taskRef = doc(FirebaseDB, `${uid}/todo/tasks/${id}`);
    await updateDoc(taskRef, {
      completed: !completed,
    });
  };
};

export const startUpdatingTasks = ({ id, name }) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const taskRef = doc(FirebaseDB, `${uid}/todo/tasks/${id}`);
    await updateDoc(taskRef, {
      name: name,
    });
    dispatch(updateTask({ id, name }));
  };
};

export const startDeletingTask = id => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    dispatch(deleteTask(id));
    await deleteDoc(doc(FirebaseDB, `${uid}/todo/tasks/${id}`));
  };
};

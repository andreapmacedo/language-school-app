import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FC } from 'react';
import Home from "../pages/Home";
import QuestionForm from "../pages/QuestionForm";
import QuestionsManager from "../pages/QuestionsManager";

interface Props {}

const AppRoutes: FC<Props> = () => (
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/question-form'  element={<QuestionForm/>}/> 
      <Route path='/questions-manager'  element={<QuestionsManager/>}/> 
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
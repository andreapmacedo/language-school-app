import { useState, useEffect, useContext } from 'react';
import { db } from '../../firebase/config';
// import { addQuestion, addQuestionBy } from '../../firebase/firestore';
import { addQuestionBy } from '../../firebase/firestore';

// import ProductCard from '../../components/ProductCard';
// import Header from '../../components/Header';

// import { GlobalContext } from '../../providers/GlobalProvider';
import { Container, CardContainer } from './styles';


const Questions = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  interface QuestionQuery {
    category: string;
    difficulty: string;
    type: string;
    level: string;
    correct_answer: string;
    question: string;
    answers: string[];
  }
  
  interface QueryAddState {
    query: QuestionQuery;
  }
  
  const initialQuery: QuestionQuery = {
    category: '',
    difficulty: '',
    type: '',
    level: '',
    correct_answer: '',
    question: '',
    answers: [],
  };

  const [queryAdd, setQueryAdd] = useState(initialQuery);
  const [answer, setAnswer] = useState('');
  const [answers, setAnswers] = useState([{answer: '', correct: false}]);

  function addAnswer() {
    setAnswers([...answers, {answer: answer, correct: false}]);
    setAnswer('');
  }

  function updateQuery(query: QuestionQuery) {
    setQueryAdd(query);
  }

  useEffect(() => {
      updateQuery({
        ...queryAdd,
        answers: answers.map((ans) => ans.answer)
      });
  }, [answers]);


  // function addAnswer(answrs: string) {
  //   setQueryAdd((prevState) => ({
  //     query: {
  //       ...prevState.query,
  //       answers: [...prevState.query.answers, answrs],
  //     },
  //   }));
  // }

  // const query = {
  //   category: '',
  //   difficulty: '',
  //   type: '',
  //   level: '',
  //   correct_answer: '',
  //   question: '',
  //   answers: [],
  // }


  // const [queryAdd, setQueryAdd] = useState(query);
  
  // function addAnswer(answrs: string) {
  //   setQueryAdd({
  //     ...queryAdd,
  //     answers: [...queryAdd.answers, answrs ]
  //   });
  // }

  // const {
  //     // cart,
  //     // setCart,
  //     products,
  //     setProducts
  //   } = useContext(GlobalContext);

  // const query = {
  //   category: 'JavaScript',
  //   difficulty: 'easy',
  //   type: 'multiple',
  //   level: 'easy',
  //   correct_answer: 'B',
  //   question: 'Which of the following is not a valid JavaScript variable name?',
  //   answers: [
  //     '2names',
  //     'Which of the following is not a valid JavaScript variable name?',
  //     'FirstAndLast',
  //     'None of the above'
  //   ] 
  // }



  useEffect(() => {
    console.log('Questions');
    // addQuestionBy(query);
    // setLoading(true);
    // db.collection('products').get().then((snapshot) => {
    //   if (snapshot.empty) {
    //     setError('No matching documents.');
    //     setLoading(false);
    //   } else {
    //       let results = [];
    //       snapshot.docs.forEach(doc => {
    //         results.push({id: doc.id, ...doc.data()});
    //       });
    //       setProducts(results);
    //       console.log(results);
    //       setLoading(false);
    //   }
    // }).catch((error) => {
    //   setError(error);
    //   setLoading(false);
    // });
  }, [])




  // useEffect(() => {
  //   console.log('Questions');
    
  //   setLoading(true);
  //   db.collection('products').get().then((snapshot) => {
  //     if (snapshot.empty) {
  //       setError('No matching documents.');
  //       setLoading(false);
  //     } else {
  //         let results = [];
  //         snapshot.docs.forEach(doc => {
  //           results.push({id: doc.id, ...doc.data()});
  //         });
  //         setProducts(results);
  //         console.log(results);
  //         setLoading(false);
  //     }
  //   }).catch((error) => {
  //     setError(error);
  //     setLoading(false);
  //   });
  // }, [])

  // useEffect(() => {
  //   console.log('Questions');
    
  //   setLoading(true);
  //   db.collection('questions').get().then((snapshot) => {
  //     if (snapshot.empty) {
  //       setError('No matching documents.');
  //       setLoading(false);
  //     } else {
  //         let results = [];
  //         snapshot.docs.forEach(doc => {
  //           results.push({id: doc.id, ...doc.data()});
  //         });
  //         // setProducts(results);
  //         console.log(results);
  //         setLoading(false);
  //     }
  //   }).catch((error) => {
  //     setError(error);
  //     setLoading(false);
  //   });
  // }, [])
  
  // const addToCart = async ({ id }) => {
    // try {
      
    //   const querySnapshot = await db.collection('cart').where('productId', '==', id).get();
    //   const existingItem = cart.find(item => item.productId === id);

    //   if (existingItem) {
    //     const { quantity } = existingItem;
        
    //     const newCart = cart.map(item => item.productId === id ? { ...item, quantity: item.quantity + 1 } : item);
    //     const updateItem = db.collection('cart').doc(querySnapshot.docs[0].id);
        
    //     await updateItem.update({ quantity: quantity + 1 });
    //     setCart(newCart);
      
    //   } else {
    //     const newItem = { productId: id, quantity: 1 };
        
    //     await db.collection('cart').doc().set(newItem);
    //     setCart([...cart, {productId: id, quantity: 1}]);
    //   }
    // } catch (error) {
    //   console.error('Error to add item:', error);
    // }
  // }

  return (
    
    <Container>
    {/* //   <Header /> */}
      {error && <p>Something went wrong ...</p>}
      {loading && <p>Loading...</p>}
      <form>
        <label htmlFor='category'>
          Category:
        </label>
        <input 
          type="text"
          name="category"
          value={queryAdd.category}
          onChange={(e) => setQueryAdd({...queryAdd, category: e.target.value})}
        />
        <label htmlFor='difficulty'>
          Difficulty:
        </label>
        <input
          type="text"
          name="difficulty"
          value={queryAdd.difficulty}
          onChange={(e) => setQueryAdd({...queryAdd, difficulty: e.target.value})}
        />
        <label htmlFor='type'>
          Type:
        </label>
        <input
          type="text"
          name="type"
          value={queryAdd.type}
          onChange={(e) => setQueryAdd({...queryAdd, type: e.target.value})}
        />
        <label htmlFor='level'>
          Level:
        </label>
        <input

          type="text"
          name="level"
          value={queryAdd.level}
          onChange={(e) => setQueryAdd({...queryAdd, level: e.target.value})}
        />
        <label htmlFor='correct_answer'>
          Correct Answer:
        </label>
        <input
          type="text"
          name="correct_answer"
          value={queryAdd.correct_answer}
          onChange={(e) => setQueryAdd({...queryAdd, correct_answer: e.target.value})}
        />
        <label htmlFor='question'>
          Question:
        </label>
        <input
          type="text"
          name="question"
          value={queryAdd.question}
          onChange={(e) => setQueryAdd({...queryAdd, question: e.target.value})}
        />
        <div>

        </div>
        <label htmlFor='answers'>
          Answers:
        </label>
        <input
          type="text"
          name="answers"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        
        <button
          type="button"
          onClick={() => addAnswer()}
        >
          Adicionar Resposta
        </button>        
        <button
          type="button"
          // onClick={() => addQuestionBy(queryAdd)}
        >
          Adicionar Questão
        </button>        
      </form>


      {
        answers.map((answer, index) => (
          <p key={index}>{answer.answer}</p>
        ))
      }


      {/* {console.log(products)} */}
    {/* {  
       <CardContainer>
         {products.map((product, index) => (
          //  <ProductCard key={index} data={product} action={addToCart}/>
          console.log(product)
       ))}
       </CardContainer> } */}

    </Container>
  );
}

export default Questions;

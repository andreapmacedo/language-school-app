// import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';


// import Header from '../../components/Header';

// import { GlobalContext } from '../../providers/GlobalProvider';
import { Container, CardContainer } from './styles';


const Home = () => {
  const navigate = useNavigate();

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);


  return (
    
    <Container>
    {/* //   <Header /> */}
      {/* {error && <p>Something went wrong ...</p>}
      {loading && <p>Loading...</p>} */}
      <div onClick={ () => navigate('/question-form') }>
        <h2>Adicionar Questões</h2>
      </div>
      <div onClick={ () => navigate('/questions-manager') }>
        <h2>Listar Questões</h2>
      </div>

    </Container>
  );
}

export default Home;

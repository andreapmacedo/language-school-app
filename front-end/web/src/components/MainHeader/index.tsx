
import Toggle from '../Toggle';
import { 
  Container,
  Profile,
  Welcome,
  UserName,
} from './styles';


interface Props {

}

const MainHeader: React.FC<Props> = ({

}) => {

  return (
    <Container>
      <Toggle />
      <Profile>
        <Welcome>Olá</Welcome>
        <UserName>André Macedo</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
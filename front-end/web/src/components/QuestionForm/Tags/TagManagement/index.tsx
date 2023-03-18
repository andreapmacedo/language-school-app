import { Container } from './styles';
import TagModal from '../TagModal';

interface Props {
  setDbTagChange: (e: boolean) => void;
  dbTagChange: boolean;
}

const TagManagement: React.FC<Props> = ({
  setDbTagChange,
  dbTagChange,
}) => {

  return (
    <Container>
      <TagModal 
        setDbTagChange={setDbTagChange}
        dbTagChange={dbTagChange}
      />
    </Container>
  );
};

export default TagManagement;
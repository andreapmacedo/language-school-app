import { Container } from './styles';

import { addTagToDB, getTagsFromDB, removeTagFromDB } from '../../../../firebase/tags';

import TagModal from '../TagModal';

interface Props {
  

}

const TagManagement: React.FC<Props> = ({


}) => {

  return (
    <Container>
      <TagModal />
      {/* aqui seria a hora do modal */}
    </Container>
  );
};

export default TagManagement;
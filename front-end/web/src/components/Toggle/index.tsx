import { Container, ToggleLabel } from './styles';
// import Switch from 'react-switch';
import { ToggleSelector } from './styles';

interface Props {

}

const Toogle: React.FC<Props> = ({

}) => {

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
          checked={false}
          uncheckedIcon={false}
          checkedIcon={false}
          onChange={() => {console.log('teste');
          }}        
      />
      
        {/* <Switch

          checked={true}
          uncheckedIcon={false}
          checkedIcon={false}
          onChange={() => {}}
          
          // height={10}
          // width={30}
          // handleDiameter={20}
          // offColor="#D4D4D4"
          onColor="#04D361">

        </Switch> */}
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};

export default Toogle;
import { Container, Label} from './styles';
import Select from '../../../Bricks/Select';

interface Props {
  onChange: (selectedItem: any) => void;
}

const SetupContent: React.FC<Props> = ({
  onChange
}) => {
  
  // Manual
  // const [questionLevel, setQuestionLevel] = useState(['1', '2', '3', '4', '5']);
  // const [questionType, setQuestionType] = useState(['Multiple', 'Boolean']);
  // const [questionDifficulty, setQuestionDifficulty] = useState(['Easy', 'Medium', 'Hard']);
  // const [questionCategory, setQuestionCategory] = useState(['Quiz', 'Test', 'Exam', 'Homework', 'Assignment', 'Project', 'Other']);

  // Auto
  const data = [
    {level: ['1', '2', '3', '4', '5']},
    {type: ['Multiple', 'Boolean']},
    {difficulty: ['Easy', 'Medium', 'Hard']},
    {category: ['Quiz', 'Test', 'Exam', 'Homework', 'Assignment', 'Project', 'Other']}
  ];
  
  return (
    <Container>

      {/* { Manual } */}
      {/* <Label htmlFor='category'>
        Category:
        <Select name="category" options={questionCategory} onChange={onChange}/>
      </Label>
      <Label htmlFor='difficulty'>
        Difficulty:
        <Select name="difficulty" options={questionDifficulty} onChange={onChange}/>
      </Label>
      <Label htmlFor='type'>
        Type:
        <Select name="type" options={questionType} onChange={onChange}/>
      </Label>
      <Label htmlFor='level'>
        Level:
        <Select name="level" options={questionLevel} onChange={onChange}/>
      </Label> */}

      {/* Auto */}
      {
        data.map((item, index) => (
          <Label key={index} htmlFor={Object.keys(item)[0]}>
            {Object.keys(item)[0]}:
            <Select name={Object.keys(item)[0]} options={Object.values(item)[0]} onChange={onChange}/>
          </Label>
        ))
      }
    </Container>
  );
};

export default SetupContent;
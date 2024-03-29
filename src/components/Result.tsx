// utils
import { ResultProps } from '../utils/type';

const Result: React.FC<ResultProps> = (props) => {
  return (
    <div>
      {props.omikuji && (
        <div className='result'>
          <h1>{props.omikuji.name}</h1>
          <p>{props.omikuji.description}</p>
        </div>
      )}
    </div>
  );
};

export default Result;

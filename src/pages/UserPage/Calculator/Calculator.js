import { EntryForm } from '../../Home/EntryForm';
import { Summary } from './Summary';

const Calculator = () => {
  return (
    <div className="flex-xl-row flex-xs-column d-flex flex-wrap overflow-hidden">
      <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12 pb-5">
        {' '}
        <EntryForm />{' '}
      </div>
      <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-2 mt-3 justify-content-center align-content-center">
        <Summary />
      </div>
    </div>
  );
};

export default Calculator;

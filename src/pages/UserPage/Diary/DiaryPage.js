import { Summary } from '../Calculator/Summary';
import { Journal } from './Journal';

const Calculator = () => {
  return (
    <>
      <div className="row d-flex flex-wrap justify-content-center align-items-center mt-1">
        <div className="col-xl-7 col-lg-7 col-sm-12 pb-5">
          {' '}
          <Journal />{' '}
        </div>
        <div className="col-xl-5 col-lg-5 col-sm-12 col-xs-12 p-2 mt-3 justify-content-center align-content-center bg-summary">
          <Summary />
        </div>
      </div>
    </>
  );
};

export default Calculator;

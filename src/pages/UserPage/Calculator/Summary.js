import React from 'react';
import layer from '../../Home/images/layer.png';

export const Summary = () => {
  return (
    <div className="position-relative summary-bg overflow-hidden">
      <div className="summary-container">
        <div>
          <h3 className="summary-title mb-4 p-2">Summary for 13.08.2023</h3>
          <table className="table table-borderless table-responsive mb-5">
            <tbody>
              <tr>
                <td>Left</td>
                <td>000 kcal</td>
              </tr>
              <tr>
                <td>Consumed </td>
                <td>000 kcal</td>
              </tr>
              <tr>
                <td>Daily rate </td>
                <td>000 kcal</td>
              </tr>
              <tr>
                <td>n% of normal </td>
                <td>000 kcal</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="food-not-recomended p-1">
          <h3 className="summary-title mb-5">Food not recommended</h3>
          <p className="summary-description">
            Your diet will be displayed here
          </p>
        </div>
      </div>

      <img src={layer} alt="Layer" className="img-fluid layer-image-user" />
    </div>
  );
};

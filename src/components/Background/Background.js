import layer from './images/layer.png';
import banana from './images/banana.png';
import strawberry from './images/strawberry.png';

export const Background = () => {
  return (
    <div className="background">
      <div className="row">
        <div className="layer-container d-flex align-items-end">
          <img src={layer} alt="Layer" className="img-fluid layer-image" />
        </div>
        <div className="d-flex flex-column align-items-end position-relative overflow-hidden">
          <img
            src={strawberry}
            alt="Strawberry"
            className="img-fluid strawberry order-xl-2 order-lg-1"
          />
          <img
            src={banana}
            alt="Banana"
            className="img-fluid banana order-xl-1 order-lg-2"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 603 816"
            fill="none"
            className="heart"
          >
            <path
              d="M206 259C51.6 271.8 6 403.667 1.5 468C-8.1 648.4 119.167 775.167 185 816H603V-0.000244141C603 -0.000244141 574.5 24.4998 570 68.9997C533 262 534.5 291 467.5 300.5C400.5 310 316 249.881 206 259Z"
              fill="#F0F1F3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

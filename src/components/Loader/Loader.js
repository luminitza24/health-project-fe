import { useState } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

const override = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '25px',
};

export const Loader = () => {
  // eslint-disable-next-line
  let [loading, setLoading] = useState(true); // eslint-disable-next-line
  let [color, setColor] = useState('rgba(251, 135, 69, 1)');

  return (
    <div className="sweet-loading">
      <PropagateLoader
        color={color}
        cssOverride={override}
        loading={loading}
        size={30}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Loader;

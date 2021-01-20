import { Fragment } from 'react';
import spinner from './spinner.gif';

function Spinner() {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading..."
        style={{ display: 'block', margin: 'auto' }}
      />
    </Fragment>
  );
}

export default Spinner;

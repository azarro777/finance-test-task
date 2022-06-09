import { IconContext } from 'react-icons';
import { CgArrowUpR, CgArrowDownR } from 'react-icons/cg';
import './Card.css';

export const Card = (props) => {
	const {color, ticker, price, persent, change} = props;

  return (
    <div className="card-container">
      <IconContext.Provider
        value={{
          size: '2rem',
          color: color,
          className: 'global-class-name'
        }}
      >
        {color === '#137333' ? <CgArrowUpR /> : <CgArrowDownR />}
      </IconContext.Provider>
      <div className="card-title">
      <h3 className="card-title__ticker">{ticker}</h3>
      <p className="card-title__price" style={{color: color}}>
        {price}{' '}
      </p>
    </div>
      <div className="card-persent">
      <p className="card-persent__persent" style={{color: color}}>
        {persent}%
      </p>
      <p className="card-persent__change" style={{color: color}}>
        {change}
      </p>
    </div>
    </div>
  );
};
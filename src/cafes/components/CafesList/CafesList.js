import CafeItem from '../CafeItem/CafeItem';

import classes from './CafesList.module.css';

const DUMMY_CAFES = [
  {
    name: 'MKS Kombinat',
    address: 'Kralja Petra Prvog 18',
    city: 'Smederevo',
    numOfSeats: 40,
    wifiStrength: 3.5,
    coffeRating: 3.5,
  },
  {
    name: 'Snatch',
    address: 'Kralja Petra Prvog 8',
    city: 'Smederevo',
    numOfSeats: 25,
    wifiStrength: 4,
    coffeRating: 3,
  },
];

const CafesList = (props) => {
  return (
    <ul className={classes.list}>
      {DUMMY_CAFES.map((cafe) => (
        <CafeItem
          name={cafe.name}
          address={cafe.address}
          city={cafe.city}
          numOfSeats={cafe.numOfSeats}
          wifiStrength={cafe.wifiStrength}
          coffeRating={cafe.coffeRating}
        />
      ))}
    </ul>
  );
};

export default CafesList;
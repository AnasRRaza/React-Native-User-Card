import React from 'react';
import Card from './Card/Card';
import {UserDetails} from './Card/Container';
// import {Counter} from './Counter/Container';
// import CounterDisplay from './Counter/Counter';

const Main = () => {
  return (
    // <Counter.Provider initialState={2}>
    // </Counter.Provider>
    // <CounterDisplay />

    <UserDetails.Provider>
      <Card />
    </UserDetails.Provider>
  );
};

export default Main;

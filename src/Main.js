import React from 'react';
import Card from './Card/Card';
import {UserDetails} from './Card/Container';
// import {Counter} from './Counter/Container';
// import CounterDisplay from './Counter/Counter';

const Main = () => {
  return (
    // <Counter.Provider initialState={2}>
    <UserDetails.Provider>
      {/* <CounterDisplay /> */}
      <Card />
    </UserDetails.Provider>
    // </Counter.Provider>
  );
};

export default Main;

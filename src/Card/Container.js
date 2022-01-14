import axios from 'axios';
import {useState} from 'react';
import {createContainer} from 'unstated-next';

const useUserDetails = (initialState = {}) => {
  const [user, setUser] = useState(initialState);

  const getData = async () => {
    const baseURL = 'https://randomuser.me/api/';

    await axios
      .get(baseURL)
      .then(response => {
        // console.log(JSON.stringify(response.data, null, 2));
        setUser(response.data.results);
      })
      .catch(e => {
        console.log(e);
      });
  };
  return {user, getData};
};

export const UserDetails = createContainer(useUserDetails);

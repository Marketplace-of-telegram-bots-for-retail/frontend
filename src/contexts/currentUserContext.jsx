// import React, { useState, useMemo } from 'react';

// import avatar from '../images/Avatar.png';

// const UserContext = React.createContext(null);

// const UserProvider = ({ children }) => {
//   const [user, setUser] = useState({
//     photo: avatar,
//     login: 'username',
//     first_name: 'Иван',
//     last_name: 'Иванов',
//     phone: '+79260000000',
//     email: 'ivanov21@mail.ru',
//     password: 'password',
//   });
//   const value = useMemo(() => ({ user, setUser }), [user]);
//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };

// export { UserProvider, UserContext };

import { createContext } from 'react';

export const CurrentUserContext = createContext();

import { createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider( { children } ) {

    const [ currentUser, setCurrentUser ] = useState(false)

    function updateUser(user) {
        setCurrentUser(user)
    }

    return <UserContext.Provider value={{
        updateUser, currentUser, setCurrentUser
    }}>
        
    {children}</UserContext.Provider>

}

export { UserContext, UserProvider }
import React, { useContext } from 'react';
import { AuthContext } from './PriveteRoute';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';



const ContexRoute = ({children}) => {
    
    const { loading, user } = useContext( AuthContext )
    const location = useLocation()
    
    if(loading){
        return <Spinner
        aria-label="Extra large spinner example"
        size="xl"
      />
    }

if (user) {
    return children
}

 return <Navigate state={{from:location}} to='/login'></Navigate>
};

export default ContexRoute;
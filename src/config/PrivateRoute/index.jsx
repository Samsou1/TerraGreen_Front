import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const PrivateRoute = () => {
    let auth = {'token': Cookies.get('bearerToken')}
    return(
        auth.token ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoute
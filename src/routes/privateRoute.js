import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


const PrivateRoute = ({component: Component, auth, ...rest}) => (
    <Route
        {...rest}
        render = { props =>
            auth.isAuthenticated === true ? (
                <Component {...props} />
            )
            :(
                <Redirect to="/pages/login" />
            )
        }
    />
)


 PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
    
  }
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
    
  })
  export default connect(mapStateToProps)(withRouter(PrivateRoute));
import React, { useReducer } from 'react';
import UserContext from './userContext';
import UserReducer from './userReducer';
import api from '../../api/api';
import {
  GET_USER,
  SET_ERROR,
  CLEAR_STATE,
  SET_LOADING
} from '../types';


const UserState = props => {
  const initialState = {
    user: {},
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  //Get Single Item by ID
  const getUser = async userId => {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${localStorage.getItem("token")}`
    //   }
    // };
    setLoading();
    try {
      // const res = await api.get(`/users/${userId}`, config);
      dispatch({
        type: GET_USER,
        // payload: res.data.data
        payload:{name:'alex'}
      });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err.response.data })

    }
  };
  //Clear State
  const clearUserState = () => dispatch({ type: CLEAR_STATE });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <UserContext.Provider
      value={{
        loading: state.loading,
        user: state.user,
        error: state.error,
        getUser,
        clearUserState,
        setLoading,

      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;

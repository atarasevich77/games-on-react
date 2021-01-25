export const GET_USERS = 'GET_USERS';
export const GET_FAILURE = 'GET_FAILURE';

export const getFailure = (error) => ({
    type: GET_FAILURE,
    payload: error
});

export const getUsers = (users) => ({
    type: GET_USERS,
    payload: users
});
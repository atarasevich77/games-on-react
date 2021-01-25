import * as actions from '../redux/actions';

const initUsers = {
    users: [],
    severConnect: false,
    errors: null
};

const users = (state = initUsers, action) => {
    switch (action.type) {
        case actions.GET_USERS:
            return {
                ...state,
                users: action.payload,
                severConnect: true
            };
        case actions.GET_FAILURE:
            return {
                ...state,
                severConnect: false,
                errors: action.payload
            };
        default:
            return state;
    }
}

export default users;
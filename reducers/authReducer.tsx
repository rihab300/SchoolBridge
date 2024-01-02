interface Action {
  type: string;
  payload?: any; 
}

interface AuthState {
  user: {
    username: string;
    id: number;
  } | null; 
}

const initialState: AuthState = {
  user: null,
};

const authReducer = (state: AuthState = initialState, action: Action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
interface LoginData {
    email: string;
    password: string;
  }
  
  export const login = (loginData: LoginData) => {
    return {
      type: 'LOGIN' as const,
      payload: loginData,
    };
    console.log('User data received:'); 
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT' as const,
    };
    console.log('Logging out user'); 
  };
  
  type AuthAction = ReturnType<typeof login | typeof logout>;
  
  export default AuthAction;
  
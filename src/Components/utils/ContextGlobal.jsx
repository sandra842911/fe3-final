import { createContext, useReducer, useContext } from "react";

export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <ContextGlobal.Provider value={{...state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
  const appReducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return {
          ...state,
          theme: state.theme === 'light' ? 'dark' : 'light',
        };
      case 'SET_DENTISTS':
        return {
          ...state,
          details: action.payload,
        };
      
        default:
          return state;
      }
      };

        const useAppContext = () => {
          const context = useContext(ContextGlobal);
          if (!context) {
            throw new Error('useAppContext debe ser utilizado dentro de AppProvider');
          }
          return context;
          
        };
        
        
     
   

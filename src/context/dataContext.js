import { createContext, useReducer } from "react";
import { dataReducer } from "../reducer/reducer";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, {
            data:[]
        }
      );
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
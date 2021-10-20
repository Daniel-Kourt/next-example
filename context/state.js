import { createContext, useContext, useState, useEffect } from 'react';
import { useAxios } from '../hooks/useAxios'

const AppContext = createContext();

export function AppWrapper({ children }) {
  
  const [casesData, casesError, casesLoading] = useAxios('COVID19BE_CASES_AGESEX.json');
  const [vaccData, vaccError, vaccLoading] = useAxios('COVID19BE_VACC.json');
  const [deathsData, deathsError, deathsLoading] = useAxios('COVID19BE_MORT.json');
  
  const [casesContext, setCasesContext] = useState(null);
  const [vaccinsContext, setVaccinsContext] = useState(null);
  const [deathsContext, setDeathsContext] = useState(null);

  //const cases = {name: 'kostas', age: 35}

  useEffect(() => {

    if ( vaccError ) {
        setVaccinsContext( {
            error: true,
            message: "Please try again later"
        });
    }
    else {
        setVaccinsContext( vaccData );
    }
            
  }, [vaccLoading])

  useEffect(() => {
      setCasesContext( casesData );
  }, [casesLoading])

  useEffect(() => {
      setDeathsContext( deathsData );
  }, [deathsLoading])

  return (
    <AppContext.Provider value={{casesContext, vaccinsContext, deathsContext}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
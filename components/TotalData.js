//import Loader from "react-loader-spinner";
//import { DataContext } from '../../context/DataContextProvider';
import { useAppContext } from '../context/state';
import { count_vaccinations_A, count_vaccinations_B } from '../utils/vacCalculations';
import { count_cases, cases_by_date } from '../utils/casesCalculations';
import { total_deaths, deaths_by_date } from '../utils/deathsCalculations';

const TotalData = ({cases, vaccinations, deaths}) => {

    //const {casesContext: cases, deathsContext: deaths, vaccinsContext: vaccinations } = useAppContext();
    
    return (
        <> 
            
            {(cases && deaths && vaccinations)
            ?
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:px-16 md:px-24 lg:px-8">
                    
                    {/* ----- Cases ----- */}
                    <div className="border border-blue-100 rounded-md text-yellow-300">
                        <p className="mb-2 uppercase">Total cases</p>
                        <p className="text-3xl">{count_cases(cases).toLocaleString()}</p>
                        <p> persons</p>
                        <p className="mt-2 text-xl">
                            {cases_by_date(cases).slice(0,7).reduce( (sum, { daily_cases }) => sum + daily_cases, 0 ).toLocaleString()}
                        </p>
                        <p>in last week</p>                        
                    </div>

                    {/* ----- Deaths ----- */}
                    <div className="border border-blue-100 rounded-md text-red">
                        <p className="mb-2 uppercase">Total deaths</p>
                        <p className="text-3xl">{total_deaths(deaths).toLocaleString()}</p>
                        <p> persons</p>
                        <p className="mt-2 text-xl">
                            {deaths_by_date(deaths).slice(0,7).reduce( (sum, { deaths_total }) => sum + deaths_total, 0 ).toLocaleString()}
                        </p>
                        <p>in last week</p>                        
                    </div>

                    {/* ----- Partly vaccinated ----- */}
                    <div className="border border-blue-100 rounded-md text-purple">
                        <p className="mb-2 uppercase">Partly vaccinated</p>
                        <p className="text-3xl">{count_vaccinations_A(vaccinations).vacc_A.toLocaleString()}</p>
                        <p> persons</p>
                        <p className="mt-2 text-xl">{count_vaccinations_A(vaccinations).percentage}%</p>
                        <p>of the population</p>
                    </div>

                    {/* ----- Fully vaccinated ----- */}
                    <div className="border border-blue-100 rounded-md text-green">
                        <p className="mb-2 uppercase">Fully vaccinated</p>
                        <p className="text-3xl">{count_vaccinations_B(vaccinations).vacc_B.toLocaleString()}</p>
                        <p> persons</p>
                        <p className="mt-2 text-xl">{count_vaccinations_B(vaccinations).percentage}%</p>
                        <p>of the population</p>
                    </div>

                </div>
            :
                <div className="min-h-screen flex flex-col items-center justify-center">
                    {/* <Loader
                        type="Puff"
                        color="#a78bfa"
                        height={100}
                        width={100}                        
                    />  */}
                    <p className="pt-4 text-base text-white">
                        Loading data . . .
                    </p>
                </div>    
            }

           
        </>
    )
}

export default TotalData

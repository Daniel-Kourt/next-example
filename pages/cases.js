import { useAppContext } from '../context/state';
import Meta from '../components/Meta'

const Cases = () => {

    const {casesContext} = useAppContext();

    console.log(casesContext);
    
    return (
        <>
        <Meta 
            title="Next App | Covid-19 Cases" 
            description="Covid19 Cases in Belgium" 
            keywords="Next.js, covid, belgium, react"
        />
        <div>
            <h1>Cases Page</h1>
            <p>lorem10</p>

            {
            casesContext && 
            casesContext.reverse().slice(1,100).map(item => (
                <p key={item.DATE + Math.random().toString()}>
                    {item.DATE} | {item.PROVINCE} | {item.CASES}
                </p>
            ))}

        </div>
        </>
    )
}

export default Cases

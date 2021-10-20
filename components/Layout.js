import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <>
        <div>            
            <Nav />
            <main>
                {children}
            </main>
            <Footer />            
        </div>

        <style jsx>{
            `
            main {
                display: flex;
                justify-content: center;

            }
            `
        }           
        

        </style>
        </>
    )
}

export default Layout

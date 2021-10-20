import Head from 'next/head'

const Meta = ({title, description, keywords}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="icon" href="/favicon.ico" />            
        </Head>
    )
}

Meta.defaultProps = {
    title: "Next App",
    description: "My First Next App",
    keywords: "Next.js, web development"
}

export default Meta

import Head from 'next/head';

const Layout = ({children, title}) => {
    return (
        <>
        <Head>
            <title>vocablo | {title}</title>
            <meta name="description" content="teaching reading" />
            <link rel="icon" href="/icono_vocablo.svg" />
        </Head>
        <div>
            {children}
        </div>
        </>
    );
};

export default Layout;
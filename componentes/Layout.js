import Head from 'next/head';
import { useEffect, useState } from 'react';

const Layout = ({children, title}) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, []);

    return (
        <>
        {loading ? (
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
        ):(<small>Cargando página...</small>)}
        </>
    );
};

export default Layout;
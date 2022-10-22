import React from 'react';
import Error404 from '../componentes/Error404';
import Layout from '../componentes/Layout';

const Error = () => {
    return (
        <Layout title="página no encontrada">
            <Error404></Error404>
       </Layout>
    );
};

export default Error;
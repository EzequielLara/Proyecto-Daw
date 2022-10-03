

const AppDomain = () => {
    return (
        <>
        <div className="d-flex align-items-center estilo">
                <button className="border-0 bg-transparent "><i className="bi bi-arrow-left-circle icono hover"></i></button>
            <div className="box w-75 m-auto text-success">
                <h1 className="text-center letra fw-bold">manzanas</h1>
            </div>
            <button className="border-0 bg-transparent"> <i className="bi bi-arrow-right-circle icono hover"></i></button>
        </div>
        <div>
        </div>
        <style>{`
            .estilo{
                min-height: 100vh;
            }
            .letra{
                font-size: 9rem;
                color:#393d42;
            }
            .icono{
                font-size: 5rem;
                color:#dcdcdc;
                padding:1rem;
            }
            .hover:hover{
                color: #a7a7a7
            }
        `}</style>
        </>
    );
};

export default AppDomain
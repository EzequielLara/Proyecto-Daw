import Layout from "../../componentes/layouts/Layout";
import Link from "next/link";
import Header from "../../componentes/compartidos/Header";

const ConfiguracionDomain = () => {
  return (
    <>
      <Layout title="Configuración">
        <div className="imgvocablo">
          <Link href={"/"}>
            <a>
              <img alt="Logo vocablo" src="/logo_vocablo.svg" width="200" />
            </a>
          </Link>
        </div>
        <main>
          <Header contenido="Configuración"></Header>
          <form>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationDefault01">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  placeholder="First name"
                  defaultValue="Mark"
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationDefault02">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault02"
                  placeholder="Last name"
                  defaultValue="Otto"
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationDefaultUsername">Username</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend2">
                      @
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefaultUsername"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend2"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationDefault03">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault03"
                  placeholder="City"
                  required
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationDefault04">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault04"
                  placeholder="State"
                  required
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationDefault05">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault05"
                  placeholder="Zip"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="invalidCheck2"
                  required
                />
                <label className="form-check-label" htmlFor="invalidCheck2">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <Link href={"/carrusel/app"}>
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </Link>
          </form>
        </main>
      </Layout>
      <style>{`
       @media (max-width:440px){
            .imgvocablo{
              width:100%;
              text-align:center;
              margin-top:15px;
            }
          }
    `}</style>
    </>
  );
};

export default ConfiguracionDomain;

import { useForm } from "../../hooks/useForm";
import {} from 'firebase/auth';
import { useAuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";


export const Login = () => {


      const {onLoginSubmit, successfulLogin} = useAuthContext();
      const { values, changeHandler , onSubmit} = useForm({
        email: '',
        password: '',
      }, onLoginSubmit);
    return (
      <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>
                  <form onSubmit={onSubmit}>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                      name="email"
                      value={values.email}
                      onChange={changeHandler}
                      />
                    <label className="form-label" htmlFor="typeEmailX">
                      Email
                    </label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                      name="password"
                      value={values.password}
                      onChange={changeHandler}
                      />
                    <label className="form-label" htmlFor="typePasswordX">
                      Password
                    </label>
                  </div>
                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    >
                    Login
                  </button>
                    {successfulLogin ? null : <p style={{color:"red"}}>Wrong email or password. Please try again!</p>}
                    </form>
                </div>
                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-white-50 fw-bold">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    );
};
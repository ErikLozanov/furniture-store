import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";



export const Register = () => {

  const {onRegisterSubmit,registerError} = useAuthContext();
  const { values, changeHandler , onSubmit} = useForm({
    email: '',
    password: '',
    confirmPassword: '',
  }, onRegisterSubmit);

    return(
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
                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                    <p className="text-white-50 mb-5">
                      Sign up here!
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
                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typeConfirmPasswordX"
                        className="form-control form-control-lg"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={changeHandler}
                        />
                      <label className="form-label" htmlFor="typePasswordX">
                        Confirm Password
                      </label>
                    </div>
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      >
                      Register
                    </button>
                    {registerError && (<p style={{color:"red"}}>{registerError}</p>)}
                      </form>
                  </div>
                  <div>
                    <p className="mb-0">
                      Already have an account?{" "}
                      <Link to="/login" className="text-white-50 fw-bold">
                        Log in
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
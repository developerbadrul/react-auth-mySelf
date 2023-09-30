import { handlaGoogleSignIn, handleLoginIn } from "../../Utilitis/handleSignInUp";
import { FaGithub, FaGooglePlusG } from "react-icons/fa6";
const Login = () => {
    return (
        <div className="flex">
            <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Register</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLoginIn}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <div className="text-3xl py-4 font-semibold">Login With:</div>
                    <button onClick={handlaGoogleSignIn} className="btn btn-outline btn-info mx-3 text-xl"><FaGooglePlusG></FaGooglePlusG></button>
                    <button className="btn btn-outline btn-success text-xl"><FaGithub></FaGithub></button>
                </div>
            </div>
        </div>
    );
};

export default Login;
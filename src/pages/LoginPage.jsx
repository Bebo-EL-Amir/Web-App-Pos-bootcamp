import axios from "axios";
import Logo from '../assets/Untitled design.png';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import AutoPlay from "../components/AutoPlay";

export default function LoginPage() {
  const navigate = useNavigate();
  const STRAPI_API = "https://intuitive-cactus-25a6544a8c.strapiapp.com";

  // ===== Validation Schema =====
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // ===== Handle Login =====
  const handleSubmit = (values, { setSubmitting }) => {
    const url = `${STRAPI_API}/api/auth/local`;
    const dataToSend = { identifier: values.email, password: values.password };

    axios
      .post(url, dataToSend)
      .then((res) => {
        const token = res.data.jwt;
        if (values.isChecked) localStorage.setItem("token", token);
        else sessionStorage.setItem("token", token);

        toast.success("Login Successful!");
        navigate("/");
      })
      .catch((err) => {
        const msg = err.response?.data?.error?.message || "Login failed";
        toast.error(msg);
      })
      .finally(() => setSubmitting(false));
  };

  // ===== Redirect if already logged in =====
  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) navigate("/");
  }, [navigate]);

  return (
    <div className="flex w-full h-screen font-sans">
      {/* Left Side - Branding & Illustration */}
      <div className="hidden lg:flex w-1/2 bg-[#f5f6f1] flex-col items-center justify-center p-12 relative overflow-hidden">
        <div className="z-10 text-center">
            {/* Logo Placeholder */}
            <div className="mb-8 flex justify-center items-center">
                        <div className="  w-[300px] h-[100px] rounded-full  shadow-lg">
                           <img src={Logo}  width={400} height={200}/>
                        </div>
                       </div>
            <h2 className="text-[25px] font-bold text-gray-800 mb-4">Burgers & Pizzas for Every Taste</h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Choose from a rich selection of burgers and pizzas, customize every bite, and track your order in real time
            </p>
            <AutoPlay/>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-6 md:p-12">
        <Formik
          initialValues={{ email: "", password: "", isChecked: false }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="w-full max-w-md flex flex-col gap-5">
              
              <div className="text-center lg:text-left mb-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back! 👋</h1>
                <p className="text-gray-500">Please sign in to your account</p>
              </div>

              {/* Email Field */}
              <div className="form-control">
                <label className="label hidden">
                  <span className="label-text">Email</span>
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiOutlineMail className="text-gray-400 text-xl" />
                    </div>
                    <Field 
                        className="input w-full pl-10 bg-[#f5f6f1] border-none focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-xl h-12 text-gray-700 placeholder-gray-400" 
                        name="email" 
                        type="email" 
                        autoComplete="email" 
                        placeholder="Enter your email" 
                    />
                </div>
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1 ml-1" />
              </div>

              {/* Password Field */}
              <div className="form-control">
                  <label className="label hidden">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiOutlineLockClosed className="text-gray-400 text-xl" />
                    </div>
                    <Field 
                        className="input w-full pl-10 bg-[#f5f6f1] border-none focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-xl h-12 text-gray-700 placeholder-gray-400" 
                        name="password" 
                        type="password" 
                        autoComplete="current-password" 
                        placeholder="Enter your password" 
                    />
                  </div>
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1 ml-1" />
              </div>

              {/* Remember Me & Recover Password */}
              <div className="flex justify-between items-center text-sm">
                <label className="flex gap-2 items-center cursor-pointer">
                  <Field name="isChecked" type="checkbox" className="checkbox checkbox-sm checkbox-warning rounded" />
                  <span className="text-gray-600">Remember Me</span>
                </label>
                <Link to="#" className="text-orange-500 hover:text-orange-600 font-medium">
                  Reset Password?
                </Link>
              </div>

              {/* Login Button */}
              <button 
                type="submit" 
                className="btn btn-warning w-full rounded-xl text-white font-bold text-lg shadow-md hover:shadow-lg transition-all" 
                disabled={isSubmitting}
              >
                {isSubmitting ? <span className="loading loading-spinner"></span> : "Sign In"}
              </button>
              
               {/* Divider */}
               <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">Or continue with</span>
                    <div className="flex-grow border-t border-gray-200"></div>
               </div>

               {/* Social Login */}
               <div className="grid grid-cols-2 gap-4">
                    <button type="button" className="btn btn-outline border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700 rounded-xl font-normal normal-case">
                        <FcGoogle className="text-xl mr-2" /> Google
                    </button>
                    <button type="button" className="btn btn-outline border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700 rounded-xl font-normal normal-case">
                        <FaFacebookF className="text-blue-600 text-xl mr-2" /> Facebook
                    </button>
               </div>

              {/* Register Link */}
              <div className="text-center mt-4">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-green-600 font-bold hover:underline">
                    Create an account
                  </Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

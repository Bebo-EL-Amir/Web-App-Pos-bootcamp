import axios from "axios";
import Logo from '../assets/Untitled design.png';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi";
import AutoPlay from "../components/AutoPlay";



export default function RegisterPage() {
  const navigate = useNavigate();
  const STRAPI_API = "https://intuitive-cactus-25a6544a8c.strapiapp.com";

  // ===== Validation Schema =====
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must be at most 20 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[0-9]/, "Must contain at least one number")
      .matches(/[^A-Za-z0-9]/, "Must contain at least one special character"),
  });

  // ===== Handle Registration =====
  const handleSubmit = (values, { setSubmitting }) => {
    const url = `${STRAPI_API}/api/auth/local/register`;
    axios
      .post(url, values)
      .then((res) => {
        const token = res.data.jwt;
        sessionStorage.setItem("token", token);
        toast.success("Registration Successful!");
        navigate("/");
      })
     .catch((err) => {
      console.log("Full Error Response:", err.response?.data); // هذا السطر سيظهر لك تفاصيل الخطأ في الـ Console
      const msg = err.response?.data?.error?.message || "Registration failed";
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
            {/* Logo Placeholder
            <div className="mb-8 flex justify-center">
             <div className=" bg-orange-300 rounded-full p-4 shadow-lg">
                <svg
                      className="cursor-pointer"
        width="76"
        height="33"
        viewBox="0 0 66 23"
        fill=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.1826 16.08C13.1266 17.352 8.016 17.5 6.096 17.5C2.304 17.5 0 15.052 0 11.5C0 7.972 2.328 5.524 6.096 5.524C7.92 5.524 13.1746 6.72 14.2306 7.992L8.832 9.484C8.064 8.644 7.224 8.308 6.096 8.308C4.488 8.308 3.096 9.604 3.096 11.5C3.096 13.564 4.392 14.716 6.096 14.716C7.104 14.716 8.256 14.332 8.88 13.54L14.1826 16.08Z" fill="black" />
        <path d="M28.8035 6.312L21.8195 22.872H18.3875L20.6195 17.712L15.7955 6.312H19.2035L21.6035 12.408L22.2995 14.592L22.9715 12.408L25.3715 6.312H28.8035Z" fill="yellow" />
        <path d="M36.6494 8.856C34.9214 8.856 33.6734 10.176 33.6734 11.976C33.6734 13.752 34.9214 15.072 36.6494 15.072C38.3294 15.072 39.4814 13.824 39.4814 11.976C39.4814 10.104 38.3294 8.856 36.6494 8.856ZM30.6734 17.592V0H33.7214V6.264L33.6734 7.08C34.1774 6.408 35.7134 6.024 36.7694 6.024C40.5374 6.024 42.6495 8.784 42.6495 11.976C42.6495 15.576 40.4894 17.904 36.7694 17.904C35.8574 17.904 34.3934 17.472 33.7934 16.752L33.8174 17.4V17.592H30.6734Z" fill="black" />
        <path d="M55.3377 16.152C54.4497 17.304 52.4098 18 50.6578 18C46.8418 18 44.7058 15.384 44.7058 12C44.7058 8.544 46.8178 6.024 50.5378 6.024C54.2338 6.024 56.3457 8.544 56.3457 12C56.3457 12.384 56.3457 12.624 56.3217 12.96H47.8258C47.9938 14.376 49.0498 15.264 50.6578 15.264C51.8098 15.264 52.8897 14.88 53.5617 14.136L55.3377 16.152ZM47.8738 10.896H53.1537C53.0097 9.624 51.9538 8.76 50.5378 8.76C49.1218 8.76 47.9938 9.624 47.8738 10.896Z" fill="black" />
        <path d="M64.7516 9.144C64.1276 8.928 63.5756 8.856 62.9276 8.856C62.4956 8.856 62.1356 8.88 61.7996 9.024V17.592H58.7036V6.816C59.6396 6.336 61.2476 6 62.8076 6C63.4796 6.072 65.3996 6.336L64.7516 9.144Z" fill="black" />
      </svg>
             </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Best Soft Shopping For You</h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Everything you need to sell online — products, orders, and customers in one place
            </p> */}
             
            
{/* <div style={{ height: '600px', position: 'relative' }}>
  <Carousel
    width={500}
    autoplay
    autoplayDelay={1500}
    loop
  />
</div> */}
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
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
    
    </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-6 md:p-12">
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="w-full max-w-md flex flex-col gap-5">
              
              <div className="text-center lg:text-left mb-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
                <p className="text-gray-500">Sign up to get started!</p>
              </div>

               {/* Username Field */}
              <div className="form-control">
                <label className="label hidden">
                  <span className="label-text">Username</span>
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiOutlineUser className="text-gray-400 text-xl" />
                    </div>
                    <Field 
                        className="input w-full pl-10 bg-[#f5f6f1] border-none focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-xl h-12 text-gray-700 placeholder-gray-400" 
                      name="username" 
                      type="text" 
                      autoComplete="username" 
                        placeholder="Enter your username" 
                    />
                </div>
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1 ml-1" />
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
                         autoComplete="new-password"
                        placeholder="Enter your password" 
                    />
                  </div>
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1 ml-1" />
              </div>

              {/* Register Button */}
              <button 
                type="submit" 
                className="btn btn-warning w-full rounded-xl text-white font-bold text-lg shadow-md hover:shadow-lg transition-all" 
                disabled={isSubmitting}
              >
                {isSubmitting ? <span className="loading loading-spinner"></span> : "Sign Up"}
              </button>
              
               {/* Divider */}
               <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">Or sign up with</span>
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

              {/* Login Link */}
              <div className="text-center mt-4">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-orange-500 font-bold hover:underline">
                    Log in
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

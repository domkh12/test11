import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchRegister } from "../../redux/feature/verify-user/userRegisterSlice";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Box, CircularProgress } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion"; // Import framer-motion
import { FaTimes } from "react-icons/fa"; // Import FaTimes for the X button
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      "Password must be at least 8 characters long, include at least one uppercase letter, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export function ComponentRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.userRegister);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("isDarkMode") === "true";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false, // for toggling password visibility
      showConPassword: false, // for toggling confirm password visibility
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { email, password, confirmPassword, username } = values;

      dispatch(fetchRegister({ email, password, confirmPassword, username }))
        .unwrap()
        .then(() => {
          navigate("/register/verify", { state: { email } });
        })
        .catch((err) => {
          toast.error(" Account already exists");
        });
    },
  });

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sm:px-3 sm-max:px-3 flex sm:flex-col-reverse sm-max:flex-col-reverse lg:flex-row w-[100vw] h-[100vh] lg:p-10 justify-center items-center xl:gap-10 overflow-auto ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-black"
      }`}
    >
      <button
        onClick={handleHomeClick}
        className={`absolute top-5 left-5 w-10 h-10 flex justify-center items-center rounded-full shadow-lg ${
          isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
        } hover:bg-primary-hover hover:text-white transition duration-300 ease-in-out`}
        aria-label="Go to homepage"
      >
        <FaTimes />
      </button>
      <section
        className={`flex justify-center items-center sm:overflow-auto sm-max:overflow-auto lg:overflow-hidden sm:pt-10 sm-max:pt-10 lg:pt-0 sm:items-center sm-max:items-center xl:items-start xl:justify-center gap-5 flex-col xl:w-[50%] sm:rounded-tl-md sm-max:rounded-tl-md sm:rounded-tr-md sm-max:rounded-tr-md sm:h-auto sm-max:h-auto xl:px-10 2xl:px-20 ${
          isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-black"
        }`}
      >
        <Link
          to="/"
          className="flex sm:justify-center sm-max:justify-center xl:justify-start items-center gap-4"
        >
          <img
            className="xl:w-[8%] sm-max:w-[7%] sm:w-[7%]"
            src="/logoHomepage.png"
            alt="logo"
          />
          <h1
            className={`xl:text-2xl font-semibold ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            } sm:text-lg sm-max:text-lg`}
          >
            Showcase
          </h1>
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center sm-max:justify-center sm:items-center sm-max:items-center lg:item-start xl:justify-start xl:items-start lg:justify-start 2xl:items-start">
          <h2
            className={`xl:text-4xl 2xl:text-5xl sm:text-3xl sm-max:text-3xl font-bold leading-[60px] ${
              isDarkMode ? "text-gray-100" : "text-black"
            }`}
          >
            Join Showcase Today
          </h2>
          <p
            className={`${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            } sm-max:text-center`}
          >
            Create and customize your beautiful portfolio easily.
          </p>
        </div>
        <form
          className="w-full sm:px-24 sm-max:px-4 xl:p-0 overflow-y-auto"
          onSubmit={formik.handleSubmit}
        >
          <div className="w-full flex flex-col gap-1">
            <div className="my-[10px] block">
              <label
                htmlFor="username"
                className={`mt-9 ${
                  isDarkMode ? "text-gray-400" : "text-neutral-600"
                } max-md:max-w-full`}
              >
                Username
              </label>
              <input
                className={`w-full mt-2.5 h-12 rounded-md border border-solid ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-400"
                    : "bg-white text-neutral-600"
                }`}
                name="username"
                type="text"
                required
                placeholder="Enter your username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username ? (
                <p className="text-red-500">{formik.errors.username}</p>
              ) : null}
            </div>

            <div className="my-[10px] block">
              <label
                htmlFor="email"
                className={`mt-9 ${
                  isDarkMode ? "text-gray-400" : "text-neutral-600"
                } max-md:max-w-full`}
              >
                Your email
              </label>

              <input
                className={`w-full mt-2.5 h-12 rounded-md border border-solid ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-400"
                    : "bg-white text-neutral-600"
                }`}
                id="email"
                name="email"
                type="email"
                placeholder="name@gmail.com"
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500">{formik.errors.email}</p>
              ) : null}
            </div>

            <div className="my-[10px] block relative">
              <label
                htmlFor="password"
                className={`mt-9 ${
                  isDarkMode ? "text-gray-400" : "text-neutral-600"
                } max-md:max-w-full`}
              >
                Your password
              </label>

              <input
                className={`w-full mt-2.5 h-12 rounded-md border border-solid ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-400"
                    : "bg-white text-neutral-600"
                }`}
                id="password"
                name="password"
                type={formik.values.showPassword ? "text" : "password"}
                required
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <button
                type="button"
                className="absolute top-11 right-2 flex justify-center items-center gap-1"
                onClick={() =>
                  formik.setFieldValue(
                    "showPassword",
                    !formik.values.showPassword
                  )
                }
              >
                {formik.values.showPassword ? (
                  <FiEyeOff
                    className={`w-6 h-6 ${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  />
                ) : (
                  <FiEye
                    className={`w-6 h-6 ${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  />
                )}
              </button>
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-500">{formik.errors.password}</p>
              ) : null}
            </div>

            <div className="my-[10px] block relative">
              <label
                htmlFor="confirmPassword"
                className={`mt-9 ${
                  isDarkMode ? "text-gray-400" : "text-neutral-600"
                } max-md:max-w-full`}
              >
                Confirm password
              </label>

              <input
                className={`w-full mt-2.5 h-12 rounded-md border border-solid ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-400"
                    : "bg-white text-neutral-600"
                }`}
                id="confirmPassword"
                name="confirmPassword"
                type={formik.values.showConPassword ? "text" : "password"}
                required
                placeholder="Enter your password again"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <button
                type="button"
                className="absolute top-11 right-2 flex justify-center items-center gap-1"
                onClick={() =>
                  formik.setFieldValue(
                    "showConPassword",
                    !formik.values.showConPassword
                  )
                }
              >
                {formik.values.showConPassword ? (
                  <FiEyeOff
                    className={`w-6 h-6 ${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  />
                ) : (
                  <FiEye
                    className={`w-6 h-6 ${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  />
                )}
              </button>
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <p className="text-red-500">{formik.errors.confirmPassword}</p>
              ) : null}
            </div>

            <button
              className="flex items-center justify-center px-16 h-12 mt-4 max-w-full text-white whitespace-nowrap bg-primary hover:bg-primary-hover rounded-md sm:w-full sm-max:w-full max-md:px-5"
              type="submit"
              color="purple"
              disabled={isLoading}
            >
              Create an Account
              {isLoading && (
                <Box ml={2}>
                  <CircularProgress size={24} color="inherit" />
                </Box>
              )}
            </button>
            <p className="flex gap-2 mt-4">
              Already have an account?
              <button
                onClick={handleLoginClick}
                className="text-indigo-600 cursor-pointer hover:underline"
              >
                login
              </button>
            </p>
          </div>
        </form>
      </section>
      <section
        className={`lg:h-full flex justify-center items-center lg:rounded-md lg:w-[50%] lg-max:hidden `}
      >
        <img
          src="/img-register/photo_2024-07-26_14-36-46-topaz-enhance-6x-removebg (1).png"
          alt=""
          className="lg:w-[600px] xl:w-[700px]"
        />
      </section>
      <ToastContainer />
    </motion.div>
  );
}

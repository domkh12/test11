import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp, resendOtp } from "../../redux/feature//verify-user/OtpSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function OtpVerification() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;
  const { isLoading, error } = useSelector((state) => state.otp);
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("isDarkMode") === "true";
  });
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleOtpChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;

    if (value && index < otpValues.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    setOtpValues(newOtpValues);
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    if (!email) {
      console.error("Email is missing. Cannot verify OTP.");
      return;
    }
    const otp_code = otpValues.join("");
    dispatch(verifyOtp({ email, otp_code }))
      .unwrap()
      .then(() => {
        toast.success("OTP verified successfully");
        navigate("/login");
      })
      .catch((err) => {
        console.error("OTP verification error:", err);
        toast.error("Failed to verify OTP");
      });
  };

  const handleResend = () => {
    if (canResend) {
      dispatch(resendOtp({ email }))
        .unwrap()
        .then(() => {
          toast.success("OTP resent successfully");
          setTimer(60);
          setCanResend(false);
        })
        .catch((err) => {
          console.error("Resend OTP error:", err);
          toast.error("Failed to resend OTP");
        });
    }
  };

  return (
    <main className={`flex flex-col items-center justify-center h-screen bg-cover bg-center ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-black"}`}>
      <ToastContainer />
      <section className="flex sm:flex-col lg:flex-row lg:gap-40 sm-max:flex-col items-center justify-center sm:gap-2 sm-max:gap-2 w-full bg-white dark:bg-gray-900">
        {/* img */}
        <div>
          <img
            src="/otp_img/emailverify.png"
            alt="img email"
            className="sm:w-40 sm-max:w-40 sm:h-40 sm-max:h-40 lg:w-60 lg:h-60"
          />
        </div>
        {/* form verify */}
        <div className="flex items-center flex-col justify-center">
          <div className="w-96 flex flex-col justify-center items-center">
            <div className="top-0 left-0 p-4 flex lg-max:hidden items-center gap-3">
              <img
                src="/logoHomepage.png"
                alt="logo"
                className="h-10 w-10"
              />
              <h2 className="text-2xl font-semibold">Showcase</h2>
            </div>
            <p className="mt-5 text-base text-center">
              A verification code has been sent to{" "}
              <span className="font-bold text-primary">{email}</span>. Please
              enter the code to continue.
            </p>
          </div>
          <form className="flex gap-5 self-stretch mt-8 text-2xl font-bold whitespace-nowrap text-zinc-800 dark:text-gray-100 max-md:flex-wrap max-md:max-w-full">
            {otpValues.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className={`justify-center items-start text-xl font-bold text-center ${
                  value
                    ? "bg-white dark:bg-gray-800 border-primary"
                    : "bg-gray-50 dark:bg-gray-700 border-slate-200 dark:border-slate-600"
                } rounded-lg border border-solid h-[60px] w-[60px] max-md:px-5`}
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputRefs.current[index] = el)}
                aria-label={`OTP digit ${index + 1}`}
              />
            ))}
          </form>
          <div className="flex justify-center mt-12 max-w-full text-base font-medium text-center text-white whitespace-nowrap bg-white dark:bg-gray-900 w-[219px] max-md:mt-10">
            <button
              className="flex items-center justify-center bg-primary px-16 py-3 bg-violet-600 rounded-lg max-md:px-5"
              onClick={handleVerify}
              disabled={isLoading}
            >
              Verify
              {isLoading && (
                <Box ml={2}>
                  <CircularProgress size={24} color="inherit" />
                </Box>
              )}
            </button>
          </div>
          <p className="mt-5 text-base font-semibold tracking-normal leading-5 text-center max-md:mt-10">
            <span className="font-medium">Didn't receive the code? </span>
            <button
              className="font-bold text-teal-400 dark:text-secondary"
              onClick={handleResend}
              disabled={!canResend}
            >
              {canResend ? "Resend" : `Resend in ${timer}s`}
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}

export default OtpVerification;

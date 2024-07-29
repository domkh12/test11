import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillCameraFill } from "react-icons/bs";
import { useDropzone } from "react-dropzone";
import {
  fetchProfile,
  updateProfile,
} from "../../redux/feature/user/UserSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import ContentLoader from "react-content-loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAccessToken } from "../../lib/secureLocalStorage";
import { ClipLoader } from "react-spinners";
import { Card, Dropdown } from "flowbite-react";
import { MdModeEditOutline } from "react-icons/md";
import { List, Avatar } from "flowbite-react";
const MyLoader = () => (
  <ContentLoader viewBox="0 0 380 70">
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
);

const validationSchema = Yup.object({
  first_name: Yup.string()
    .required("First Name is required")
    .matches(/^[^\d]/, "First Name cannot start with a number"),
  last_name: Yup.string()
    .required("Last Name is required")
    .matches(/^[^\d]/, "Last Name cannot start with a number"),
});

function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile, status, error } = useSelector((state) => state.user);
  const [avatar, setAvatar] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setAvatar(profile.avatar);
    }
  }, [profile]);

  const validateFile = (file) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    const maxSize = 2 * 1024 * 1024;

    if (!allowedTypes.includes(file.type)) {
      toast.error("Only JPG, PNG, and GIF allowed.");
      return false;
    }

    if (file.size > maxSize) {
      toast.error("File size exceeds 2MB limit.");
      return false;
    }

    return true;
  };

  const uploadFile = async (file) => {
    if (!file) {
      toast.error("Select a file to upload.");
      return;
    }

    if (!validateFile(file)) return;

    setIsUploading(true);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getAccessToken()}`);

    const formdata = new FormData();
    formdata.append("file", file, file.name);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}upload/`,
        requestOptions
      );
      if (!response.ok) {
        throw new Error("File upload failed");
      }
      const result = await response.json();
      setAvatar(result.url);
    } catch (error) {
      toast.error(`Upload error: ${error.toString()}`);
    } finally {
      setIsUploading(false);
    }
  };

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles[0]) {
      const file = acceptedFiles[0];
      uploadFile(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".png", ".gif"] },
  });

  const handleSave = async (values, { setSubmitting }) => {
    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }
    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      await dispatch(updateProfile(formData)).unwrap();
      toast.success("Profile updated!");
      dispatch(fetchProfile());
    } catch (err) {
      toast.error(`Update failed: ${err}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full flex justify-center gap-8 items-start h-auto bg-gray-100 dark:bg-gray-800">
      <div className="w-1/3 ">
        <Card className="max-w-lg border-2">
          <div className="flex justify-end px-4 pt-4 text-2xl ">
            <MdModeEditOutline />
          </div>
          <div className="flex flex-col items-center pb-10">
            <div className="relative group" {...getRootProps()}>
              <input {...getInputProps()} />
              {isUploading ? (
                <div className="w-32 h-32 rounded-full bg-gray-300 flex justify-center items-center">
                  <ClipLoader color="#ffffff" size={24} />
                </div>
              ) : isDragActive ? (
                <div className="w-32 h-32 rounded-full bg-gray-300 flex justify-center items-center">
                  <p>Drop image here...</p>
                </div>
              ) : (
                <img
                  className="w-32 h-32 rounded-full object-cover"
                  src={
                    avatar ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  }
                  alt="Profile"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                <BsFillCameraFill className="text-white" />
              </div>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
              {profile ? profile.username : ""}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {profile ? profile.email : ""}
            </p>
          </div>
        </Card>
        <List
          unstyled
          className="max-w-lg h-[418px] divide-y px-4 pt-4 mt-7 drop-shadow-md dark:bg-gray-800 bg-white rounded-lg border-2"
        >
          <List.Item className="pb-3 sm:pb-4">
            <div className="flex items-center justify-between space-x-4 rtl:space-x-reverse">
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                Social Media Link
              </div>
            </div>
          </List.Item>
          <List.Item className="pb-3 sm:pb-4">
            <div className="flex items-center justify-between space-x-4 rtl:space-x-reverse">
              <Avatar
                img="data:image/png;base64,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"
                alt="Neil image"
                rounded
                size="sm"
              />
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                Twitter
              </div>
            </div>
          </List.Item>
          <List.Item className="pb-3 sm:pb-4">
            <div className="flex items-center justify-between space-x-4 rtl:space-x-reverse">
              <Avatar
                img="data:image/png;base64,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"
                alt="Neil image"
                rounded
                size="sm"
              />
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                Linkedin
              </div>
            </div>
          </List.Item>
          <List.Item className="pb-3 sm:pb-4">
            <div className="flex items-center justify-between space-x-4 rtl:space-x-reverse">
              <Avatar
                img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBIPEg8QFRMNFRUVFRIRDxARFQ4RFREXFhYRFRYYHSggGSYlGxUVITEhJSk3Li8uFyAzODMsQyktLisBCgoKDg0OGxAQGi4mHyU2LS0rLS0tLS0uKy0tKystLS8rLystLS0vLS0tLSsrKy0tLS0rLS4wLS0vLS0tLS0uLv/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAABwUGAgMEAf/EAEkQAAIBAgEGCQYLBgUFAAAAAAABAgMRBAUGEiExQQcTIlFhcXKBkTJCUqGywhQjJTNTkqKxs8HRFTQ1c4KTJENiY9IWROHi8P/EABoBAQADAQEBAAAAAAAAAAAAAAAEBQYDAgH/xAA1EQEAAQIDBAcIAgMAAwAAAAAAAQIDBAUREiExQVFxgbHB0fATIjI0YZGh4TNCFBXxIyRi/9oADAMBAAIRAxEAPwC4gAAAAAAAAAGHyhnNhKN06qnJebS5b6rrUu9ky1gL9zfFOkfXd+0C/meGtbpq1nojf+vvLXsZn1N6qVCK6aknL7MbfeWNvKKf71fb14Ku7nlU/wAdH38o82JxGdONn/naK5oRhH12v6yXRl+Hp/rr1oNeaYqv++nVEf8AWPqZRry8qvWfXVm/zJFNi1Twpj7Qi1Yi9Vxrq+8uiVWT2yb622dIpiOEOc1TPGSM2tja6m0JiJfImY4O6nj68fJr1l1VZr8znNm3PGmPtDpTfu08K5+8vdQzmxsNleTXNNQnfvav6zhXgMPV/X7bkmjMsVRwr169J/bL4TPqqtVWjCXTBuD8HdP1ES5lFE/BVMde/wAk61nlyP5KYnq3ebPYHOzB1dTm6be6qtFfW8n1kC7l1+jhGvV5cVnZzbDXOM7M/Xd+eH5ZyMk1dNNPY1rTIMxpulYxMTvh9Pj6AAAAAAAAAAAAAAAAPjdtfMBrWWM8qFK8KK42a3p2pxfa87u8Szw+WXK99fux+fXWqMVm9q37tv3p/H359jTMp5cxOIvxlR6L8yPJh4Lb33LmzhLVn4Y39PP11KDEY2/f+Ord0Ruj116scSUUAAAAAAAAAAPZk/KlfDu9KrKK9HbF9cXq79pxu4e3dj3417/u72MTdsT/AOOrT6cvs3HI+etOdoYiPFy9ON3B9a2x9a6SmxGVVU77U6x0c/2vsNnNFXu3o0np5fru+ra6dSMkpRaalrTTTTXOmiqmJidJXVNUVRrHByPj6AAAAAAAAAAAAB4Mr5Xo4WGnUlt8mC1ym+ZL89h3w+GuX6tKI7eUI2JxVvD07Vc9Uc56k7y5nHXxTcW9Cnupxe3tvzvu6DRYbA27G+N9XT5dDL4vMLuI3Tup6I8enuYa5MQS4C4C4C4C4C4C4C4C4C4C4C4C4GSyNlyvhZXhK8G+VTldxl+j6V6yNiMJbvx70b+nmlYXGXcPPuTu6OX6UXIeXaOLjyHoziuVTk1pR6VzrpXqM7icJcsT73DpanCY23iY93dPOObKkVMAAAAAAAAAADB5yZx08JHRVpVpLkwvqivSnzLo2v1qdg8FVfnWd1PT5K/HY+nDRpG+qeEeM+t6aY3GVK03UqScpS3vcuZLcug0lu1Tbp2aI0hlLt2u7VNdc6y6bnRzLgLgLgLgLgLgLgLgLgLgLgLgLgLgLgc6FeUJKcJOMoO6knZpnmqmKo2ao1h6oqqoqiqmdJhRc1s6I4m1KraNZbN0a1t8eZ868OjO43ATZ9+jfT3eulqMBmUX/cr3Vfier6/RspWrUAAAAAAAAwWdOcEcJDRjZ1qi5Ed0V6cuj7/G07BYOcRVrPwxx8oV+Px0YanSN9U8I8Z9b0wr1pVJOc5OUpu7k9rZpqaYpiKaY0iGTrrqrqmqqdZlwPTyAAAAAAAAAAAAAAAAAAAB9jJppptNO6admmtjTExE7pImYnWFHzQzk+EriarSrQWp7OOit66VvXfz2zmPwPsZ26Ph7v10NRluYe3j2dfxR+f30/fq2crFsAAAAABj8uZVhhaMqste6Mb66k3siv8A7Ymd8Nh6r9yKI7fpCPisTTh7c11dkdMpLjsZOtUlVqSvKbu3zcyXMlsNZbt026Yop4Qxt27VdrmuvjLoPbmAAAAAAAAAAHKnCUmoxTlKWyMU5N9SW0TMRGs8H2KZqnSI1lncFmfjaqu4Rpp/Sz0X4JNrvRAuZlh6N2uvV6hYWsqxNca6RHXPlqytLg+n52KiuzScvW5IiznFPKj8/pMpyOrnX+P27Xwfc2Lf9n/3PP8Auf8A4/P6epyOOVz8ft01OD+p5uJg+ulKPvM9xnFPOifv+nicjr5Vx9v28dbMbGLY6MuqpJP1xX3nanNrE8dY7P241ZNiI4TE9s+TB5SybWw01CrDRlJaSWlGV43avqfOmTbN+i9TtUTrCvv4e5Yq2bkaS8h1cQABzo1ZQkpxk1KDTUltTW8+VUxVExPB6pqmmYqp3TCrZsZbji6OlqVSnZVIrc90l0P9VuMrjMLOHuacp4evo1+BxcYi3r/aOMeuUswRE0AAAPjdtb3eoCT51ZaeLrtp/FUrxprnW+ffbwsavA4X2FvSfinj5djIY/FziLusfDHDz7e5hbkxBLgLgLgLgLgLgLgLgLgZ3NvNurjHpXcKMXrnbXJ74wW/r2Lp2EHGY6jDxpxq6PNPwWX14ideFPT5KRkrJFDDR0aVNK+2T1yn2pbX9xnb+IuXp1rnyaexhrViNLcec9r3HB3AAAABOOEn96p/yV+JM0WUfwz1+EM1nX81PV4y1O5aqcuAuAuBkMhZVlhK8ayu1snH04PauveulEfE4eL9uaJ7PpKThcTVh7kVxw5x0wr9CtGpGM4tOM0pJremrpmSqpmmZpnjDZU1RVTFVPCXYeXoAAapwgZX4qgsPF8vE3T/ANNJeV47Oq5aZXh9u57SeFPf+uKpzbE+ztezjjV3c/vwTW5o2ZLgLgLgLgLgLgLgLgLgZfNjIzxldQ1qnDlVJLdHdFdL2eL3EXGYmMPb2uc8PX0S8FhZxF3Z5Rx9fVWqFGNOMYQioxgklFbEluMpVVNUzVVxlr6aYpiKaY3Q7Dy9AAAAAATfhK/eqf8AJX4kzRZR/DV1+EM1nX81PV4y1K5aqguAuAuAuBvvBzle6lhJPXC86d/Rvyodzd+98xRZth9Ji9HVPgv8nxOsTZq5b48YbwUq9ADAjWcWU3icTUq35N9GHRTjqj4633mvwlj2NqKOfPr9bmNxl/296qvlwjqj1qxtySilwFwFwFwFwFwFwFwFwKvmPk1UMJCTXLxHxkn0SXJXdG3e2ZbMr/tL8xyjd5/lrMsseysRPOrfPh+GwEBYAAAAAAAJtwl/vVP+SvxJmiyf+Grr8IZvOf5qerxlqNy2U5cBcBcBcD0ZPxsqFWFaHlUpKVvSW+PerrvOd23F2iaKubpauzariunjC14avGpCNSLvGpFST501dGNrpmiqaZ4w21FUV0xVHCXYeXpg89MocRg6rTtKr8XHdrnqbXVHSfcTcvs+1v0xPCN89n7Qcxveyw9UxxndHb+kiNWyQAAAAAAAAAAd2EocZUp0vpZxh9aSj+Z5rq2KZq6Imfs926NuuKemYj7rlCKSSSskrJcyRipnWdZbeI03Pp8fQABwq1Ywi5ykoxgm3JuyiltbZ9ppmqdI4vlVUUxrPBpOU+EKKbjh6Okl/mVG4p9KitdutourOTzMa3KtPpHmpb2cxE6WqdfrO78f8Yp5/wCN9DD/ANup/wAyT/qLHTP3jyRP9xiOin7T5n/X+N9DD/26n/M+/wCosdM/ePI/3GI6KftPmwuW8s1cZONSqoJwjorQi0rXb3t85Mw+GosUzTRr070LE4mvEVRVXpu3bmOO6OAAAAABTuDnH8ZhXSb5WGlb+iXKj69Jf0mbzazsXtuP7d8eoabKL23Z2J40908PGG1lWtU94UMZedCgn5KdSS6ZPRj90/Evsmt+7VX2eM+Cgzm571Nvt8I8Wjl2pAAAAAAAAAAAymasNLG4Zf7if1bv8iLjZ0w9fUlYGNcRR1rMZBsAAAA0vhNx8oUaVBO3HycpdMaduS/6pJ/0lxk9qKq6q55cO1TZzdmm3Tbjnx7E5NCzwAAAAAAAAAAbTwc4zQxnFt6sRBq3+qPKT8FPxKvNre1Y2uie/d5LTKLmzf2emO7f5qiZppkhz5xPGY+tr1U9GC6NGCv9pyNXl1Gzhqfrv/LJ5lXtYmr6aR+GBuTkEuAuAuAuAuAuAuAuAuBmM0H/AI7D9v3WRMf8vX1JmA+Zo9cpWQyLXAAABPOFP5zD9mp98S/yb4a+zxUGdfFR2+DRrl0pC4C4C4C4C4C4C4C4C4HuyDieKxVCpe2jVhfsuSUvU2cMTRt2a6fpLvha9i9RV9YW4xrZoblirp4mvP0qtR+NRm0sU7NqmPpHcxmInW7XP1nveO52cS4C4C4C4C4C4C4C4C4GYzPf+Pw3b91kPH/L19SZgPmaPXKVmMi1oAAATrhU+cw3Zqe1Ev8AJfhr7PFQ5z8VHb4NGuXSkLn0LgLgLgLgLgLgLgLgG/UBY/29EyP+LLX/AORCO1Z3lJ+k2/F3NbEaRoyVU6zMuFz6+FwFwFwFwFwFwGkHx80lzjQNJc40GZzOl/j8N2/dZEx/y1fUmYD5mj1ylaDINaAAAE54Vn8ZhuzU9qJf5L8NfZ4qHOfio7fBomkucu9FIaS5xoGkucaD7cPpcBcBcBcBcBcAw+Mz+1ZekQ/8eE//ACZYaorNrmbXgyZE6xqhTGk6ONw+FwFwFwFwFwFwKvwe4enLAU24Qb0qmtxTfzjMxmldUYmdJ6O5p8spicPGsdPe2T4HS+ip/Uj+hX+0r6ZT9inoPgdL6Kn9SP6D2lfTJsU9DlHDU07qnBNb1GKaPk11Txk2aY5O08vQAAAddSjCXlQi7elFO3ieoqmOEvk0xPFw+B0voqf1I/offaV9MvmxT0HwOl9FT+pH9B7Svpk2Keg+B0voqf1I/oPaV9MmxT0Ijlusp4mvJWtKrO1lZaOm0vUkbHD07NqmJ6I7mPxFW1eqn6y8Vzs4lwFwFwFwFwFz6Mh+z5cxH9tCT/j1OjK0NDEV4ehVqLwqNHuxO1apn6R3PF+NLtUfWe95LnVyLgLgLgLgLgLgV7g5/h9PtVPxGZXNfmZ7O5qMs+Wp7e9sxXJ4AAAAAAAAAAdGOrqnSqVHspQlLujFv8j3bp264p6Z0ea6tmmap5IEmbhii4C4C4C4C4C4BsCu/wDTvQZX/Lar/GT3PfD8XlDEK2qUlNdOnBSb8Wy+y+vaw1E9n2UWYUbOIq+7B3JiGXAXAXAXAXAXAr3Bx/D6faqfiMyua/Mz2dzT5Z8tT297ZyuTwAAAAAAAAAAwee+I4vJ+IfpQ0P7klD7pE3L6NrE0R2/beiY+vZw9U9n33Itc1zKFwFwFwFwFwFwPZkbD8biaFK1+MqwT6nNX9Vzlfr2LVVXREuuHo27tNP1heTEtimPCvg9GvRrrZVg4PtQldeKn9k0WTXNbdVHROv3/AOKHN7eldNfTu+3/AFoxdKcAAAAAABYODf8Ah9PtVPxGZTNfmZ7O5p8t+Xp7e9s5XJ4AAAAAAAAAAabwp4jRwcIfS1Yp9mMZS+9RLbJ6Nb8z0QrM2q0sxHTKVGmZwAAAAAABtPBtg+Mx0Z7sPCU+i7Wgl9pvuKzNbmxh5jpmI8fBY5Xb2r+vRv8ABXjLNK1nhEyfx2BnJLlYZqquqN1P7Lk+4scrvezxERPCd3l+UHMbXtLE/Tf67EcNWzAAAAAAAD40gGiuZH3UNFcyGozeZSX7Qw2rz/ckQ8wn/wBavqS8B8xT65LeY5qgAAAmnC4vjMN2antQNDknw19nio8440dvg0DRXMi81UxormQ1BI+D6AAAAAAABUuCvJ+hh6mIa14ido9indX+s5+Bm85vbV2Lccu+f1o0GU2tm3NfT3R6lu5TrVxqQUk4tXUk0096e1H2JmJ1h8mNdyC5eya8LiauHd/i5PRb86D1wl9VrvubXDXovWqa459/NksRZm1cmj1o8Fzs4lwFwFwFwFwFwFwFwM3mU/lDDdv3JETMPlq+rxS8B8xT65LgY5qQAAAmnC785huzU9qBock+Gvs8VJm/Gjt8E/uXamLgLgLgLgLgLgLgLgduEw86tSFKCvKrJRiumTsrnmuumimaquEPVFE11RTHGV9ybg40KNOhHyaMVFdNltfXt7zE3bk3K5rnm19uiKKIpjk9JzewDQuFPIunTjjILlUeRUtvpt8mXdJ/a6C6yfE7NU2Z5746/wBqnNMPtUxcjjHHqS+5o1CXAXAXAXAXAXAXAXAzmZL+UMN2/ckQ8w+Wr6vFLwPzFPrkuJjmpAAACZ8L3zmF7NT2oGhyT4a+zxUmb8aO3wT65eKYuAuAuAuAuAuAuAuBv/BZkXTqSxs1yaV4U775tcqXcnb+p8xSZxidKYsxz3z1clxlWH1mbs8t0KcZ1eAADhXoxnGUJRTjNOMovZKLVmn3H2mqaZiY4w+TEVRpKFZ0ZEngsTKi7uD5VOb8+m9netj6V1GzwmJjEWorjjz62VxWHmxcmnlyYi5JRy4C4C4C4C4C4C4GczIfyhhu37kiHmHy1fV4peB+Yp9clzMc1AAAATLhf+cwvZqe1A0OSfDX2eKkzfjR2+Ce3LxTlwFwFwFwFwFwFwPZkjJ1TFVoUKa5VR2vuhHzpvoSuzlfvU2aJrq4Q6WbVV2uKKV5yXgKeGo06FNWjSjZc755Ppbu31mLvXartc11cZay3bpt0RRTwh6jm9gAABgc8c3o47DuGpVad5UpvdK2uL6JWSfc9xNwOLnD3NeU8fX0RcXhov0ac44IhiKM6c5U5xcZU24yi9sZJ60zX01RVEVU8JZiqmaZ2Z4uu56fC4C4C4C4C4C4GdzH/iOF7fuSIWYfLV9Xil4H5in1yXQxzTgAABMeGD5zC9mp7UDQ5J8NfZ4qXNuNHb4J5cvVOXAXAXAXAXAXA+q71La9y39B8IjVZMwM2PgdLjakV8Irrlf7UNqpr1N9PUZXMsb7evZp+GPzPT5NHgcJ7Gnaq+Kfx9G2FYngAAAAAaXn/mh8Ki8TQj8fBcqK/wC4gt3aW579nNa2y3H+xn2dfwz+P1/1XY7B+1jbo+LvSKSabTTTWpp6mmtqaNRxZ+Y03S+XD4XAXAXAXAXAzmY/8Rwvb9yRDzD5avq8UvA/z0+uS7GNacAAAJhwxfOYXs1PagaHI/hr7PFS5txo7fBPLl6py4C4C4C4C4C4FN4O8znDRxuIjyttGnJeRzVZLn5lu27bWz2Z5hrrZtzu5z4R4rvAYLZ0uXOPKPFRSiW4AAAAAAABpGfOZCxV8Th0o19soalHEfkpdOx7+ct8vzKbP/jufD3fpXY3Axd9+j4u9Ja1OUJOE4yjKDtKMk04tbU09hpqaoqjWOCgqpmmdJcLn18LgLgLgLgZ3MZ/KOF7fuSIeYfLV9Xil4H+eldzGtMAAAEv4Y/nML2avtQNFkfw19nips2409vgndy9U5c+BcBcBcD6tepbXu53zB9iNVNzFzE0XHFYuHKWunQkvI5p1Fz80d2/XqWfzDM9dbdmd3OfLzXWCwGz79yN/KPNRihWwAAAAAAAAAAa5nXmhh8fHSfxdaK5NWK280Zrzl61uZPwePuYadONPR5dCJicJRfjfunpR/LuQsTgqnF16dr+TNXcKnTGX5beg1GHxNq/TtUT2c4UF7D3LM6VQxlyQ4FwFwFwM7mK/lHC9v3JEPMPlq+rxS8D/PSvJjGmAAACXcMnzmF7NX2oGiyP4a+zxU2bcae3wTq5eqcuAuAuB7MlZMr4qoqVGnKcnttsivSk9kV0s5Xr1uzTtVzpDras13atmmFczPzHo4K1WrapiPS8yj0U0/aevqMxjcyrv+7Tup/M9fkvsLgabPvTvq9cG3FYnAAAAAAAAAAAAAdGNwdKtB0qtOM4S2xnFNPp/wDJ7ouVW6tqmdJeaqKao0qjWE5zj4MnrqYOd9/EVJa+qE390vEvcLnP9b0dseMeX2VN/LOdr7J7j8BWw8+LrUp05LdOLV1zrc10ovLd2i5TtUTrCruWq7c6VRo81z25lwM9mI/lLC9v3JEPMflq+rxS8D/PSvRjGlAAACW8MvzmF7FX2oGiyP4a+zxU2a/17fBObl6qC4HbhcPUqzVOnCU5y2RhFyk+5HmuumiNqqdIeqaKq50pjVvubvBnVnaeLnxcfooNSqPtS2R7r9xTYnOaKfdsxrPTPBaWMsmd9ydPopWS8mUMLTVKjSjCK3RWuT55PbJ9LKC7euXatqudZW9u3RbjSmNHsOT2AAAAAAAAAAAAAAAAPPjcFRrwdOrThUi/NnFSXXrPdu5XbnaonSfo81UU1RpVGrTMr8GGEqXlQqTot+a/jYeDekvrdxbWc5u07rkbX4ny/CBdy23VvpnRp+UuDnKNK7hCFaPPSmk7dMZ2fcrlpazfD18ZmOv9aoFzLr1PDe6sz8mYijlLC8bQrQ+Mfl0pxXkS3taz1jb1uvC17FUTu5T9XzCWq6L9O1EwuBkGhAAACZ8LeEq1q2FjSpVKkowqXjThKbV5RtdRWrY/A0GTXKaKK5rmI4cd3SqcyoqrmmKY14tcydwfZSrbaUaSe+tNR+zG8vFE67muGo4Tr1R/yESjL71XGNOtt2SOC3DwtLEVp1X6EFxUOpvXJ9zRWXs7uVbrdOnXvny7061llEb651/Ddcm5Lw+GjoUaMKa36EUnLpk9sutlTdvXLs611TKwot0URpTGj2HJ7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Z"
                alt="Neil image"
                rounded
                size="sm"
              />
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                Facebook
              </div>
            </div>
          </List.Item>
          <List.Item className="pb-3 sm:pb-4">
            <div className="flex items-center justify-between space-x-4 rtl:space-x-reverse">
              <Avatar
                img="data:image/png;base64,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"
                alt="Neil image"
                rounded
                size="sm"
              />
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                Google
              </div>
            </div>
          </List.Item>
        </List>
      </div>
      <div className="w-1/2 bg-white dark:bg-gray-800 border-2 shadow-md rounded-lg p-6">
        {status === "loading" && <MyLoader />}
        {status === "failed" && <p className="text-red-500">{error}</p>}
        {status === "succeeded" && profile && (
          <Formik
            initialValues={{
              first_name: profile.first_name || "",
              last_name: profile.last_name || "",
              gender: profile.gender || "",
              phone_number: profile.phone_number || "",
              dob: profile.dob || "",
              username: profile.username || "",
              address: profile.address || "",
              bio: profile.bio || "",
              facebook: profile.facebook || "",
              twitter: profile.twitter || "",
              instagram: profile.instagram || "",
              linkedin: profile.linkedin || "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSave}
          >
            {({ setFieldValue }) => (
              <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                    General Info
                  </h2>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    First Name
                  </label>
                  <Field
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="first_name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Last Name
                  </label>
                  <Field
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="last_name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Gender
                  </label>
                  <Field
                    as="select"
                    name="gender"
                    className="block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </Field>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Contact Number
                  </label>
                  <Field
                    type="text"
                    name="phone_number"
                    placeholder="Your Contact Number"
                    className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Date of Birth
                  </label>
                  <Field
                    type="date"
                    name="dob"
                    placeholder="Your Date of Birth"
                    className="date-input mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Username
                  </label>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Your Username"
                    className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Address
                  </label>
                  <Field
                    type="text"
                    name="address"
                    placeholder="Your Address"
                    className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Bio
                  </label>
                  <Field
                    as="textarea"
                    name="bio"
                    placeholder="Write something about yourself"
                    className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-1 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Facebook
                  </label>
                  <Field
                    type="url"
                    name="facebook"
                    placeholder="Your Facebook Profile Link"
                    className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-1 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Twitter
                  </label>
                  <Field
                    type="url"
                    name="twitter"
                    placeholder="Your Twitter Profile Link"
                    className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-1 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Instagram
                  </label>
                  <Field
                    type="url"
                    name="instagram"
                    placeholder="Your Instagram Profile Link"
                    className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-1 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    LinkedIn
                  </label>
                  <Field
                    type="url"
                    name="linkedin"
                    placeholder="Your LinkedIn Profile Link"
                    className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-1 md:col-span-2 flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => navigate("/dashboard")}
                    className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white rounded-md shadow-sm hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )}
        <ToastContainer />
      </div>
    </div>
  );
}

export default EditProfile;

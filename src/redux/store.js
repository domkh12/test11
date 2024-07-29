import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./feature/user/UserSlice";
import userRegisterSlice from "./feature//verify-user/userRegisterSlice";
import OtpSlice from "./feature//verify-user/OtpSlice";
import templateReducer from "./feature//websitetemplate/TemplateSlice";
import authReducer from "./authSlice/authSlice";
import workExperiencesReducer from "./feature//websitetemplate/WorkExperienceSlice";
import contactReducer from "./feature//websitetemplate/ContactSlice";
import blogReducer from "./feature//websitetemplate/BlogSlice";
import skillReducer from "./feature//websitetemplate/SkillSlice";
import serviceReducer from "./feature//websitetemplate/ServiceSlice";
import projectReducer from "./feature//websitetemplate/ProjectSlice";
import publicTemplatesReducer from "./feature/websitetemplate/publictemplate/publicTemplatesSlice";

export const store = configureStore({
  reducer: {
    user: useReducer,
    userRegister: userRegisterSlice,
    otp: OtpSlice,
    templates: templateReducer,
    auth: authReducer,
    contacts: contactReducer,
    blogs: blogReducer,
    skills: skillReducer,
    workExperiences: workExperiencesReducer,
    services: serviceReducer,
    projects: projectReducer,
    publicTemplates: publicTemplatesReducer,
  },
});

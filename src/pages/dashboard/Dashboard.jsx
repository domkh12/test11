import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../../components/dashboard/MainLayout";
import HomeDashboard from "../../components/dashboard/HomeDashboard";
import EditProfile from "../../components/profile/EditProfile";
import DeveloperTemplate from "../template/developerTemplate";
import TemplateList from "../../redux/feature/websitetemplate/TemplateList";

function Dashboard() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="/template" element={<TemplateList />} />
      </Routes>
    </MainLayout>
  );
}

export default Dashboard;

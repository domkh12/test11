import React from 'react'
import ButtonDashboardTemplate from '../../components/dashboardTemplate/ButtonDashboardTemplate'
import SearchDashboardTemplate from '../../components/dashboardTemplate/SearchDashboardTemplate'
import CardDashboardTemplate from '../../components/dashboardTemplate/CardDashboardTemplate'
import PageNoDashboardTemplate from '../../components/dashboardTemplate/PageNoDashboardTemplate'

function DashboardTemplate() {
  return (
    <>
      <div className=" pt-36 pl-44 pr-32 ">
        <div className="flex justify-between my-5">
          {/* <ButtonDashboardTemplate /> */}
          <ButtonDashboardTemplate/>
          {/* <SearchDashboardTemplate /> */}
          <SearchDashboardTemplate/>
        </div>

        {/* <CardDashboardTemplate /> */}
        <CardDashboardTemplate/>
        <div className="my-5 justify-center flex items-center">
          {/* <PageNoDashboardTemplate /> */}
          <PageNoDashboardTemplate/>
        </div>
      </div>
    </>
  )
}

export default DashboardTemplate
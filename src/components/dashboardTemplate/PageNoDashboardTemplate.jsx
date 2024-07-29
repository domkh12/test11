import React from "react";

const PageNoDashboardTemplate = () => {
  return (
    <>
      {/* <div>PageNoDashboardTemplate</div> */}

      <div className="flex items-center space-x-2">
      <button className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100">
        &lt; Back
      </button>
      <button className="px-4 py-2 border rounded text-white bg-[rgb(76,61,227)] hover:bg-[rgb(60,56,164)]">
        1
      </button>
      <button className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100">
        2
      </button>
      <button className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100">
        3
      </button>
      <button className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100">
        ...
      </button>
      <button className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100">
        10
      </button>
      <button className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100">
        Next &gt;
      </button>
    </div>
    </>
  );
};

export default PageNoDashboardTemplate;

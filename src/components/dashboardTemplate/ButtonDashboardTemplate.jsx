import React from "react";

const ButtonDashboardTemplate = () => {
  return (
    <>
      {/* <div>ButtonDashboardTemplate</div> */}

      <div className=" flex gap-2">
        <button
          type="button"
          class="text-black-700 hover:text-white border border-[rgb(76,61,227)] hover:bg-[rgb(76,61,227)] 
    font-regular rounded-md text-base px-9 py-1 text-center dark:border-[rgb(76,61,227)] dark:text-[rgb(76,61,227)] 
    dark:hover:text-white dark:hover:bg-[rgb(76,61,227)] transition duration-[400ms]"
        >
          All
        </button>
        <button
          type="button"
          class="text-black-700 hover:text-white border border-[rgb(76,61,227)] hover:bg-[rgb(76,61,227)] 
    font-regular rounded-md text-base px-8 py-1 text-center dark:border-[rgb(76,61,227)] dark:text-[rgb(76,61,227)] 
    dark:hover:text-white dark:hover:bg-[rgb(76,61,227)] transition duration-[400ms]"
        >
          Developer
        </button>
        <button
          type="button"
          class="text-black-700 hover:text-white border border-[rgb(76,61,227)] hover:bg-[rgb(76,61,227)] 
    font-regular rounded-md text-base px-8 py-1 text-center dark:border-[rgb(76,61,227)] dark:text-[rgb(76,61,227)] 
    dark:hover:text-white dark:hover:bg-[rgb(76,61,227)] transition duration-[400ms]"
        >
          Marketing
        </button>
        <button
          type="button"
          class="text-black-700 hover:text-white border border-[rgb(76,61,227)] hover:bg-[rgb(76,61,227)] 
    font-regular rounded-md text-base px-8 py-1 text-center dark:border-[rgb(76,61,227)] dark:text-[rgb(76,61,227)] 
    dark:hover:text-white dark:hover:bg-[rgb(76,61,227)] transition duration-[400ms]"
        >
          Photography
        </button>
        <button
          type="button"
          class="text-black-700 hover:text-white border border-[rgb(76,61,227)] hover:bg-[rgb(76,61,227)] 
    font-regular rounded-md text-base px-8 py-1 text-center dark:border-[rgb(76,61,227)] dark:text-[rgb(76,61,227)] 
    dark:hover:text-white dark:hover:bg-[rgb(76,61,227)] transition duration-[400ms]"
        >
          Business
        </button>
      </div>
    </>
  );
};

export default ButtonDashboardTemplate;

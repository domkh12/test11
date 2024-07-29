// import React from "react";

// export default function AboutComponent() {
//   return (
//     <div className="font-sans antialiased text-gray-800 dark:text-gray-100">
//       <section name="About" className="dark:bg-gray-900 py-16">
//         <main className="max-w-4xl mx-auto p-8">
//           <h1 className="text-center text-2xl font-bold mb-8 text-gray-700 dark:text-gray-100">
//             ABOUT MY WORK
//           </h1>

//           <section className="flex justify-center items-center mb-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
//               <div className="text-center md:text-left mb-8">
//                 <h2 className="text-4xl font-bold mb-2">Hello! I'm Namwoon</h2>
//                 <h3 className="text-2xl text-gray-500 italic mb-4 dark:text-gray-300">
//                   A Photographer
//                 </h3>
//                 <p>Want To Discuss!?</p>
//                 <a
//                   href="#"
//                   className="bg-yellow-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-orange-600 transition"
//                 >
//                   Let's Talk
//                 </a>
//               </div>

//               <div className="text-center md:text-right mb-8">
//                 <img
//                   src="https://p1.hiclipart.com/preview/359/957/100/face-icon-user-profile-user-account-avatar-icon-design-head-silhouette-neck-png-clipart.jpg"
//                   alt="Profile Picture"
//                   className="mx-auto rounded-full border-4 border-orange-500 w-40 h-40 md:w-52 md:h-52"
//                 />
//               </div>
//             </div>
//           </section>

//           <div className="text-center space-y-4 text-gray-600 dark:text-gray-300">
//             <p>
//               I've always loved observing the world around me. Photography allows me to capture the beauty I see in the world and share it with others.
//             </p>
//             <p>
//               I am currently exploring thoughts about ways that interior experiences inevitably become part of the exterior. This is as true with our own thoughts as it is with the interior experiences of social groups, historic movements, and momentous events. That which is unseen will find a way to be seen.
//             </p>
//             <p>
//               Take time to explore my work and let me know what you think. Follow me on social media or sign up for my newsletter to hear updates about what I am working on and where you can see my art in person.
//             </p>
//           </div>
//         </main>
//       </section>
//     </div>
//   );
// }
import React from "react";

export default function AboutComponent() {
  return (
    <div className="font-sans antialiased text-gray-800 dark:text-gray-100">
      <section name="About" className="dark:bg-gray-900 py-16">
        <main className="max-w-4xl mx-auto p-8">
          <h1 className="text-center text-2xl font-bold mb-8 text-gray-700 dark:text-gray-100">
            ABOUT MY WORK
          </h1>

          <section className="flex justify-center items-center mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              <div className="text-center md:text-left mb-8">
                <h2 className="text-4xl font-bold mb-2">Hello! I'm Namwoon</h2>
                <h3 className="text-2xl text-gray-500 italic mb-4 dark:text-gray-300">
                  A Photographer
                </h3>
                <div className="flex justify-center md:justify-start items-center space-x-4">
                  <p className="text-gray-500 dark:text-gray-300">Want To Discuss!?</p>
                  <a
                    href="#"
                    className="bg-yellow-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-orange-600 transition"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>

              <div className="text-center md:text-right mb-8">
                <img
                  src="https://p1.hiclipart.com/preview/359/957/100/face-icon-user-profile-user-account-avatar-icon-design-head-silhouette-neck-png-clipart.jpg"
                  alt="Profile Picture"
                  className="mx-auto rounded-full border-4 border-orange-500 w-40 h-40 md:w-52 md:h-52"
                />
              </div>
            </div>
          </section>

          <div className="text-center space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              I've always loved observing the world around me. Photography allows me to capture the beauty I see in the world and share it with others.
            </p>
            <p>
              I am currently exploring thoughts about ways that interior experiences inevitably become part of the exterior. This is as true with our own thoughts as it is with the interior experiences of social groups, historic movements, and momentous events. That which is unseen will find a way to be seen.
            </p>
            <p>
              Take time to explore my work and let me know what you think. Follow me on social media or sign up for my newsletter to hear updates about what I am working on and where you can see my art in person.
            </p>
          </div>
        </main>
      </section>
    </div>
  );
}


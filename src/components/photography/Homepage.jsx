// import React from "react"
// export default function HomepageComponent() {
//     return(
//         <div className="font-sans antialiased text-white">
//       {/* Header */}
//       <section class="relative" name="HomePage">
//         <img src="https://i.pinimg.com/originals/d8/37/40/d83740b7b6cf9fb1166e3c25eb1cced4.jpg" alt="City Skyline" class="w-full h-96 object-cover"/>
//         <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
//             <h1 class="text-white text-5xl font-bold mb-4">Living in Art.</h1>
//            <div className="text-center">
//            <p>Discover how to make every moment a masterpiece <br />by unleashing your creativity through fashion, hobbies, and daily activities.</p>
//            </div>
//             <button class="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition mt-10">Latest Photos</button>
//         </div>
//     </section>

//     <section class="bg-white py-16">
//         <div class="container mx-auto text-center">
//             <h2 class="text-2xl font-semibold mb-4 text-gray-700">Kim Namwoon</h2>
//             <p class="text-gray-700 mb-8">I've always loved observing the world around me. Photography allows me to capture the beauty I see in the world and share it with others. I hope you enjoy exploring the world through my lens and will take a moment to get in touch.</p>
//         </div>
//     </section>

//     <section class="py-16">
//         <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             <img src="https://wallpapercave.com/wp/wp13163582.png" alt="Photo 1" class="w-full h-56 object-cover hover:opacity-75 transition"/>
//             <img src="https://w0.peakpx.com/wallpaper/349/159/HD-wallpaper-landscape-nature-snow-covered-trees-with-snow-field-winter.jpg" alt="Photo 2" class="w-full h-56 object-cover hover:opacity-75 transition"/>
//             <img src="https://i.pinimg.com/736x/30/2c/ae/302caed8064de360c746c519be72723e.jpg" alt="Photo 3" class="w-full h-56 object-cover hover:opacity-75 transition"/>
//             <img src="https://i.pinimg.com/564x/9f/8f/9d/9f8f9d33b900494f06d3e4e5dcefd0c5.jpg" alt="Photo 4" class="w-full h-56 object-cover hover:opacity-75 transition"/>
//             <img src="https://c4.wallpaperflare.com/wallpaper/499/862/572/winter-snow-sunset-pink-sky-wallpaper-preview.jpg" alt="Photo 5" class="w-full h-56 object-cover hover:opacity-75 transition"/>
//             <img src="https://w0.peakpx.com/wallpaper/238/11/HD-wallpaper-winter-in-pink-mountain-sunset-trees-pink-winter.jpg" alt="Photo 6" class="w-full h-56 object-cover hover:opacity-75 transition"/>
//         </div>
//     </section>
     
//     </div>
//     );
// }
import React from "react";

export default function HomepageComponent() {
  return (
    <div className="font-sans antialiased text-gray-800 dark:text-gray-200">
      {/* Header */}
      <section className="relative" name="HomePage">
        <img
          src="https://i.pinimg.com/originals/d8/37/40/d83740b7b6cf9fb1166e3c25eb1cced4.jpg"
          alt="City Skyline"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold mb-4">Living in Art.</h1>
          <div className="text-center text-white">
            <p>
              Discover how to make every moment a masterpiece <br />
              by unleashing your creativity through fashion, hobbies, and daily
              activities.
            </p>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition mt-10">
            Latest Photos
          </button>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
            Kim Namwoon
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            I've always loved observing the world around me. Photography allows
            me to capture the beauty I see in the world and share it with
            others. I hope you enjoy exploring the world through my lens and
            will take a moment to get in touch.
          </p>
        </div>
      </section>

      <section className="py-1 dark:bg-gray-900 ">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="https://wallpapercave.com/wp/wp13163582.png"
            alt="Photo 1"
            className="w-full h-56 object-cover hover:opacity-75 transition"
          />
          <img
            src="https://w0.peakpx.com/wallpaper/349/159/HD-wallpaper-landscape-nature-snow-covered-trees-with-snow-field-winter.jpg"
            alt="Photo 2"
            className="w-full h-56 object-cover hover:opacity-75 transition"
          />
          <img
            src="https://i.pinimg.com/736x/30/2c/ae/302caed8064de360c746c519be72723e.jpg"
            alt="Photo 3"
            className="w-full h-56 object-cover hover:opacity-75 transition"
          />
          <img
            src="https://i.pinimg.com/564x/9f/8f/9d/9f8f9d33b900494f06d3e4e5dcefd0c5.jpg"
            alt="Photo 4"
            className="w-full h-56 object-cover hover:opacity-75 transition"
          />
          <img
            src="https://c4.wallpaperflare.com/wallpaper/499/862/572/winter-snow-sunset-pink-sky-wallpaper-preview.jpg"
            alt="Photo 5"
            className="w-full h-56 object-cover hover:opacity-75 transition"
          />
          <img
            src="https://w0.peakpx.com/wallpaper/238/11/HD-wallpaper-winter-in-pink-mountain-sunset-trees-pink-winter.jpg"
            alt="Photo 6"
            className="w-full h-56 object-cover hover:opacity-75 transition"
          />
        </div>
      </section>
    </div>
  );
}

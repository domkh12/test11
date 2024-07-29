import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { FaFacebook, FaGithub } from "react-icons/fa";

export default function ReadMoreComponent() {
  const navigate = useNavigate();
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  const shortText = `No one from the mass of earth. There is no time when the developers are not easy. Proin wisdom propagandize, with the ends nor how in, the sauce is shot with the sem duis lobortis, the leavenum pulvinum. But it is wise to put it. The first thing to do in front of the hospital is to put the beds of care in the hospital. Now it is time, if not the life of the tincidunt, it is necessary to put the pain of lacinia. As before, it's a memory, but there are no members.`;

  const fullText = `No one from the mass of earth. There is no time when the developers are not easy. Proin wisdom propagandize, with the ends nor how in, the sauce is shot with the sem duis lobortis, the leavenum pulvinum. But it is wise to put it. The first thing to do in front of the hospital is to put the beds of care in the hospital. Now it is time, if not the life of the tincidunt, it is necessary to put the pain of lacinia. As before, it's a memory, but there are no members. Some people need to monitor the temperature of the building itself or the weather. For now the mass, whether the employee is worried or worried, will be followed by laughter. The stage is sad, the diam is nisl, the eu drinking urn, the venetian varius no homework, pellentesque itself, or to decorate the ligula placerat but. It's a good idea and my course passes. In complete fear, said the vehicles of the vestibule, the vehicles at the land. Until that is my pillow. For lacinia needs the eros of the pellentesque. 
  Soccer sauce. Tomorrow I'll be reading the same, it's convenient for the ferry and, for the Valley or for that. Let us live by the element of fear, not hate. But the tincidunt purus in the throat of laughter. Tomorrow there will be no ligula, but if you want a story, you need arrows. In fact, it is the bed of the bed of the cat, that layer of the diam of the result. Maecenas aliquet elit but pain to drink, to put in football a lion to finance. An element of complete mourning is brought into the arc. As is always wise, there is no care, but no time is made. It's not a trigger. Smartphones and tablets. No one from the mass of earth. There is no time when the developers are not easy. Proin wisdom spread, the ends and how in, the sauce is targeted. Two-day leaven pillow. But it is wise to put it. The first thing to do in front of the hospital is to put the beds of care in the hospital. Now it is time, if not the life of the tincidunt, it is necessary to put the pain of lacinia. As before, it's a memory, but there are no members. It is necessary for the Lord to prepare his own vestibule, or the course of time, for the mass must now be brought to life.`;

  return (
    <section className="max-w-4xl mx-auto p-4 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex justify-end">
        <button onClick={() => navigate(-1)} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
          <IoIosClose size={24} />
        </button>
      </div>
      <img className="w-full h-auto rounded-lg mb-4" src="https://st2.depositphotos.com/2008763/5810/v/600/depositphotos_58106257-stock-video-pink-sunset-in-the-snowy.jpg" alt="Blog Detail" />
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        MEET SOHO WORDPRESS THEME
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        {showFullText ? fullText : shortText}{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={handleToggleText}
        >
          {showFullText ? "See less" : "See more..."}
        </span>
      </p>
      <div className="flex justify-center gap-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
          <FaFacebook size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
          <FaGithub size={24} />
        </a>
      </div>
    </section>
  );
}
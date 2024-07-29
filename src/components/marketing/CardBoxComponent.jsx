import { Card } from "flowbite-react";
import { AngelButton} from "./ButtonPrimary";
import { delay, motion } from "framer-motion"
import { duration } from "@mui/material";

export function CardBoxComponent({image, name, desc, motionProps}) {
  return (
    <motion.div
    initial= {{ opacity: 0, y: -100}}
    whileInView= {{opacity:1, y:0}}
    transition={{delay:1, duration:1}}
    >
    <Card className="max-w-[300px] bg-service-card-bg w-[300px]">
      <img className="rounded-[50%] w-32 h-32 bg-gray-200" src={image} alt="service image" />
      <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
      {name}
      </h5>
      <p className="font-normal text-white dark:text-gray-400">
      {desc} 
      </p>
      <AngelButton text="See Service"/>
    </Card>
    </motion.div>
  );
}

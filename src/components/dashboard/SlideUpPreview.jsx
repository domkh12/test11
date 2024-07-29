import React, { useState } from "react";
import { motion } from "framer-motion";
import ResponsivePreview from "../responsive/ResponsivePreview";
import IframeWrapper from "../responsive/IframeWrapper";

const SlideUpPreview = () => {
  const [device, setDevice] = useState("desktop");

  return (
    <ResponsivePreview device={device} setDevice={setDevice}>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 50 }}
        style={{ height: "100vh", width: "100%" }}
      >
        <IframeWrapper />
      </motion.div>
    </ResponsivePreview>
  );
};

export default SlideUpPreview;

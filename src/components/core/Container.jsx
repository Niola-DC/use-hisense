import { motion } from "framer-motion";
import React from "react";
import { useMenu } from "../../hooks/useMenu";

function Container({ scrollId = "hero", children }) {
  const { setCurrentPage } = useMenu();
  return (
    <motion.div
      onViewportEnter={setCurrentPage.bind(null, scrollId)}
      className="mx-auto max-w-6xl"
    >
      {children}
    </motion.div>
  );
}

export default Container;

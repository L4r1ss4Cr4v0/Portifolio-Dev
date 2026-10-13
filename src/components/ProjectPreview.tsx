import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  image?: string | null;
  title: string;
  gradient: string;
}

export function ProjectPreview({ image, title, gradient }: Props) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = !!image && !imageFailed;

  if (showImage) {
    return (
      <img
        src={image}
        alt={title}
        loading="lazy"
        onError={() => setImageFailed(true)}
        className="w-full h-full object-cover"
      />
    );
  }

  return (
    <div
      className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}
    >
      <motion.div
        className="text-4xl font-bold text-foreground/20 text-center px-4"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {title}
      </motion.div>
    </div>
  );
}

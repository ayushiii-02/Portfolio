import { motion } from "framer-motion";

const ProjectDetails = ({ title, description, subDescription, closeModel }) => {
  return (
    <div id="work" className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 p-5"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModel}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>

        <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
        <p className="mb-4 font-normal text-neutral-400">{description}</p>

        {subDescription.map((subDesc, index) => (
          <p key={index} className="mb-2 font-normal text-neutral-400">
            {subDesc}
          </p>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectDetails;

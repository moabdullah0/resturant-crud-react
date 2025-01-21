import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";

const HeroSection = () => {
  const imageAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const buttonAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative w-[100vw] place-items-center bg-custom-gradient flex items-center justify-center py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center px-0 gap-8">
        {/* Animated Image */}
        <motion.img
          src="/assets/LandingImage.svg"
          className="rounded-xl w-full "
          alt="Landing"
          variants={imageAnimation}
          initial="hidden"
          animate="visible"
        />

        {/* Text and Input Section */}
        <motion.div
          className="text-center flex flex-col justify-center items-center"
          variants={textAnimation}
          initial="hidden"
          animate="visible"
        >
          <div className="flex gap-10 items-center justify-center">
            <img src="assets/Orange.png" alt="Orange" />
            <img src="assets/arrowLanding.svg" alt="Arrow" />
            <span className="bg-red-200 px-5 py-1 rounded-full h-10 text-center">
              مشوار يجمعنا
            </span>
          </div>

          <div className="mt-5 text-center">
            <div className="text-[48px] font-bold">
              <span className="text-red-500">مشويات </span>
              <span className="font-medium"> & </span>
              <span className="text-primary">شاورما </span>
              <h1 className="font-medium text-gray-800">بخبرة ثلاثون عــــــــام</h1>
            </div>
            <img src="/assets/Vector.png" className="mt-5" alt="Decorative" />
            <p className="font-medium text-gray-600 mt-4">
              نقدم الطعام الطيب بشغف لكل محبي الاطايب والنكهات المميزة
            </p>
          </div>

          {/* Animated Input and Button */}
          <motion.div
            dir="ltr"
            className="mt-5 flex w-[100%] lg:w-[50%] border border-gray-500 items-center px-5 rounded-full"
            variants={buttonAnimation}
            initial="hidden"
            animate="visible"
          >
            <input
              type="text"
              className="h-12 px-5 focus:outline-none flex-grow"
              placeholder="بحث عن فرع"
            />
            <span className="bg-primary text-white px-2 py-2 rounded-full text-2xl">
              <CiSearch />
            </span>
          </motion.div>

          {/* Animated Call-to-Action Button */}
          <motion.button
            type="button"
            className="text-white bg-red-500 rounded-full font-medium mt-10 px-5 py-2 hover:bg-red-600 transition"
            variants={buttonAnimation}
            initial="hidden"
            animate="visible"
          >
            اطلب الحين
          </motion.button>

          <motion.img
            className="mt-24"
            src="/assets/arrowbelow.png"
            alt="Arrow Below"
            variants={textAnimation}
            initial="hidden"
            animate="visible"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

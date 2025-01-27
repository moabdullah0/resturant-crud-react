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
    <div className="relative w-full bg-custom-gradient flex items-center justify-center py-10 px-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* الصورة */}
          <motion.div
            className="w-full h-full flex justify-center relative right-16 lg:right-0  lg:justify-end"
            variants={imageAnimation}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/assets/LandingImage.svg"
              className="w-full max-w-[600px] h-auto rounded-xl"
              alt="Landing"
            />
          </motion.div>

          {/* النصوص والأزرار */}
          <motion.div
            className="text-center flex flex-col justify-center items-center"
            variants={textAnimation}
            initial="hidden"
            animate="visible"
          >
            <div className="flex gap-2 md:gap-4 items-center justify-center">
              <img src="assets/Orange.png" alt="Orange" className="w-8 md:w-12" />
              <img src="assets/arrowLanding.svg" alt="Arrow" className="w-8 md:w-12" />
              <span className="bg-red-200 px-2 py-1 rounded-full text-xs md:text-sm">
                مشوار يجمعنا
              </span>
            </div>

            <div className="mt-4 text-center">
              <div className="text-2xl md:text-5xl font-bold">
                <span className="text-red-500">مشويات </span>
                <span className="font-medium"> & </span>
                <span className="text-primary">شاورما </span>
                <h1 className="font-medium text-gray-800 mt-2 text-xl md:text-3xl">
                  بخبرة ثلاثون عــــــــام
                </h1>
              </div>
              <img src="/assets/Vector.png" className="mt-4 mx-auto w-16 md:w-auto" alt="Decorative" />
              <p className="font-medium text-gray-600 mt-2 text-xs md:text-base">
                نقدم الطعام الطيب بشغف لكل محبي الاطايب والنكهات المميزة
              </p>
            </div>

            <motion.div
              dir="ltr"
              className="mt-4 flex w-full max-w-[300px] md:max-w-[400px] border border-gray-500 items-center px-2 md:px-4 rounded-full"
              variants={buttonAnimation}
              initial="hidden"
              animate="visible"
            >
              <input
                type="text"
                className="h-10 md:h-12 px-2 md:px-4 focus:outline-none flex-grow text-xs md:text-base"
                placeholder="بحث عن فرع"
              />
              <span className="bg-primary text-white px-2 md:px-3 py-1 md:py-2 rounded-full text-xl md:text-2xl cursor-pointer">
                <CiSearch />
              </span>
            </motion.div>

            <motion.button
              type="button"
              className="text-white bg-red-500 rounded-full font-medium mt-6 px-4 py-1 md:px-6 md:py-2 hover:bg-red-600 transition text-sm md:text-base"
              variants={buttonAnimation}
              initial="hidden"
              animate="visible"
            >
              اطلب الحين
            </motion.button>

            <motion.img
              className="mt-6 md:mt-10 w-8 md:w-6"
              src="/assets/arrowbelow.png"
              alt="Arrow Below"
              variants={textAnimation}
              initial="hidden"
              animate="visible"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import { motion } from "framer-motion";

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      image: "/assets/card1.svg",
      title: "البوفيه المفتوح",
      description: "بوفيه غداء أسبوعي",
      buttonLabel: "اطلب الان",
    },
    {
      id: 2,
      image: "/assets/card2.svg",
      title: "توصيل مشوار",
      description: "أكبر أسطول توصيل بالشرقية",
      buttonLabel: "اطلب الان",
    },
    {
      id: 3,
      image: "/assets/card2.svg",
      title: "توصيل مشوار",
      description: "أكبر أسطول توصيل بالشرقية",
      buttonLabel: "اطلب الان",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center px-6 py-10">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className="rounded-lg shadow-md bg-white  max-w-sm w-full text-center"
          initial="hidden"
          animate="visible"
          custom={index} 
          variants={cardVariants}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-48 object-cover rounded-lg "
          />
          <div className="mt-4">
            <h1 className="font-medium text-xl text-gray-800">{service.title}</h1>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <button
              type="button"
              className="bg-primary mb-5 text-white px-6 py-2 rounded-full mt-4 hover:bg-primary-dark transition"
            >
              {service.buttonLabel}
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceSection;

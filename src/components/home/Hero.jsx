// import { Button } from "antd";
// import { motion } from "framer-motion";
// import { ArrowRightOutlined, WhatsAppOutlined } from "@ant-design/icons";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import Container from "./Container";
// import { useRandomProducts } from "../../hooks/useProducts";
// import { FILE_BASE_URL } from "../../config/api";
// import bgImage from "/background.png"; // adjust the path

// export default function Hero() {
//   const { data, isLoading } = useRandomProducts(6);
//   console.log("API Response:", data);
//   const slides = data?.products || [];
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-black to-slate-900 pt-14">
//       {/* Background */}
//       <div className="absolute inset-0 opacity-40">
//         <div
//           className="w-full h-full bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${bgImage})`,
//           }}
//         />
//       </div>

//       <Container>
//         <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-112px)] py-12">
//           {/* Left */}
//           <motion.div
//             initial={{ opacity: 0, x: -70 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold mb-6">
//               🕉 Authentic Narmadeshwar Shivlings
//             </span>

//             <h1 className="text-4xl lg:text-6xl block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
//               Namdev
//               <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
//                 Narmadeshwar
//               </span>
//               Shivling Art
//             </h1>

//             <p className="mt-8 text-lg leading-8 text-gray-300 max-w-xl">
//               Discover handcrafted Narmadeshwar Shivlings made from sacred
//               stones collected from the holy Narmada River. Every Shivling
//               represents devotion, spirituality and traditional craftsmanship.
//             </p>

//             <div className="flex flex-wrap gap-5 mt-10">
//               <Button
//                 type="primary"
//                 size="large"
//                 icon={<ArrowRightOutlined />}
//                 className="!bg-orange-500 hover:!bg-orange-600 !border-none !rounded-full !px-8 !h-12"
//               >
//                 Explore Collection
//               </Button>

//               <Button
//                 size="large"
//                 icon={<WhatsAppOutlined />}
//                 className="!rounded-full !px-8 !h-12"
//               >
//                 Contact Us
//               </Button>
//             </div>

//             {/* Counter */}
//             <div className="grid grid-cols-3 gap-5 mt-16">
//               {[
//                 ["20+", "Years Experience"],
//                 ["5000+", "Happy Customers"],
//                 ["100+", "Unique Designs"],
//               ].map(([num, label]) => (
//                 <div
//                   key={label}
//                   className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5"
//                 >
//                   <h2 className="text-4xl font-bold text-orange-400">{num}</h2>

//                   <p className="text-gray-300 mt-2">{label}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right */}
//           <motion.div
//             initial={{ opacity: 0, x: 70 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="relative"
//           >
//             {/* <Swiper
//               modules={[Autoplay, Pagination]}
//               autoplay={{
//                 delay: 3500,
//                 disableOnInteraction: false,
//               }}
//               pagination={{ clickable: true }}
//               loop
//               className="rounded-[32px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
//             >
//               {slides.map((item) => {
//                 const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(item.image);

//                 return (
//                   <SwiperSlide key={item.id}>
//                     {isVideo ? (
//                       <video
//                         className="w-full h-[600px] object-cover"
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                       >
//                         <source
//                           src={`${FILE_BASE_URL}/uploads/${item.image}`}
//                           type="video/mp4"
//                         />
//                       </video>
//                     ) : (
//                       <img
//                         src={`${FILE_BASE_URL}/uploads/${item.image}`}
//                         alt={item.name}
//                         className="w-full h-[600px] object-cover"
//                       />
//                     )}
//                   </SwiperSlide>
//                 );
//               })}
//               <SwiperSlide>
//                 <img
//                   src="/image3.jpg"
//                   className="w-full h-[600px] object-cover"
//                   alt=""
//                 />
//               </SwiperSlide>

//               <SwiperSlide>
//                 <video
//                   className="w-full h-[600px] object-cover"
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                 >
//                   <source src="/videos/workshop.mp4" type="video/mp4" />
//                 </video>
//               </SwiperSlide>
//             </Swiper> */}

//             {/* <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 text-white">
//               <h3 className="font-semibold text-lg">Authentic Narmadeshwar</h3>

//               <p className="text-gray-300">Handcrafted by skilled artisans</p>
//             </div> */}
//           </motion.div>
//         </div>
//       </Container>
//     </section>
//   );
// }

import { Button, Skeleton } from "antd";
import { motion } from "framer-motion";
import { ArrowRightOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import Container from "./Container";
import { useRandomProducts } from "../../hooks/useProducts";
import { FILE_BASE_URL } from "../../config/api";
import { SITE } from "../../config/constants";
import { ROUTES } from "../../config/routes";
import bgImage from "/background.png";

const counters = [
  ["20+", "Years Experience"],
  ["5000+", "Happy Customers"],
  ["100+", "Unique Designs"],
];

const isVideoFile = (src) => Boolean(src) && /\.(mp4|webm|ogg|mov)$/i.test(src);

export default function Hero() {
  const { data, isLoading } = useRandomProducts(6);
  const slides = data?.products || [];
  const hasSlides = slides.length > 0;

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden pt-24 sm:pt-14">
      {/* Background */}
      {/* <div className="absolute inset-0 opacity-40">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      </div> */}
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          className="h-full w-full"
        >
          {slides.map((item) => {
            const src = `${FILE_BASE_URL}/uploads/${item.image}`;

            return (
              <SwiperSlide key={item.id}>
                {isVideoFile(item.image) ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source src={src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={src}
                    className="h-full w-full object-fill"
                    alt={item.name}
                  />
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="absolute inset-0 z-10 bg-black/55" />

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="relative z-20">
        <Container>
          <div className="flex min-h-[calc(100vh-112px)] items-center py-10">
            {/* Left */}
            <motion.div
              className="mx-auto flex max-w-4xl flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-xs font-semibold text-orange-700 sm:px-5 sm:text-sm">
              {/* <span className="inline-flex items-center  rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800 sm:text-base"> */}
                
                🕉 Authentic Narmadeshwar Shivlings
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Namdev Narmadeshwar
                </span>
                {/* <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  
                </span> */}
                <span className="block text-white">Shivling Art</span>
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200 sm:mt-8 sm:text-lg sm:leading-8">
                Discover handcrafted Narmadeshwar Shivlings made from sacred
                stones collected from the holy Narmada River. Every Shivling
                represents devotion, spirituality and traditional craftsmanship.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
                <Link
                  to={ROUTES?.products || "/products"}
                  className="w-full sm:w-auto"
                >
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    className="!h-12 !w-full !rounded-full !border-none !bg-orange-500 !px-8 hover:!bg-orange-600 sm:!w-auto"
                  >
                    Explore Collection
                  </Button>
                </Link>

                {SITE.social?.whatsapp && (
                  <a
                    href={SITE.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="large"
                      icon={<WhatsAppOutlined />}
                      className="!h-12 !w-full !rounded-full !px-8 sm:!w-auto"
                    >
                      Contact Us
                    </Button>
                  </a>
                )}
              </div>

              {/* Counter */}
              <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
                {counters.map(([num, label], i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:p-5"
                  >
                    <h2 className="text-2xl font-bold text-orange-400 sm:text-4xl">
                      {num}
                    </h2>
                    <p className="mt-1 text-xs text-gray-300 sm:mt-2 sm:text-base">
                      {label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right */}
            {/* <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {isLoading ? (
              <Skeleton.Image
                active
                className="!h-[320px] !w-full !rounded-[24px] sm:!h-[450px] lg:!h-[600px]"
              />
            ) : (
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={hasSlides}
                className="hero-swiper overflow-hidden rounded-[24px] shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:rounded-[32px]"
              >
                {slides.map((item) => {
                  const src = item?.image
                    ? `${FILE_BASE_URL}/uploads/${item.image}`
                    : null;
                  if (!src) return null;

                  return (
                    <SwiperSlide key={item.id || item._id || src}>
                      {isVideoFile(item.image) ? (
                        <video
                          className="h-[320px] w-full object-cover sm:h-[450px] lg:h-[600px]"
                          autoPlay
                          muted
                          loop
                          playsInline
                        >
                          <source src={src} type="video/mp4" />
                        </video>
                      ) : (
                        <img
                          src={src}
                          alt={item.name || "Handcrafted Narmadeshwar Shivling"}
                          loading="lazy"
                          className="h-[320px] w-full object-fill sm:h-[450px] lg:h-[600px]"
                        />
                      )}
                    </SwiperSlide>
                  );
                })}

                {!hasSlides && (
                  <SwiperSlide>
                    <img
                      src="/image3.jpg"
                      alt="Namdev Narmadeshwar Shivling Art workshop"
                      className="h-[320px] w-full object-cover sm:h-[450px] lg:h-[600px]"
                    />
                  </SwiperSlide>
                )}
              </Swiper>
            )}

            <div className="absolute bottom-4 left-4 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-xl sm:bottom-6 sm:left-6 sm:px-6 sm:py-4">
              <h3 className="text-sm font-semibold sm:text-lg">
                Authentic Narmadeshwar
              </h3>
              <p className="text-xs text-gray-300 sm:text-base">
                Handcrafted by skilled artisans
              </p>
            </div>
          </motion.div> */}
          </div>
        </Container>
      </div>
      {/* Recolor Swiper's default pagination bullets to match the brand
          palette instead of the library's default black/white. */}
      <style>{`
        .hero-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          background: #f97316;
        }
      `}</style>
    </section>
  );
}

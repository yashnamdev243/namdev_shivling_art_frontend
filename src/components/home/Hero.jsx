import { Button } from "antd";
import { motion } from "framer-motion";
import { ArrowRightOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Container from "./Container";
import { useRandomProducts } from "../../hooks/useProducts";
import { FILE_BASE_URL } from "../../config/api";
import bgImage from "/background.png"; // adjust the path

export default function Hero() {
  const { data, isLoading } = useRandomProducts(6);
  console.log("API Response:", data);
  const slides = data?.products || [];
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-black to-slate-900 pt-14">
      {/* Background */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-112px)] py-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold mb-6">
              🕉 Authentic Narmadeshwar Shivlings
            </span>

            <h1 className="text-4xl lg:text-6xl block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Namdev
              <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Narmadeshwar
              </span>
              Shivling Art
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-300 max-w-xl">
              Discover handcrafted Narmadeshwar Shivlings made from sacred
              stones collected from the holy Narmada River. Every Shivling
              represents devotion, spirituality and traditional craftsmanship.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                className="!bg-orange-500 hover:!bg-orange-600 !border-none !rounded-full !px-8 !h-12"
              >
                Explore Collection
              </Button>

              <Button
                size="large"
                icon={<WhatsAppOutlined />}
                className="!rounded-full !px-8 !h-12"
              >
                Contact Us
              </Button>
            </div>

            {/* Counter */}
            <div className="grid grid-cols-3 gap-5 mt-16">
              {[
                ["20+", "Years Experience"],
                ["5000+", "Happy Customers"],
                ["100+", "Unique Designs"],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5"
                >
                  <h2 className="text-4xl font-bold text-orange-400">{num}</h2>

                  <p className="text-gray-300 mt-2">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              loop
              className="rounded-[32px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
            >
              {slides.map((item) => {
                const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(item.image);

                return (
                  <SwiperSlide key={item.id}>
                    {isVideo ? (
                      <video
                        className="w-full h-[600px] object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source
                          src={`${FILE_BASE_URL}/uploads/${item.image}`}
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <img
                        src={`${FILE_BASE_URL}/uploads/${item.image}`}
                        alt={item.name}
                        className="w-full h-[600px] object-cover"
                      />
                    )}
                  </SwiperSlide>
                );
              })}
              <SwiperSlide>
                <img
                  src="/image3.jpg"
                  className="w-full h-[600px] object-cover"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <video
                  className="w-full h-[600px] object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/workshop.mp4" type="video/mp4" />
                </video>
              </SwiperSlide>
            </Swiper> */}

            {/* <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 text-white">
              <h3 className="font-semibold text-lg">Authentic Narmadeshwar</h3>

              <p className="text-gray-300">Handcrafted by skilled artisans</p>
            </div> */}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

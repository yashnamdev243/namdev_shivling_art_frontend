// import { Helmet } from "react-helmet-async";
// import { Typography, Card, Row, Col } from "antd";
// import { motion } from "framer-motion";

// const { Title, Paragraph } = Typography;

// export default function About() {
//   return (
//     <>
//       <Helmet>
//         <title>About Us | Namdev Narmadeshwar Shivling Art</title>
//       </Helmet>

//       <section className="bg-amber-50 py-20">
//         <div className="container mx-auto px-4">

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//           >
//             <Title level={1} className="text-center">
//               About Us
//             </Title>

//             <Paragraph className="text-center max-w-3xl mx-auto">
//               Namdev Narmadeshwar Shivling Art specializes in authentic
//               Narmadeshwar Shivlings handcrafted with devotion from the
//               sacred Narmada River stones.
//             </Paragraph>
//           </motion.div>

//           <Row gutter={[24, 24]} className="mt-14">

//             <Col xs={24} md={8}>
//               <Card>
//                 <Title level={3}>Our Mission</Title>

//                 <Paragraph>
//                   Deliver original Narmadeshwar Shivlings with
//                   authenticity and devotion.
//                 </Paragraph>
//               </Card>
//             </Col>

//             <Col xs={24} md={8}>
//               <Card>
//                 <Title level={3}>Our Vision</Title>

//                 <Paragraph>
//                   Become India's most trusted destination for
//                   spiritual marble and Shivling products.
//                 </Paragraph>
//               </Card>
//             </Col>

//             <Col xs={24} md={8}>
//               <Card>
//                 <Title level={3}>Quality</Title>

//                 <Paragraph>
//                   Every Shivling is carefully selected,
//                   polished and quality checked.
//                 </Paragraph>
//               </Card>
//             </Col>

//           </Row>

//         </div>
//       </section>
//     </>
//   );
// }


import { Helmet } from "react-helmet-async";
import { Typography, Card, Row, Col, Button } from "antd";
import {
  SafetyCertificateOutlined,
  HeartOutlined,
  StarOutlined,
  TrophyOutlined,
  CheckCircleOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const features = [
  {
    icon: <SafetyCertificateOutlined />,
    title: "100% Authentic",
    desc: "Original Narmadeshwar Shivlings collected from the sacred Narmada River.",
  },
  {
    icon: <HeartOutlined />,
    title: "Handcrafted",
    desc: "Each Shivling is polished and finished by experienced artisans.",
  },
  {
    icon: <StarOutlined />,
    title: "Premium Quality",
    desc: "Every piece is carefully inspected before delivery.",
  },
  {
    icon: <TrophyOutlined />,
    title: "Trusted Store",
    desc: "Serving devotees with dedication and honesty.",
  },
  {
    icon: <CheckCircleOutlined />,
    title: "Secure Delivery",
    desc: "Safe packaging to ensure damage-free shipping.",
  },
  {
    icon: <CustomerServiceOutlined />,
    title: "Customer Support",
    desc: "Friendly assistance before and after purchase.",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Namdev Narmadeshwar Shivling Art</title>
      </Helmet>

       <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white py-10 px-10">

        {/* Background Blur */}

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-200/30 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-200/30 blur-[120px]" />

        <div className="container mx-auto max-w-7xl px-5 py-20">

          {/* Hero */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <span className="rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-amber-700">
              About Our Heritage
            </span>

            <Title className="mt-6 !mb-5 !text-4xl md:!text-6xl">
              Namdev Narmadeshwar
              <br />
              Shivling Art
            </Title>

            <Paragraph className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
              We are dedicated to preserving the spiritual heritage of
              authentic Narmadeshwar Shivlings. Every Shivling is selected
              with devotion, carefully polished, and delivered to devotees
              across India with complete authenticity.
            </Paragraph>

          </motion.div>

          {/* Story */}

          <div className="mt-24 grid items-center gap-16 lg:grid-cols-2">

            <motion.img
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src="/about.jpg"
              alt="About"
              className="rounded-3xl shadow-2xl"
            />

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <Title level={2}>
                Our Story
              </Title>

              <Paragraph className="text-lg leading-8 text-gray-600">
                Namdev Narmadeshwar Shivling Art has been serving devotees by
                providing authentic Shivlings sourced from the sacred Narmada
                River. Our mission is to preserve spiritual traditions while
                ensuring every devotee receives a genuine, beautifully crafted
                Shivling for worship.
              </Paragraph>

              <Button
                type="primary"
                size="large"
                className="mt-4 rounded-full border-0 bg-gradient-to-r from-amber-500 to-orange-500 px-8"
              >
                Learn More
              </Button>

            </motion.div>

          </div>

          {/* Mission Cards */}

          <Row gutter={[30, 30]} className="mt-24">

            {[
              {
                title: "Our Mission",
                desc: "Deliver authentic spiritual products with devotion and trust.",
              },
              {
                title: "Our Vision",
                desc: "Become India's most trusted destination for Narmadeshwar Shivlings.",
              },
              {
                title: "Our Promise",
                desc: "Quality craftsmanship with complete customer satisfaction.",
              },
            ].map((item) => (
              <Col xs={24} md={8} key={item.title}>
                <motion.div whileHover={{ y: -8 }}>
                  <Card className="rounded-3xl border-0 shadow-xl h-full">
                    <Title level={3}>{item.title}</Title>
                    <Paragraph>{item.desc}</Paragraph>
                  </Card>
                </motion.div>
              </Col>
            ))}

          </Row>

          {/* Features */}

          <div className="mt-28">

            <Title className="text-center">
              Why Choose Us
            </Title>

            <Row gutter={[24, 24]} className="mt-12">

              {features.map((item) => (
                <Col xs={24} sm={12} lg={8} key={item.title}>
                  <motion.div whileHover={{ y: -8 }}>
                    <Card className="h-full rounded-3xl border-0 shadow-lg">

                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl text-amber-600">
                        {item.icon}
                      </div>

                      <Title level={4}>
                        {item.title}
                      </Title>

                      <Paragraph className="text-gray-600">
                        {item.desc}
                      </Paragraph>

                    </Card>
                  </motion.div>
                </Col>
              ))}

            </Row>

          </div>

          {/* Statistics */}

          <div className="mt-28 rounded-[40px] bg-gradient-to-r from-amber-600 to-orange-500 p-10 text-white">

            <Row gutter={[30, 30]}>

              {[
                ["5000+", "Happy Customers"],
                ["20+", "Years Experience"],
                ["100%", "Authentic Products"],
                ["24/7", "Customer Support"],
              ].map(([number, text]) => (
                <Col xs={12} md={6} key={text}>
                  <div className="text-center">
                    <h2 className="text-4xl font-bold">
                      {number}
                    </h2>

                    <p className="mt-2 text-white/90">
                      {text}
                    </p>
                  </div>
                </Col>
              ))}

            </Row>

          </div>

          {/* CTA */}

          <div className="mt-24 text-center">

            <Title>
              Bring Divine Energy to Your Home
            </Title>

            <Paragraph className="mx-auto max-w-2xl text-lg text-gray-600">
              Browse our authentic collection of Narmadeshwar Shivlings and
              experience the spiritual beauty of handcrafted devotion.
            </Paragraph>

            <Link to="/products">
              <Button
                size="large"
                type="primary"
                className="mt-6 rounded-full border-0 bg-gradient-to-r from-amber-500 to-orange-500 px-10"
              >
                Explore Products
              </Button>
            </Link>

          </div>

        </div>

      </section>
    </>
  );
}
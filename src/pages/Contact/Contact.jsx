// import { Form, Input, Button, Select } from "antd";
// import {
//   PhoneOutlined,
//   MailOutlined,
//   EnvironmentOutlined,
//   WhatsAppOutlined,
//   MessageOutlined,
// } from "@ant-design/icons";
// import { motion } from "framer-motion";
// import { useMutation } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import React, { useState } from "react";
// import Seo from "../../components/common/Seo";
// import contactService from "../../services/contactService";
// import { SITE } from "../../config/constants";
// import {
//   FaMapMarkerAlt,
//   FaDirections,
//   FaOm,
//   FaLandmark,
//   FaClock,
// } from "react-icons/fa";
// import {
//   FiCheckCircle,
//   FiHelpCircle,
//   FiMail,
//   FiMinus,
//   FiPhone,
//   FiPlus,
//   FiSend,
//   FiUser,
// } from "react-icons/fi";
// import LocalBusinessSchema from "../../components/common/LocalBusinessSchema";

// const contactItems = [
//   {
//     icon: <PhoneOutlined />,
//     title: "Call Us",
//     value: SITE.phone,
//     href: `tel:${SITE.phoneRaw}`,
//     color: "bg-blue-100 text-blue-600",
//   },
//   {
//     icon: <MailOutlined />,
//     title: "Email",
//     value: SITE.email,
//     href: `mailto:${SITE.email}`,
//     color: "bg-red-100 text-red-600",
//   },
//   {
//     icon: <WhatsAppOutlined />,
//     title: "WhatsApp",
//     value: "Chat with us",
//     href: SITE.social.whatsapp,
//     color: "bg-green-100 text-green-600",
//   },
// ];
// const faqs = [
//   {
//     question: "How can I order an Authentic Narmadeshwar Shivling?",
//     answer:
//       "You can contact us by phone, WhatsApp, email, or by submitting the inquiry form on this page. Our team will help you choose the right Authentic Narmadeshwar Shivling based on size, weight, purpose, and budget.",
//   },
//   {
//     question: "Do you provide worldwide shipping?",
//     answer:
//       "Yes. We safely ship Authentic Narmadeshwar Shivlings, Shiva Idols, Temple Shivlings, and Religious Sculptures across India and internationally using secure packaging.",
//   },
//   {
//     question: "Can I order custom sizes or handmade Shivlings?",
//     answer:
//       "Absolutely. We manufacture custom Handmade Shivlings in different sizes, weights, and finishes for homes, temples, businesses, and spiritual organizations.",
//   },
//   {
//     question: "Are your Narmadeshwar Shivlings original?",
//     answer:
//       "Yes. Every Narmadeshwar Shivling is sourced and crafted with traditional methods. We are a trusted Narmadeshwar Shivling Manufacturer and Supplier from Bakawan, Khargone, Madhya Pradesh.",
//   },
//   {
//     question: "Do you manufacture Marble Shivlings and Stone Shivlings?",
//     answer:
//       "Yes. Along with Authentic Narmadeshwar Shivlings, we also manufacture Marble Shivlings, Stone Shivlings, Shiva Idols, Temple Shivlings, and customized Religious Sculptures.",
//   },
//   {
//     question: "How long does delivery take?",
//     answer:
//       "Delivery within India generally takes 3–7 business days depending on your location. International shipping times vary by destination and customs clearance.",
//   },
//   {
//     question: "Do you supply wholesale orders?",
//     answer:
//       "Yes. We are a leading Narmadeshwar Shivling Supplier and Shivling Exporter offering wholesale pricing for retailers, temples, spiritual organizations, and distributors.",
//   },
// ];
// export default function Contact() {
//   const [form] = Form.useForm();
//   const [openFAQ, setOpenFAQ] = useState(null);
//   const { mutateAsync, isPending } = useMutation({
//     mutationFn: contactService.send,
//   });
//   const onFinish = async (values) => {
//     const payload = {
//       name: values.name.trim(),
//       phone: values.phone.trim(),
//       email: values.email.trim(),
//       subject: values.subject,
//       message: values.message.trim(),
//     };

//     try {
//       const response = await mutateAsync(payload);

//       toast.success(response.message);

//       form.resetFields();
//     } catch (error) {
//       toast.error(error?.message || "Something went wrong.");
//     }
//   };

//   return (
//     <>
//       <Seo
//         title="Contact Namdev Narmadeshwar Shivling Art | Authentic Narmadeshwar Shivling Manufacturer in India"
//         description="Contact Namdev Narmadeshwar Shivling Art, a trusted manufacturer and exporter of authentic Narmadeshwar Shivlings in Bakawan, Khargone, Madhya Pradesh. Get expert guidance, custom Shivlings, temple orders, wholesale pricing, and worldwide shipping."
//         keywords="
//     Contact Narmadeshwar Shivling Manufacturer,
//     Authentic Narmadeshwar Shivling,
//     Shivling Supplier India,
//     Shivling Manufacturer Madhya Pradesh,
//     Temple Shivling,
//     Marble Shivling,
//     Stone Shivling,
//     Custom Shivling,
//     Shivling Exporter,
//     Namdev Narmadeshwar Shivling Art,
//     Bakawan Shivling,
//     Khargone Shivling,
//     Narmada Shivling
//   "
//       />

//       <LocalBusinessSchema />

//       <section
//         className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white py-16 md:py-24 lg:py-28

// px-4 sm:px-6 lg:px-8"
//       >
//         {/* Background Blur */}

//         <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-amber-200/30 blur-[130px]" />

//         <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-200/30 blur-[130px]" />

//         <div className="container mx-auto max-w-7xl px-5">
//           <div className="!mb-14 text-center">
//             <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700">
//               ✨ Contact Our Workshop
//             </span>

//             <h1
//               className="mt-8  text-gray-900 !text-3xl
// sm:!text-4xl
// md:!text-5xl
// lg:!text-6xl !font-extrabold leading-tight"
//             >
//               <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                 Namdev Narmadeshwar Shivling Art.
//               </span>
//               <br />
//               <span className="text-slate-900">
//                 Authentic Narmadeshwar Shivling Manufacturer
//               </span>
//             </h1>

//             <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
//               Speak directly with our experienced artisans for authentic
//               Narmadeshwar Shivlings, Temple Shivlings, Marble Shivlings, Custom
//               Shivlings, Wholesale Orders, and Worldwide Shipping. We have been
//               serving devotees, temples, and spiritual organizations with
//               genuine handcrafted Shivlings for over 100 years.
//             </p>
//           </div>
//           <div className="my-10 flex flex-wrap justify-center gap-4">
//             <div className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
//               ✅ 100+ Years Heritage
//             </div>

//             <div className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
//               🚚 Worldwide Shipping
//             </div>

//             <div className="rounded-full bg-orange-100 px-5 py-2 font-semibold text-orange-700">
//               🛕 Temple Orders
//             </div>

//             <div className="rounded-full bg-purple-100 px-5 py-2 font-semibold text-purple-700">
//               ⭐ Genuine Narmadeshwar Stone
//             </div>
//           </div>

//           <div className="grid gap-10 lg:grid-cols-[380px,1fr]">
//             {/* LEFT */}
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="space-y-6 lg:sticky lg:top-28 h-fit"
//             >
//               {/* Store Address */}

//               <div className="group relative overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-white via-orange-50/40 to-white p-7 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-orange-200/50 hover:shadow-2xl">
//                 <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

//                 <div className="relative flex gap-5">
//                   <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-3xl text-white shadow-lg">
//                     <EnvironmentOutlined />
//                   </div>

//                   <div>
//                     <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700">
//                       Our Location
//                     </span>

//                     <h2 className="mt-3 text-2xl font-bold text-gray-900">
//                       Visit Our Narmadeshwar Shivling Workshop
//                     </h2>

//                     <p className="mt-3 leading-7 text-gray-600">
//                       {SITE.address}
//                     </p>

//                     <p className="mt-3 text-sm text-gray-500">
//                       Visit our workshop in Bakawan, Khargone, Madhya Pradesh,
//                       where skilled artisans craft authentic Narmadeshwar
//                       Shivlings, Shiv Parivar idols, and customized spiritual
//                       sculptures using traditional craftsmanship.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Contact Cards */}

//               {contactItems.map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href={item.href}
//                   target={item.title === "WhatsApp" ? "_blank" : "_self"}
//                   rel="noreferrer"
//                   whileHover={{ y: -8 }}
//                   transition={{ duration: 0.25 }}
//                   className="block"
//                 >
//                   <div className="group relative overflow-hidden rounded-3xl border border-orange-100 bg-white p-6 shadow-lg transition-all duration-500 hover:border-orange-300 hover:shadow-2xl">
//                     {/* Hover Gradient */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-amber-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

//                     <div className="relative flex items-center gap-5">
//                       <div
//                         className={`flex h-16 w-16 items-center justify-center rounded-2xl text-2xl shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${item.color}`}
//                       >
//                         {item.icon}
//                       </div>

//                       <div className="flex-1">
//                         <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">
//                           Contact Us
//                         </span>

//                         <h3 className="mt-1 text-lg font-bold text-gray-900">
//                           {item.title}
//                         </h3>

//                         <p className="mt-1 text-gray-500 transition duration-300 group-hover:text-orange-600">
//                           {item.value}
//                         </p>

//                         <span className="mt-3 inline-flex items-center text-sm font-medium text-orange-500 opacity-0 transition duration-300 group-hover:opacity-100">
//                           Connect Now →
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.a>
//               ))}
//             </motion.div>

//             {/* RIGHT */}

//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <div className="relative overflow-hidden rounded-[32px] border border-orange-100 bg-white shadow-[0_30px_80px_rgba(249,115,22,.12)]">
//                 <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-orange-100 blur-3xl opacity-50" />
//                 <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-amber-100 blur-3xl opacity-50" />
//                 <div className="relative z-10 border-b border-orange-100 p-5 sm:p-6 lg:p-8">
//                   <div className="flex items-center gap-4">
//                     <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white shadow-lg">
//                       <FiSend size={30} />
//                     </div>

//                     <div>
//                       <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
//                         Contact Our Shivling Experts
//                       </span>

//                       <h2 className="mt-1 text-3xl font-bold text-gray-900 md:text-4xl">
//                         Send an Inquiry
//                       </h2>

//                       <p className="mt-2 text-gray-500">
//                         We'll get back to you within 24 hours.
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-5 sm:p-6 lg:p-8">
//                   <Form
//                     layout="vertical"
//                     form={form}
//                     onFinish={onFinish}
//                     validateTrigger={["onBlur", "onChange"]}
//                     scrollToFirstError
//                     requiredMark={false}
//                   >
//                     <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
//                       <Form.Item
//                         label={<span className="font-semibold">Full Name</span>}
//                         name="name"
//                         rules={[
//                           {
//                             required: true,
//                             message: "Please enter your full name.",
//                           },
//                           {
//                             min: 3,
//                             message: "Name must be at least 3 characters.",
//                           },
//                           {
//                             max: 50,
//                             message: "Name cannot exceed 50 characters.",
//                           },
//                           {
//                             pattern: /^[A-Za-z\s]+$/,
//                             message: "Only letters and spaces are allowed.",
//                           },
//                         ]}
//                       >
//                         <Input
//                           prefix={<FiUser className="text-orange-500" />}
//                           placeholder="John Doe"
//                           size="large"
//                           className="!h-12 rounded-2xl bg-orange-50/40 transition-all"
//                         />
//                       </Form.Item>

//                       <Form.Item
//                         label={
//                           <span className="font-semibold">Mobile Number</span>
//                         }
//                         name="phone"
//                         rules={[
//                           {
//                             required: true,
//                             message: "Please enter your mobile number.",
//                           },
//                           {
//                             pattern: /^[6-9]\d{9}$/,
//                             message:
//                               "Enter a valid 10-digit Indian mobile number.",
//                           },
//                         ]}
//                       >
//                         <Input
//                           size="large"
//                           prefix={<FiPhone className="text-orange-500" />}
//                           placeholder="9876543210"
//                           className="!h-12 rounded-2xl bg-orange-50/40 transition-all"
//                         />
//                       </Form.Item>
//                     </div>

//                     <Form.Item
//                       label={
//                         <span className="font-semibold">Email Address</span>
//                       }
//                       name="email"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please enter your email address.",
//                         },
//                         {
//                           type: "email",
//                           message: "Please enter a valid email address.",
//                         },
//                       ]}
//                     >
//                       {" "}
//                       <Input
//                         size="large"
//                         prefix={<FiMail className="text-orange-500" />}
//                         placeholder="example@gmail.com"
//                         className="!h-12 rounded-2xl bg-orange-50/40 transition-all"
//                       />
//                     </Form.Item>
//                     <Form.Item
//                       label="Inquiry Type"
//                       name="subject"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please select inquiry type.",
//                         },
//                       ]}
//                     >
//                       <Select
//                         size="large"
//                         placeholder="Select Inquiry"
//                         className="!h-12 rounded-2xl bg-orange-50/40 transition-all"
//                         options={[
//                           {
//                             label: "Temple Order",
//                             value: "Temple Order",
//                           },
//                           {
//                             label: "Wholesale Inquiry",
//                             value: "Wholesale",
//                           },
//                           {
//                             label: "Custom Shivling",
//                             value: "Custom",
//                           },
//                           {
//                             label: "Export Inquiry",
//                             value: "Export",
//                           },
//                           {
//                             label: "General Inquiry",
//                             value: "General",
//                           },
//                         ]}
//                       />
//                     </Form.Item>
//                     <Form.Item
//                       label={<span className="font-semibold">Message</span>}
//                       name="message"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please enter your message.",
//                         },
//                         {
//                           min: 20,
//                           message:
//                             "Message should contain at least 20 characters.",
//                         },
//                         {
//                           max: 500,
//                           message: "Message cannot exceed 500 characters.",
//                         },
//                       ]}
//                     >
//                       <Input.TextArea
//                         rows={6}
//                         placeholder="Tell us about your requirement..."
//                         className="rounded-2xl bg-orange-50/40"
//                       />
//                     </Form.Item>
//                     <div className="mb-8 rounded-2xl border border-green-100 bg-green-50 p-5">
//                       <div className="flex items-start gap-3">
//                         <FiCheckCircle
//                           className="mt-1 text-green-600"
//                           size={20}
//                         />

//                         <div>
//                           <h4 className="font-semibold">Why Contact Us?</h4>

//                           <p className="mt-1 text-sm leading-6 text-gray-600">
//                             Receive expert guidance on authentic Narmadeshwar
//                             Shivlings, wholesale orders, customization, and
//                             worldwide shipping assistance.
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     <Button
//                       htmlType="submit"
//                       loading={isPending}
//                       disabled={isPending}
//                       block
//                       size="large"
//                       className="
//     group
//     !h-16
//     !rounded-2xl
//     !border-0
//     !bg-gradient-to-r
//     !from-orange-500
//     !via-amber-500
//     !to-yellow-500
//     !text-white
//     text-lg
//     font-semibold
//     shadow-xl
//     transition-all
//     duration-300
//     hover:!-translate-y-1
//     hover:!scale-[1.02]
//     hover:!shadow-2xl
//     hover:!shadow-orange-400/40
//     active:!scale-[0.98]
//     disabled:!opacity-70
//   "
//                     >
//                       <div className="flex items-center justify-center gap-3">
//                         <FiSend className="transition group-hover:translate-x-1" />

//                         <span>Get Free Shivling Consultation</span>
//                       </div>
//                     </Button>
//                     <p className="mt-4 text-center text-sm text-gray-500">
//                       🔒 Your information is kept secure and will never be
//                       shared with third parties.
//                     </p>
//                   </Form>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className="relative py-24 bg-gradient-to-b from-white to-orange-50">
//         <div className="mx-auto max-w-5xl px-5">
//           <div className="text-center">
//             <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 font-semibold text-orange-700">
//               Frequently Asked Questions
//             </span>

//             <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
//               Everything You Need to Know About
//               <span className="block bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
//                 Narmadeshwar Shivlings
//               </span>
//             </h2>

//             <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600 leading-8">
//               Learn more about Authentic Narmadeshwar Shivlings, custom orders,
//               worldwide shipping, wholesale supply, Marble Shivlings, Temple
//               Shivlings, Stone Shivlings, and Religious Sculptures.
//             </p>
//           </div>

//           <div className="mt-14 space-y-5">
//             {faqs.map((faq, index) => {
//               const open = openFAQ === index;

//               return (
//                 <motion.div
//                   key={index}
//                   layout
//                   transition={{
//                     layout: { duration: 0.35 },
//                     default: { duration: 0.3 },
//                   }}
//                   whileHover={{ y: -4 }}
//                   className="group overflow-hidden rounded-3xl border border-orange-100/80 bg-white/90 backdrop-blur-xl shadow-lg transition-all duration-500 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-200/40"
//                 >
//                   {/* Top */}

//                   <button
//                     onClick={() => setOpenFAQ(open ? null : index)}
//                     className="relative flex w-full items-center gap-5 p-6 text-left"
//                   >
//                     {/* Gradient Glow */}

//                     <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-yellow-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

//                     {/* Icon */}

//                     <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white shadow-lg">
//                       <FiHelpCircle size={24} />
//                     </div>

//                     {/* Question */}

//                     <div className="relative flex-1">
//                       <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700">
//                         FAQ
//                       </span>

//                       <h3 className="mt-2 text-lg font-bold text-gray-900 transition group-hover:text-orange-600">
//                         {faq.question}
//                       </h3>
//                     </div>

//                     {/* Toggle */}

//                     <motion.div
//                       animate={{
//                         rotate: open ? 180 : 0,
//                         scale: open ? 1.15 : 1,
//                       }}
//                       transition={{ duration: 0.25 }}
//                       className="relative flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-500"
//                     >
//                       {open ? <FiMinus size={22} /> : <FiPlus size={22} />}
//                     </motion.div>
//                   </button>

//                   {/* Answer */}

//                   <motion.div
//                     initial={false}
//                     animate={{
//                       height: open ? "auto" : 0,
//                       opacity: open ? 1 : 0,
//                     }}
//                     transition={{
//                       duration: 0.35,
//                     }}
//                     className="overflow-hidden"
//                   >
//                     <div className="border-t border-orange-100 bg-gradient-to-br from-orange-50/50 via-white to-amber-50/40 px-6 pb-6 pt-5">
//                       <div className="flex gap-4">
//                         <div className="mt-1">
//                           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
//                             <FiCheckCircle size={20} />
//                           </div>
//                         </div>

//                         <div>
//                           <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
//                             Helpful Answer
//                           </span>

//                           <p className="mt-4 leading-8 text-gray-600">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//       {/* Google Map */}

//       <motion.section
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="relative mt-28 overflow-hidden"
//       >
//         {/* Background */}
//         <div className="absolute inset-0 -z-10" />

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           {/* Heading */}

//           <div className="mx-auto max-w-4xl text-center">
//             <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700">
//               <FaMapMarkerAlt />
//               Visit Our Workshop
//             </span>

//             <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
//               Visit
//               <span className="block bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
//                 Namdev Narmadeshwar Shivling Art
//               </span>
//             </h2>

//             <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
//               Located in <strong>Bakawan, Khargone, Madhya Pradesh</strong>, our
//               workshop has been crafting authentic
//               <strong> Narmadeshwar Shivlings</strong> for over
//               <strong> 100 years.</strong>
//             </p>
//           </div>

//           {/* Map */}

//           <div className="relative mt-14 overflow-hidden rounded-[32px] border border-orange-100 bg-white p-3 shadow-2xl">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4281.799203649841!2d75.8461086!3d22.169555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396285fe663a371b%3A0xd15c87bf6c844939!2sNamdev%20Shivling%20Art%20Puratan!5e1!3m2!1sen!2sin!4v1785172586288!5m2!1sen!2sin"
//               loading="lazy"
//               allowFullScreen
//               title=" Namdev Narmadeshwar Shivling Art Google Map"
//               className="h-[320px] w-full rounded-3xl md:h-[580px]"
//             />

//             {/* Floating Card */}

//             <div className="absolute bottom-6 left-6 hidden rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur-lg lg:block">
//               <h3 className="font-bold text-xl">
//                 Namdev Narmadeshwar Shivling Art
//               </h3>

//               <p className="mt-2 text-gray-600">Bakawan, Khargone</p>

//               <a
//                 href="
//                 https://maps.app.goo.gl/2jWrqE3ATYfnKpQU7
//                 "
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 font-semibold text-white transition hover:scale-105"
//               >
//                 <FaDirections />
//                 Get Directions
//               </a>
//             </div>
//           </div>

//           {/* Feature Cards */}

//           <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">
//             <div className="rounded-3xl bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
//               <FaMapMarkerAlt className="text-3xl text-orange-500" />
//               <h3 className="mt-4 font-bold text-lg">Location</h3>
//               <p className="mt-2 text-gray-600">
//                 Bakawan, Khargone, Madhya Pradesh
//               </p>
//             </div>

//             <div className="rounded-3xl bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
//               <FaOm className="text-3xl text-orange-500" />
//               <h3 className="mt-4 font-bold text-lg">Authentic Shivlings</h3>
//               <p className="mt-2 text-gray-600">
//                 Genuine Narmadeshwar Shivlings
//               </p>
//             </div>

//             <div className="rounded-3xl bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
//               <FaLandmark className="text-3xl text-orange-500" />
//               <h3 className="mt-4 font-bold text-lg">Heritage</h3>
//               <p className="mt-2 text-gray-600">
//                 100+ Years Traditional Craftsmanship
//               </p>
//             </div>

//             <div className="rounded-3xl bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
//               <FaClock className="text-3xl text-orange-500" />
//               <h3 className="mt-4 font-bold text-lg">Experience</h3>
//               <p className="mt-2 text-gray-600">
//                 Serving devotees for generations
//               </p>
//             </div>
//           </div>
//         </div>
//       </motion.section>
//     </>
//   );
// }





import { Form, Input, Button, Select } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
import Seo from "../../components/common/Seo";
import contactService from "../../services/contactService";
import { SITE } from "../../config/constants";
import { FaMapMarkerAlt, FaDirections, FaOm, FaLandmark, FaClock } from "react-icons/fa";
import {
  FiCheckCircle,
  FiHelpCircle,
  FiMail,
  FiMinus,
  FiPhone,
  FiPlus,
  FiSend,
  FiUser,
} from "react-icons/fi";
import LocalBusinessSchema from "../../components/common/LocalBusinessSchema";

// Build the contact card list defensively — if a value isn't configured in
// SITE (e.g. WhatsApp link missing in a given deployment), skip the card
// instead of rendering a dead / empty link.
const buildContactItems = () => {
  const items = [];

  if (SITE.phone && SITE.phoneRaw) {
    items.push({
      icon: <PhoneOutlined aria-hidden="true" />,
      title: "Call Us",
      value: SITE.phone,
      href: `tel:${SITE.phoneRaw}`,
      external: false,
      color: "bg-blue-100 text-blue-600",
    });
  }

  if (SITE.email) {
    items.push({
      icon: <MailOutlined aria-hidden="true" />,
      title: "Email",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      external: false,
      color: "bg-red-100 text-red-600",
    });
  }

  if (SITE.social?.whatsapp) {
    items.push({
      icon: <WhatsAppOutlined aria-hidden="true" />,
      title: "WhatsApp",
      value: "Chat with us",
      href: SITE.social.whatsapp,
      external: true,
      color: "bg-green-100 text-green-600",
    });
  }

  return items;
};

const contactItems = buildContactItems();

const faqs = [
  {
    question: "How can I order an Authentic Narmadeshwar Shivling?",
    answer:
      "You can contact us by phone, WhatsApp, email, or by submitting the inquiry form on this page. Our team will help you choose the right Authentic Narmadeshwar Shivling based on size, weight, purpose, and budget.",
  },
  {
    question: "Do you provide worldwide shipping?",
    answer:
      "Yes. We safely ship Authentic Narmadeshwar Shivlings, Shiva Idols, Temple Shivlings, and Religious Sculptures across India and internationally using secure packaging.",
  },
  {
    question: "Can I order custom sizes or handmade Shivlings?",
    answer:
      "Absolutely. We manufacture custom Handmade Shivlings in different sizes, weights, and finishes for homes, temples, businesses, and spiritual organizations.",
  },
  {
    question: "Are your Narmadeshwar Shivlings original?",
    answer:
      "Yes. Every Narmadeshwar Shivling is sourced and crafted with traditional methods. We are a trusted Narmadeshwar Shivling Manufacturer and Supplier from Bakawan, Khargone, Madhya Pradesh.",
  },
  {
    question: "Do you manufacture Marble Shivlings and Stone Shivlings?",
    answer:
      "Yes. Along with Authentic Narmadeshwar Shivlings, we also manufacture Marble Shivlings, Stone Shivlings, Shiva Idols, Temple Shivlings, and customized Religious Sculptures.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery within India generally takes 3–7 business days depending on your location. International shipping times vary by destination and customs clearance.",
  },
  {
    question: "Do you supply wholesale orders?",
    answer:
      "Yes. We are a leading Narmadeshwar Shivling Supplier and Shivling Exporter offering wholesale pricing for retailers, temples, spiritual organizations, and distributors.",
  },
];

const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4281.799203649841!2d75.8461086!3d22.169555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396285fe663a371b%3A0xd15c87bf6c844939!2sNamdev%20Shivling%20Art%20Puratan!5e1!3m2!1sen!2sin!4v1785172586288!5m2!1sen!2sin";

const GOOGLE_MAPS_DIRECTIONS_URL = "https://maps.app.goo.gl/2jWrqE3ATYfnKpQU7";

export default function Contact() {
  const [form] = Form.useForm();
  const [openFAQ, setOpenFAQ] = useState(null);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: contactService.send,
  });

  const onFinish = async (values) => {
    const payload = {
      name: values.name.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      subject: values.subject,
      message: values.message.trim(),
    };

    try {
      const response = await mutateAsync(payload);
      toast.success(response?.message || "Your inquiry has been sent.");
      form.resetFields();
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <>
      <Seo
        title="Contact Namdev Narmadeshwar Shivling Art | Authentic Narmadeshwar Shivling Manufacturer in India"
        description="Contact Namdev Narmadeshwar Shivling Art, a trusted manufacturer and exporter of authentic Narmadeshwar Shivlings in Bakawan, Khargone, Madhya Pradesh. Get expert guidance, custom Shivlings, temple orders, wholesale pricing, and worldwide shipping."
        keywords="Contact Narmadeshwar Shivling Manufacturer, Authentic Narmadeshwar Shivling, Shivling Supplier India, Shivling Manufacturer Madhya Pradesh, Temple Shivling, Marble Shivling, Stone Shivling, Custom Shivling, Shivling Exporter, Namdev Narmadeshwar Shivling Art, Bakawan Shivling, Khargone Shivling, Narmada Shivling"
      />

      <LocalBusinessSchema />

      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white py-12 sm:py-16 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        {/* Background Blur */}
        <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-amber-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-orange-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />

        <div className="container mx-auto max-w-7xl px-0 sm:px-5">
          <div className="mb-12 text-center sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-xs font-semibold text-orange-700 sm:px-5 sm:text-sm">
              ✨ Contact Our Workshop
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-tight text-gray-900 sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Namdev Narmadeshwar Shivling Art.
              </span>
              <br />
              <span className="text-slate-900">
                Authentic Narmadeshwar Shivling Manufacturer
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              Speak directly with our experienced artisans for authentic
              Narmadeshwar Shivlings, Temple Shivlings, Marble Shivlings,
              Custom Shivlings, Wholesale Orders, and Worldwide Shipping. We
              have been serving devotees, temples, and spiritual organizations
              with genuine handcrafted Shivlings for over 100 years.
            </p>
          </div>

          <div className="my-8 flex flex-wrap justify-center gap-2.5 sm:my-10 sm:gap-4">
            <div className="rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold text-green-700 sm:px-5 sm:py-2 sm:text-base">
              ✅ 100+ Years Heritage
            </div>
            <div className="rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-700 sm:px-5 sm:py-2 sm:text-base">
              🚚 Worldwide Shipping
            </div>
            <div className="rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold text-orange-700 sm:px-5 sm:py-2 sm:text-base">
              🛕 Temple Orders
            </div>
            <div className="rounded-full bg-purple-100 px-4 py-1.5 text-xs font-semibold text-purple-700 sm:px-5 sm:py-2 sm:text-base">
              ⭐ Genuine Narmadeshwar Stone
            </div>
          </div>

          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[380px,1fr]">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5 sm:space-y-6 lg:sticky lg:top-28 lg:h-fit"
            >
              {/* Store Address */}
              <div className="group relative overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-white via-orange-50/40 to-white p-5 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-200/50 sm:p-7">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-amber-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative flex gap-4 sm:gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-2xl text-white shadow-lg sm:h-16 sm:w-16 sm:text-3xl">
                    <EnvironmentOutlined aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700">
                      Our Location
                    </span>

                    <h2 className="mt-3 text-xl font-bold text-gray-900 sm:text-2xl">
                      Visit Our Narmadeshwar Shivling Workshop
                    </h2>

                    <p className="mt-3 break-words leading-7 text-gray-600">
                      {SITE.address}
                    </p>

                    <p className="mt-3 text-sm text-gray-500">
                      Visit our workshop in Bakawan, Khargone, Madhya
                      Pradesh, where skilled artisans craft authentic
                      Narmadeshwar Shivlings, Shiv Parivar idols, and
                      customized spiritual sculptures using traditional
                      craftsmanship.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Cards */}
              {contactItems.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  aria-label={`${item.title}: ${item.value}`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="block"
                >
                  <div className="group relative overflow-hidden rounded-3xl border border-orange-100 bg-white p-5 shadow-lg transition-all duration-500 hover:border-orange-300 hover:shadow-2xl sm:p-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-amber-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                    <div className="relative flex items-center gap-4 sm:gap-5">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-xl shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 sm:h-16 sm:w-16 sm:text-2xl ${item.color}`}
                      >
                        {item.icon}
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">
                          Contact Us
                        </span>

                        <h3 className="mt-1 text-base font-bold text-gray-900 sm:text-lg">
                          {item.title}
                        </h3>

                        <p className="mt-1 truncate text-sm text-gray-500 transition duration-300 group-hover:text-orange-600 sm:text-base">
                          {item.value}
                        </p>

                        <span className="mt-3 hidden items-center text-sm font-medium text-orange-500 opacity-0 transition duration-300 group-hover:opacity-100 sm:inline-flex">
                          Connect Now →
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-[24px] border border-orange-100 bg-white shadow-[0_30px_80px_rgba(249,115,22,.12)] sm:rounded-[32px]">
                <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-orange-100 opacity-50 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-amber-100 opacity-50 blur-3xl" />

                <div className="relative z-10 border-b border-orange-100 p-5 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white shadow-lg sm:h-16 sm:w-16">
                      <FiSend size={26} aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 sm:text-sm sm:tracking-[0.25em]">
                        Contact Our Shivling Experts
                      </span>

                      <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                        Send an Inquiry
                      </h2>

                      <p className="mt-2 text-sm text-gray-500 sm:text-base">
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 lg:p-8">
                  <Form
                    layout="vertical"
                    form={form}
                    onFinish={onFinish}
                    validateTrigger={["onBlur", "onChange"]}
                    scrollToFirstError
                    requiredMark={false}
                  >
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <Form.Item
                        label={<span className="font-semibold">Full Name</span>}
                        name="name"
                        rules={[
                          { required: true, message: "Please enter your full name." },
                          { min: 3, message: "Name must be at least 3 characters." },
                          { max: 50, message: "Name cannot exceed 50 characters." },
                          {
                            pattern: /^[A-Za-z\s'-]+$/,
                            message: "Only letters, spaces, hyphens and apostrophes are allowed.",
                          },
                        ]}
                      >
                        <Input
                          prefix={<FiUser className="text-orange-500" />}
                          placeholder="John Doe"
                          size="large"
                          autoComplete="name"
                          className="!h-12 rounded-2xl bg-orange-50/40 transition-all"
                        />
                      </Form.Item>

                      <Form.Item
                        label={<span className="font-semibold">Mobile Number</span>}
                        name="phone"
                        rules={[
                          { required: true, message: "Please enter your mobile number." },
                          {
                            pattern: /^[6-9]\d{9}$/,
                            message: "Enter a valid 10-digit Indian mobile number.",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
                          autoComplete="tel"
                          prefix={<FiPhone className="text-orange-500" />}
                          placeholder="9876543210"
                          className="!h-12 rounded-2xl bg-orange-50/40 transition-all"
                        />
                      </Form.Item>
                    </div>

                    <Form.Item
                      label={<span className="font-semibold">Email Address</span>}
                      name="email"
                      rules={[
                        { required: true, message: "Please enter your email address." },
                        { type: "email", message: "Please enter a valid email address." },
                      ]}
                    >
                      <Input
                        size="large"
                        type="email"
                        autoComplete="email"
                        prefix={<FiMail className="text-orange-500" />}
                        placeholder="example@gmail.com"
                        className="!h-12 rounded-2xl bg-orange-50/40 transition-all"
                      />
                    </Form.Item>

                    <Form.Item
                      label="Inquiry Type"
                      name="subject"
                      rules={[{ required: true, message: "Please select inquiry type." }]}
                    >
                      <Select
                        size="large"
                        placeholder="Select Inquiry"
                        className="!h-12 rounded-2xl [&_.ant-select-selector]:!h-12 [&_.ant-select-selector]:!items-center"
                        options={[
                          { label: "Temple Order", value: "Temple Order" },
                          { label: "Wholesale Inquiry", value: "Wholesale" },
                          { label: "Custom Shivling", value: "Custom" },
                          { label: "Export Inquiry", value: "Export" },
                          { label: "General Inquiry", value: "General" },
                        ]}
                      />
                    </Form.Item>

                    <Form.Item
                      label={<span className="font-semibold">Message</span>}
                      name="message"
                      rules={[
                        { required: true, message: "Please enter your message." },
                        { min: 20, message: "Message should contain at least 20 characters." },
                        { max: 500, message: "Message cannot exceed 500 characters." },
                      ]}
                    >
                      <Input.TextArea
                        rows={6}
                        placeholder="Tell us about your requirement..."
                        maxLength={500}
                        showCount
                        className="rounded-2xl bg-orange-50/40"
                      />
                    </Form.Item>

                    <div className="mb-8 rounded-2xl border border-green-100 bg-green-50 p-4 sm:p-5">
                      <div className="flex items-start gap-3">
                        <FiCheckCircle className="mt-1 shrink-0 text-green-600" size={20} aria-hidden="true" />
                        <div>
                          <h4 className="font-semibold">Why Contact Us?</h4>
                          <p className="mt-1 text-sm leading-6 text-gray-600">
                            Receive expert guidance on authentic Narmadeshwar
                            Shivlings, wholesale orders, customization, and
                            worldwide shipping assistance.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button
                      htmlType="submit"
                      loading={isPending}
                      disabled={isPending}
                      block
                      size="large"
                      className="group !h-14 !rounded-2xl !border-0 !bg-gradient-to-r !from-orange-500 !via-amber-500 !to-yellow-500 !text-base !text-white font-semibold shadow-xl transition-all duration-300 hover:!-translate-y-1 hover:!scale-[1.02] hover:!shadow-2xl hover:!shadow-orange-400/40 active:!scale-[0.98] disabled:!opacity-70 sm:!h-16 sm:!text-lg"
                    >
                      <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <FiSend className="transition group-hover:translate-x-1" aria-hidden="true" />
                        <span>{isPending ? "Sending..." : "Get Free Shivling Consultation"}</span>
                      </div>
                    </Button>

                    <p className="mt-4 text-center text-xs text-gray-500 sm:text-sm">
                      🔒 Your information is kept secure and will never be
                      shared with third parties.
                    </p>
                  </Form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-white to-orange-50 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-5">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold text-orange-700 sm:px-5 sm:py-2 sm:text-base">
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:mt-6 sm:text-4xl md:text-5xl">
              Everything You Need to Know About
              <span className="block bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Narmadeshwar Shivlings
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:mt-5 sm:text-lg sm:leading-8">
              Learn more about Authentic Narmadeshwar Shivlings, custom
              orders, worldwide shipping, wholesale supply, Marble Shivlings,
              Temple Shivlings, Stone Shivlings, and Religious Sculptures.
            </p>
          </div>

          <div className="mt-10 space-y-4 sm:mt-14 sm:space-y-5">
            {faqs.map((faq, index) => {
              const open = openFAQ === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <motion.div
                  key={faq.question}
                  layout
                  transition={{
                    layout: { duration: 0.35 },
                    default: { duration: 0.3 },
                  }}
                  whileHover={{ y: -4 }}
                  className="group overflow-hidden rounded-3xl border border-orange-100/80 bg-white/90 shadow-lg backdrop-blur-xl transition-all duration-500 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-200/40"
                >
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setOpenFAQ(open ? null : index)}
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="relative flex w-full items-center gap-3 p-4 text-left sm:gap-5 sm:p-6"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-yellow-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white shadow-lg sm:h-14 sm:w-14">
                      <FiHelpCircle size={20} aria-hidden="true" />
                    </div>

                    <div className="relative min-w-0 flex-1">
                      <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700">
                        FAQ
                      </span>
                      <h3 className="mt-2 text-base font-bold text-gray-900 transition group-hover:text-orange-600 sm:text-lg">
                        {faq.question}
                      </h3>
                    </div>

                    <motion.div
                      animate={{ rotate: open ? 180 : 0, scale: open ? 1.15 : 1 }}
                      transition={{ duration: 0.25 }}
                      className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500 sm:h-12 sm:w-12"
                    >
                      {open ? <FiMinus size={20} aria-hidden="true" /> : <FiPlus size={20} aria-hidden="true" />}
                    </motion.div>
                  </button>

                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={false}
                    animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-orange-100 bg-gradient-to-br from-orange-50/50 via-white to-amber-50/40 px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
                      <div className="flex gap-3 sm:gap-4">
                        <div className="mt-1 shrink-0">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600 sm:h-10 sm:w-10">
                            <FiCheckCircle size={18} aria-hidden="true" />
                          </div>
                        </div>

                        <div className="min-w-0">
                          <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                            Helpful Answer
                          </span>
                          <p className="mt-3 leading-7 text-gray-600 sm:mt-4 sm:leading-8">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
      {/* Google Map */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mt-16 overflow-hidden sm:mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-1.5 text-xs font-semibold text-orange-700 sm:px-5 sm:py-2 sm:text-sm">
              <FaMapMarkerAlt aria-hidden="true" />
              Visit Our Workshop
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:mt-6 sm:text-4xl md:text-5xl">
              Visit
              <span className="block bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Namdev Narmadeshwar Shivling Art
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              Located in <strong>Bakawan, Khargone, Madhya Pradesh</strong>,
              our workshop has been crafting authentic{" "}
              <strong>Narmadeshwar Shivlings</strong> for over{" "}
              <strong>100 years.</strong>
            </p>
          </div>

          {/* Map */}
          <div className="relative mt-10 overflow-hidden rounded-[24px] border border-orange-100 bg-white p-2 shadow-2xl sm:mt-14 sm:rounded-[32px] sm:p-3">
            <iframe
              src={GOOGLE_MAPS_EMBED_SRC}
              loading="lazy"
              allowFullScreen
              title="Namdev Narmadeshwar Shivling Art Google Map"
              className="h-[260px] w-full rounded-2xl sm:h-[320px] sm:rounded-3xl md:h-[580px]"
            />

            {/* Floating Card (desktop) */}
            <div className="absolute bottom-6 left-6 hidden rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur-lg lg:block">
              <h3 className="text-xl font-bold">Namdev Narmadeshwar Shivling Art</h3>
              <p className="mt-2 text-gray-600">Bakawan, Khargone</p>
              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 font-semibold text-white transition hover:scale-105"
              >
                <FaDirections aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Directions card (mobile / tablet) */}
          <div className="mt-4 flex justify-center lg:hidden">
            <a
              href={GOOGLE_MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] sm:w-auto"
            >
              <FaDirections aria-hidden="true" />
              Get Directions
            </a>
          </div>

          {/* Feature Cards */}
          <div className="mb-10 mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-4">
            <div className="rounded-3xl bg-white p-5 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl sm:p-7">
              <FaMapMarkerAlt className="text-2xl text-orange-500 sm:text-3xl" aria-hidden="true" />
              <h3 className="mt-3 text-base font-bold sm:mt-4 sm:text-lg">Location</h3>
              <p className="mt-1.5 text-sm text-gray-600 sm:mt-2 sm:text-base">
                Bakawan, Khargone, Madhya Pradesh
              </p>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl sm:p-7">
              <FaOm className="text-2xl text-orange-500 sm:text-3xl" aria-hidden="true" />
              <h3 className="mt-3 text-base font-bold sm:mt-4 sm:text-lg">Authentic Shivlings</h3>
              <p className="mt-1.5 text-sm text-gray-600 sm:mt-2 sm:text-base">
                Genuine Narmadeshwar Shivlings
              </p>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl sm:p-7">
              <FaLandmark className="text-2xl text-orange-500 sm:text-3xl" aria-hidden="true" />
              <h3 className="mt-3 text-base font-bold sm:mt-4 sm:text-lg">Heritage</h3>
              <p className="mt-1.5 text-sm text-gray-600 sm:mt-2 sm:text-base">
                100+ Years Traditional Craftsmanship
              </p>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl sm:p-7">
              <FaClock className="text-2xl text-orange-500 sm:text-3xl" aria-hidden="true" />
              <h3 className="mt-3 text-base font-bold sm:mt-4 sm:text-lg">Experience</h3>
              <p className="mt-1.5 text-sm text-gray-600 sm:mt-2 sm:text-base">
                Serving devotees for generations
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      </section>

    </>
  );
}
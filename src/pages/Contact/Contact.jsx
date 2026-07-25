// import { Form, Input, Button, Card } from "antd";
// import { useMutation } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import {
//   PhoneOutlined,
//   MailOutlined,
//   EnvironmentOutlined,
//   WhatsAppOutlined,
// } from "@ant-design/icons";

// import Seo from "../../components/common/Seo";
// import contactService from "../../services/contactService";
// import { SITE } from "../../config/constants";

// export default function Contact() {
//   const [form] = Form.useForm();

//   const { mutateAsync, isPending } = useMutation({
//     mutationFn: (values) => contactService.send(values),
//     onSuccess: () => {
//       toast.success("Thank you! We'll get back to you shortly.");
//       form.resetFields();
//     },
//     onError: (err) => toast.error(err.message || "Could not send your message"),
//   });

//   return (
//     <>
//       <Seo title="Contact Us" description="Get in touch with Namdev Narmadeshwar Shivling Art." />

//       <section className="py-16">
//         <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
//           <div>
//             <p className="font-medium uppercase tracking-widest text-gold-600">Get In Touch</p>
//             <h1 className="mt-2 font-display text-4xl font-bold text-stone-900 sm:text-5xl">
//               Contact Us
//             </h1>
//             <p className="mt-5 max-w-md leading-7 text-gray-600">
//               Have a question about a Shivling, custom order or bulk enquiry? Send us a
//               message and our team will respond within 24 hours.
//             </p>

//             <div className="mt-10 space-y-5">
//               <div className="flex items-start gap-4">
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
//                   <EnvironmentOutlined />
//                 </span>
//                 <p className="text-gray-700">{SITE.address}</p>
//               </div>
//               <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-4 text-gray-700 hover:text-brand-700">
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
//                   <PhoneOutlined />
//                 </span>
//                 {SITE.phone}
//               </a>
//               <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 text-gray-700 hover:text-brand-700">
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
//                   <MailOutlined />
//                 </span>
//                 {SITE.email}
//               </a>
//               <a href={SITE.social.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-700 hover:text-green-600">
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
//                   <WhatsAppOutlined />
//                 </span>
//                 Chat on WhatsApp
//               </a>
//             </div>
//           </div>

//           <Card className="rounded-3xl border-0 shadow-card">
//             <Form layout="vertical" form={form} onFinish={mutateAsync}>
//               <Form.Item
//                 label="Full Name"
//                 name="name"
//                 rules={[{ required: true, message: "Please enter your name" }]}
//               >
//                 <Input size="large" placeholder="Your name" />
//               </Form.Item>

//               <Form.Item
//                 label="Phone Number"
//                 name="phone"
//                 rules={[{ required: true, message: "Please enter your phone number" }]}
//               >
//                 <Input size="large" placeholder="10-digit mobile number" />
//               </Form.Item>

//               <Form.Item label="Email (optional)" name="email">
//                 <Input size="large" placeholder="you@example.com" />
//               </Form.Item>

//               <Form.Item
//                 label="Message"
//                 name="message"
//                 rules={[{ required: true, message: "Please enter your message" }]}
//               >
//                 <Input.TextArea rows={5} placeholder="Tell us what you're looking for..." />
//               </Form.Item>

//               <Button
//                 htmlType="submit"
//                 type="primary"
//                 size="large"
//                 block
//                 loading={isPending}
//                 className="!rounded-full !border-none !bg-brand-700 hover:!bg-brand-800"
//               >
//                 Send Inquiry
//               </Button>
//             </Form>
//           </Card>
//         </div>
//       </section>
//     </>
//   );
// }



import {
  Form,
  Input,
  Button,
  Card,
} from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  WhatsAppOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import Seo from "../../components/common/Seo";
import contactService from "../../services/contactService";
import { SITE } from "../../config/constants";

const contactItems = [
  {
    icon: <PhoneOutlined />,
    title: "Call Us",
    value: SITE.phone,
    href: `tel:${SITE.phoneRaw}`,
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <MailOutlined />,
    title: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    color: "bg-red-100 text-red-600",
  },
  {
    icon: <WhatsAppOutlined />,
    title: "WhatsApp",
    value: "Chat with us",
    href: SITE.social.whatsapp,
    color: "bg-green-100 text-green-600",
  },
];
export default function Contact() {
  const [form] = Form.useForm();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (values) => contactService.send(values),

    onSuccess: () => {
      toast.success("Thank you! We will contact you shortly.");
      form.resetFields();
    },

    onError: (err) => {
      toast.error(err.message || "Something went wrong.");
    },
  });

  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact Namdev Narmadeshwar Shivling Art."
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white py-28 mt-2 px-10">

        {/* Background Blur */}

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-amber-200/30 blur-[130px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-200/30 blur-[130px]" />

        <div className="container mx-auto max-w-7xl px-5">

          <div className="mb-14 text-center">

            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-amber-700">
              Get In Touch
            </span>

            <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-6xl">
              We'd Love To Hear From You
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Whether you're looking for a Narmadeshwar Shivling, custom order,
              wholesale inquiry or need guidance, feel free to contact us.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[420px,1fr]">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 lg:sticky lg:top-28 h-fit"
            >

              {/* Address */}

              <Card className="rounded-3xl border-0 shadow-xl">

                <div className="flex gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-2xl text-amber-700">
                    <EnvironmentOutlined />
                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      Visit Our Store
                    </h3>

                    <p className="mt-2 text-gray-600 leading-7">
                      {SITE.address}
                    </p>

                  </div>

                </div>

              </Card>

              {contactItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.title === "WhatsApp" ? "_blank" : ""}
                  rel="noreferrer"
                  whileHover={{ y: -4 }}
                  className="block"
                >
                  <Card className="group rounded-3xl border-0 shadow-lg transition-all duration-300 hover:shadow-2xl">

                    <div className="flex items-center gap-5">

                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xl ${item.color}`}
                      >
                        {item.icon}
                      </div>

                      <div>

                        <h4 className="font-semibold text-gray-900">
                          {item.title}
                        </h4>

                        <p className="text-gray-500 group-hover:text-brand-700 transition">
                          {item.value}
                        </p>

                      </div>

                    </div>

                  </Card>

                </motion.a>
              ))}

            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <Card className="rounded-[32px] border-0 shadow-2xl">

                <div className="mb-8 flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-2xl text-brand-700">
                    <MessageOutlined />
                  </div>

                  <div>

                    <h2 className="text-3xl font-bold">
                      Send a Message
                    </h2>

                    <p className="text-gray-500">
                      We'll respond within 24 hours.
                    </p>

                  </div>

                </div>

                <Form
                  layout="vertical"
                  form={form}
                  onFinish={mutateAsync}
                >
                  <div className="grid gap-5 md:grid-cols-2">

                    <Form.Item
                      label="Full Name"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Enter your name",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        className="rounded-xl"
                        placeholder="John Doe"
                      />
                    </Form.Item>

                    <Form.Item
                      label="Phone Number"
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Enter mobile number",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        className="rounded-xl"
                        placeholder="9876543210"
                      />
                    </Form.Item>

                  </div>

                  <Form.Item
                    label="Email"
                    name="email"
                  >
                    <Input
                      size="large"
                      className="rounded-xl"
                      placeholder="example@gmail.com"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Message"
                    name="message"
                    rules={[
                      {
                        required: true,
                        message: "Enter your message",
                      },
                    ]}
                  >
                    <Input.TextArea
                      rows={6}
                      className="rounded-xl"
                      placeholder="Write your message..."
                    />
                  </Form.Item>

                  <Button
                    htmlType="submit"
                    loading={isPending}
                    type="primary"
                    block
                    size="large"
                    className="h-14 rounded-full border-0 bg-gradient-to-r from-amber-500 to-orange-500 text-lg font-semibold hover:from-amber-600 hover:to-orange-600"
                  >
                    Send Inquiry
                  </Button>

                </Form>

              </Card>

            </motion.div>

          </div>

        </div>

      </section>
    </>
  );
}
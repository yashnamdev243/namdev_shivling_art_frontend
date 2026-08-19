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
import { useMemo, useState } from "react";

import Seo from "../../components/common/Seo";
import contactService from "../../services/contactService";
import { SITE } from "../../config/constants";
import { CONTACT_PAGE_CONTENT, SEO_CONTENT } from "../../config/content";
import { useContent } from "../../context/LanguageContext";
import {
  FaMapMarkerAlt,
  FaDirections,
  FaOm,
  FaLandmark,
  FaClock,
} from "react-icons/fa";
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

const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4281.799203649841!2d75.8461086!3d22.169555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396285fe663a371b%3A0xd15c87bf6c844939!2sNamdev%20Shivling%20Art%20Puratan!5e1!3m2!1sen!2sin!4v1785172586288!5m2!1sen!2sin";

const GOOGLE_MAPS_DIRECTIONS_URL = "https://maps.app.goo.gl/2jWrqE3ATYfnKpQU7";

// Icons for the 4 map feature cards, in the same order as
// CONTACT_PAGE_CONTENT.mapFeatureCards.
const MAP_FEATURE_ICONS = [FaMapMarkerAlt, FaOm, FaLandmark, FaClock];

export default function Contact() {
  const [form] = Form.useForm();
  const [openFAQ, setOpenFAQ] = useState(null);

  const t = useContent(CONTACT_PAGE_CONTENT);
  const seo = useContent(SEO_CONTENT.contact);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: contactService.send,
  });

  // Build the left-column contact cards defensively — if a value isn't
  // configured in SITE (e.g. WhatsApp link missing in a given deployment),
  // skip the card instead of rendering a dead / empty link. Titles/labels
  // come from the active language via `t.contactCardTitles`.
  const contactItems = useMemo(() => {
    const items = [];

    if (SITE.phone && SITE.phoneRaw) {
      items.push({
        key: "phone",
        icon: <PhoneOutlined aria-hidden="true" />,
        title: t.contactCardTitles.phone,
        value: SITE.phone,
        href: `tel:${SITE.phoneRaw}`,
        external: false,
        color: "bg-blue-100 text-blue-600",
      });
    }

    if (SITE.email) {
      items.push({
        key: "email",
        icon: <MailOutlined aria-hidden="true" />,
        title: t.contactCardTitles.email,
        value: SITE.email,
        href: `mailto:${SITE.email}`,
        external: false,
        color: "bg-red-100 text-red-600",
      });
    }

    if (SITE.social?.whatsapp) {
      items.push({
        key: "whatsapp",
        icon: <WhatsAppOutlined aria-hidden="true" />,
        title: t.contactCardTitles.whatsapp,
        value: t.contactCardValues.whatsapp,
        href: SITE.social.whatsapp,
        external: true,
        color: "bg-green-100 text-green-600",
      });
    }

    return items;
  }, [t]);

  const v = t.formFields.validation;

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
          "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        path="/contact"
      />

      <LocalBusinessSchema />

      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white py-12 sm:py-16 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
        {/* Background Blur */}
        <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-amber-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-orange-200/30 blur-[100px] sm:h-80 sm:w-80 sm:blur-[130px]" />

        <div className="container mx-auto max-w-7xl px-0 sm:px-5">
          <div className="mb-12 text-center sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-xs font-semibold text-orange-700 sm:px-5 sm:text-sm">
              {t.badge}
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-tight text-gray-900 sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                {t.titleLine1}
              </span>
              <br />
              <span className="text-slate-900">{t.titleLine2}</span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              {t.description}
            </p>
          </div>

          <div className="my-8 flex flex-wrap justify-center gap-2.5 sm:my-10 sm:gap-4">
            {t.trustPills.map((pill, i) => {
              const colors = [
                "bg-green-100 text-green-700",
                "bg-blue-100 text-blue-700",
                "bg-orange-100 text-orange-700",
                "bg-purple-100 text-purple-700",
              ];

              return (
                <div
                  key={pill}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold sm:px-5 sm:py-2 sm:text-base ${colors[i % colors.length]}`}
                >
                  {pill}
                </div>
              );
            })}
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
                      {t.locationBadge}
                    </span>

                    <h2 className="mt-3 text-xl font-bold text-gray-900 sm:text-2xl">
                      {t.locationTitle}
                    </h2>

                    <p className="mt-3 break-words leading-7 text-gray-600">
                      {SITE.address}
                    </p>

                    <p className="mt-3 text-sm text-gray-500">
                      {t.locationNote}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Cards */}
              {contactItems.map((item) => (
                <motion.a
                  key={item.key}
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
                          {t.contactCardLabel}
                        </span>

                        <h3 className="mt-1 text-base font-bold text-gray-900 sm:text-lg">
                          {item.title}
                        </h3>

                        <p className="mt-1 truncate text-sm text-gray-500 transition duration-300 group-hover:text-orange-600 sm:text-base">
                          {item.value}
                        </p>

                        <span className="mt-3 hidden items-center text-sm font-medium text-orange-500 opacity-0 transition duration-300 group-hover:opacity-100 sm:inline-flex">
                          {t.contactCardCta}
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
                        {t.formBadge}
                      </span>

                      <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                        {t.formTitle}
                      </h2>

                      <p className="mt-2 text-sm text-gray-500 sm:text-base">
                        {t.formSubtitle}
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
                        label={
                          <span className="font-semibold">
                            {t.formFields.name}
                          </span>
                        }
                        name="name"
                        rules={[
                          { required: true, message: v.nameRequired },
                          { min: 3, message: v.nameMin },
                          { max: 50, message: v.nameMax },
                          {
                            pattern: /^[A-Za-z\s'-]+$/,
                            message: v.namePattern,
                          },
                        ]}
                      >
                        <Input
                          prefix={<FiUser className="text-orange-500" />}
                          placeholder={t.formFields.namePlaceholder}
                          size="large"
                          autoComplete="name"
                          className="!h-12 rounded-2xl bg-orange-50/40 transition-all"
                        />
                      </Form.Item>

                      <Form.Item
                        label={
                          <span className="font-semibold">
                            {t.formFields.phone}
                          </span>
                        }
                        name="phone"
                        rules={[
                          { required: true, message: v.phoneRequired },
                          { pattern: /^[6-9]\d{9}$/, message: v.phonePattern },
                        ]}
                      >
                        <Input
                          size="large"
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
                          autoComplete="tel"
                          prefix={<FiPhone className="text-orange-500" />}
                          placeholder={t.formFields.phonePlaceholder}
                          className="!h-12 rounded-2xl bg-orange-50/40 transition-all"
                        />
                      </Form.Item>
                    </div>

                    <Form.Item
                      label={
                        <span className="font-semibold">
                          {t.formFields.email}
                        </span>
                      }
                      name="email"
                      rules={[
                        { required: true, message: v.emailRequired },
                        { type: "email", message: v.emailInvalid },
                      ]}
                    >
                      <Input
                        size="large"
                        type="email"
                        autoComplete="email"
                        prefix={<FiMail className="text-orange-500" />}
                        placeholder={t.formFields.emailPlaceholder}
                        className="!h-12 rounded-2xl bg-orange-50/40 transition-all"
                      />
                    </Form.Item>

                    <Form.Item
                      label={t.formFields.subject}
                      name="subject"
                      rules={[{ required: true, message: v.subjectRequired }]}
                    >
                      <Select
                        size="large"
                        placeholder={t.formFields.subjectPlaceholder}
                        className="!h-12 rounded-2xl [&_.ant-select-selector]:!h-12 [&_.ant-select-selector]:!items-center"
                        options={t.formFields.subjectOptions.map((label) => ({
                          label,
                          value: label,
                        }))}
                      />
                    </Form.Item>

                    <Form.Item
                      label={
                        <span className="font-semibold">
                          {t.formFields.message}
                        </span>
                      }
                      name="message"
                      rules={[
                        { required: true, message: v.messageRequired },
                        { min: 20, message: v.messageMin },
                        { max: 500, message: v.messageMax },
                      ]}
                    >
                      <Input.TextArea
                        rows={6}
                        placeholder={t.formFields.messagePlaceholder}
                        maxLength={500}
                        showCount
                        className="rounded-2xl bg-orange-50/40"
                      />
                    </Form.Item>

                    <div className="mb-8 rounded-2xl border border-green-100 bg-green-50 p-4 sm:p-5">
                      <div className="flex items-start gap-3">
                        <FiCheckCircle
                          className="mt-1 shrink-0 text-green-600"
                          size={20}
                          aria-hidden="true"
                        />
                        <div>
                          <h4 className="font-semibold">{t.whyContactTitle}</h4>
                          <p className="mt-1 text-sm leading-6 text-gray-600">
                            {t.whyContactDescription}
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
                        <FiSend
                          className="transition group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                        <span>
                          {isPending ? t.submitButtonLoading : t.submitButton}
                        </span>
                      </div>
                    </Button>

                    <p className="mt-4 text-center text-xs text-gray-500 sm:text-sm">
                      {t.privacyNote}
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
              {t.faqBadge}
            </span>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:mt-6 sm:text-4xl md:text-5xl">
              {t.faqTitleLine1}
              <span className="block bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                {t.faqTitleLine2}
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:mt-5 sm:text-lg sm:leading-8">
              {t.faqDescription}
            </p>
          </div>

          <div className="mt-10 space-y-4 sm:mt-14 sm:space-y-5">
            {t.faqs.map((faq, index) => {
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
                      animate={{
                        rotate: open ? 180 : 0,
                        scale: open ? 1.15 : 1,
                      }}
                      transition={{ duration: 0.25 }}
                      className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500 sm:h-12 sm:w-12"
                    >
                      {open ? (
                        <FiMinus size={20} aria-hidden="true" />
                      ) : (
                        <FiPlus size={20} aria-hidden="true" />
                      )}
                    </motion.div>
                  </button>

                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={false}
                    animate={{
                      height: open ? "auto" : 0,
                      opacity: open ? 1 : 0,
                    }}
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
                            {t.faqAnswerBadge}
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
                {t.mapBadge}
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:mt-6 sm:text-4xl md:text-5xl">
                {t.mapTitleLine1}
                <span className="block bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  {t.mapTitleLine2}
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
                {t.mapDescription}
              </p>
            </div>

            {/* Map */}
            <div className="relative mt-10 overflow-hidden rounded-[24px] border border-orange-100 bg-white p-2 shadow-2xl sm:mt-14 sm:rounded-[32px] sm:p-3">
              <iframe
                src={GOOGLE_MAPS_EMBED_SRC}
                loading="lazy"
                allowFullScreen
                title={`${SITE.name} Google Map`}
                className="h-[260px] w-full rounded-2xl sm:h-[320px] sm:rounded-3xl md:h-[580px]"
              />

              {/* Floating Card (desktop) */}
              <div className="absolute bottom-6 left-6 hidden rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur-lg lg:block">
                <h3 className="text-xl font-bold">{SITE.name}</h3>
                <p className="mt-2 text-gray-600">
                  {SITE.district}, {SITE.state}
                </p>
                <a
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 font-semibold text-white transition hover:scale-105"
                >
                  <FaDirections aria-hidden="true" />
                  {t.directions}
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
                {t.directions}
              </a>
            </div>

            {/* Feature Cards */}
            <div className="mb-10 mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-4">
              {t.mapFeatureCards.map((card, i) => {
                const Icon = MAP_FEATURE_ICONS[i];

                return (
                  <div
                    key={card.title}
                    className="rounded-3xl bg-white p-5 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl sm:p-7"
                  >
                    <Icon
                      className="text-2xl text-orange-500 sm:text-3xl"
                      aria-hidden="true"
                    />
                    <h3 className="mt-3 text-base font-bold sm:mt-4 sm:text-lg">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-gray-600 sm:mt-2 sm:text-base">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>
      </section>
    </>
  );
}

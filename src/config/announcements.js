import {
  FaTruck,
  FaGift,
  FaPhoneAlt,
  FaOm,
} from "react-icons/fa";

import {
  GiStonePile,
} from "react-icons/gi";

import { SITE } from "./constants";

export const ANNOUNCEMENTS = [
  {
    icon: FaTruck,
    text: "Free Shipping Across India",
  },
  {
    icon: FaGift,
    text: "Bulk Order Discount Available",
  },
  {
    icon: FaOm,
    text: "100% Original Narmadeshwar Shivlings",
  },
  {
    icon: FaPhoneAlt,
    text: SITE.phone,
  },
  {
    icon: GiStonePile,
    text: "Custom Shivling Orders Accepted",
  },
];
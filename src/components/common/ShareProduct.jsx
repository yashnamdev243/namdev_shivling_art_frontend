import { useState } from "react";
import { Popover } from "antd";
import {
  ShareAltOutlined,
  WhatsAppOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import toast from "react-hot-toast";

/**
 * Drop-in share button for a product (or any page).
 *  - On devices that support the native Web Share sheet (most phones),
 *    tapping it opens that directly -- the fastest, most familiar flow.
 *  - Everywhere else it opens a small popover with WhatsApp / Facebook /
 *    X (Twitter) share links plus a "Copy link" action.
 */
export default function ShareProduct({ url, title, className = "", variant = "icon" }) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const shareText = title ? `Check out "${title}"` : "Check this out";

  const canNativeShare = typeof navigator !== "undefined" && !!navigator.share;

  const handleClick = async () => {
    if (!canNativeShare) {
      setOpen(true);
      return;
    }

    try {
      await navigator.share({ title, text: shareText, url: shareUrl });
    } catch {
      // AbortError when the user dismisses the native sheet -- nothing to do.
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Link copied");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy the link");
    }
  };

  const links = [
    {
      key: "whatsapp",
      label: "WhatsApp",
      icon: <WhatsAppOutlined aria-hidden="true" />,
      href: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
      color: "text-green-600",
    },
    {
      key: "facebook",
      label: "Facebook",
      icon: <FacebookOutlined aria-hidden="true" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "text-blue-600",
    },
    {
      key: "twitter",
      label: "X / Twitter",
      icon: <TwitterOutlined aria-hidden="true" />,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: "text-slate-800",
    },
  ];

  const popoverContent = (
    <div className="flex w-52 flex-col gap-1">
      {links.map((link) => (
        <a
          key={link.key}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium transition hover:bg-orange-50 ${link.color}`}
        >
          <span className="text-lg">{link.icon}</span>
          {link.label}
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        className="flex items-center gap-3 rounded-lg px-2 py-2 text-left text-sm font-medium text-gray-700 transition hover:bg-orange-50"
      >
        <span className="text-lg">{copied ? <CheckOutlined className="text-green-600" /> : <LinkOutlined />}</span>
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );

  if (variant === "button") {
    return (
      <Popover
        content={popoverContent}
        trigger="click"
        open={canNativeShare ? false : open}
        onOpenChange={setOpen}
      >
        <button
          type="button"
          onClick={handleClick}
          className={`inline-flex items-center gap-2 rounded-xl border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm transition hover:border-orange-400 ${className}`}
        >
          <ShareAltOutlined aria-hidden="true" />
          Share
        </button>
      </Popover>
    );
  }

  return (
    <Popover
      content={popoverContent}
      trigger="click"
      open={canNativeShare ? false : open}
      onOpenChange={setOpen}
    >
      <button
        type="button"
        onClick={handleClick}
        aria-label="Share this product"
        className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow backdrop-blur transition hover:bg-orange-500 hover:text-white sm:h-10 sm:w-10 ${className}`}
      >
        <ShareAltOutlined aria-hidden="true" />
      </button>
    </Popover>
  );
}
// Reusable form validation helpers -- plain functions so they work with
// both Ant Design's Form rules and any custom form we build in admin.

export const isRequired = (message = "This field is required") => ({
  required: true,
  message,
});

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value || "");
}

export function isValidPhone(value) {
  return /^[6-9]\d{9}$/.test((value || "").replace(/\D/g, "").slice(-10));
}

export function isPositiveNumber(value) {
  return Number(value) > 0;
}

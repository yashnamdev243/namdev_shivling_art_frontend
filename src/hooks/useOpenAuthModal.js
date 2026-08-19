import { useLocation, useNavigate } from "react-router-dom";

/**
 * Opens /login or /register as a modal-over-background instead of a
 * full page: it remembers the current location as `backgroundLocation`
 * so AppRoutes keeps rendering it behind the auth modal.
 */
export function useOpenAuthModal() {
  const location = useLocation();
  const navigate = useNavigate();

  return (path, extraState = {}) => {
    // If we're already inside a modal (e.g. Login -> Register link),
    // keep the ORIGINAL background instead of using the modal itself
    // as the new background.
    const backgroundLocation = location.state?.backgroundLocation || location;

    navigate(path, {
      state: {
        backgroundLocation,
        from: location.state?.from || location.pathname + location.search,
        ...extraState,
      },
    });
  };
}

export default useOpenAuthModal;
import { useUserAuth } from "../context/UserAuthContext";
export default function useAuth() {
  return useUserAuth();
}

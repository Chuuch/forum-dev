import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import axiosInstance from "@/lib/axios";

interface RegisterData {
  email: string;
  password: string;
  username: string;
}

export const useRegister = () => {
  const setUser = useAuthStore((s) => s.setUser);
  const setAuthenticated = useAuthStore((s) => s.setAuthenticated);

  const mutation = useMutation({
    mutationFn: async (data: RegisterData) => {
      const res = await axiosInstance.post("/api/auth/register", data, {
        withCredentials: true,
      });
      return res.data.user;
    },
    onSuccess: (user) => {
      setUser(user);
      setAuthenticated(true);
    },
  });
  return mutation; // returns the whole mutation object, including `mutate`
};

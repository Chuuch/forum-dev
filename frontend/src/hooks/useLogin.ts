// hooks/useLogin.ts
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import axiosInstance from "@/lib/axios";

interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);

  const mutation = useMutation({
    mutationFn: async (data: LoginData) => {
      const res = await axiosInstance.post("/auth/login", data, {
        withCredentials: true,
      });
      return res.data.user;
    },
    onSuccess: (user) => {
      setUser(user);
      setAuthenticated(true);
    },
  });
  return mutation;
};

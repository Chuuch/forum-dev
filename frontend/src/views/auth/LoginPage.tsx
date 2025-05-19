import { useForm } from "react-hook-form";
import { loginSchema } from "../../lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { Spinner } from "../../components/ui/spinner";
import { Separator } from "../../components/ui/separator";
import GoogleLoginButton from "../../components/ui/google-button";
import { Label } from "../../components/ui/label";
import { KeyRound, Mail, Fingerprint, LogIn } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/hooks/useLogin";
import { motion } from "framer-motion";

export default function LoginPage() {
  const mutation = useLogin();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  interface FormData {
    email: string;
    password: string;
  }

  const onSubmit = (data: FormData) => {
    setError(null);
    setLoading(true);
    mutation.mutate(data, {
      onSuccess: () => {
        toast.success("Влязохте успешно!");
        navigate("/");
      },
      onError: (error) => {
        setError(error?.message || "Възникна грешка при влизане.");
        toast.error(error?.message || "Възникна грешка при влизане.");
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.0, ease: "easeOut" }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-white dark:bg-slate-950 p-6 rounded-lg dark:outline dark:outline-gray-800 space-y-4 shadow-lg"
      >
        <h1 className="flex items-center text-3xl text-primary/80 font-bold gap-2">
          Влез в своя профил
          <Fingerprint size={28} />
        </h1>

        {error && <p className="text-primary">{error}</p>}

        <div className="mb-4 space-y-1">
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-300">
            <Mail size={16} className="text-primary" />
            Имейл
          </Label>
          <Input
            {...register("email")}
            type="email"
            required
            placeholder="john@example.com"
            onChange={() => error && setError(null)}
            className="w-full px-3 py-2 dark:border rounded-lg shadow-sm focus:ring-none  outline-none focus:outline-none text-gray-400 dark:bg-blue-950/10 dark:border-stone-900"
          />
          {errors.email && (
            <p className="text-primary">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-300">
            <KeyRound size={16} className="text-primary" />
            Парола
          </Label>
          <Input
            {...register("password")}
            type="password"
            placeholder="********"
            onChange={() => error && setError(null)}
            className="w-full px-3 py-2 dark:border rounded-lg shadow-sm focus:ring-none  outline-none focus:outline-none text-gray-400 dark:bg-blue-950/10 dark:border-stone-900"
          />
          {errors.password && (
            <p className="text-primary">{errors.password.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="default"
          className="w-full p-2 rounded-md bg-primary "
        >
          {loading ? (
            <Spinner />
          ) : (
            <>
              Влез <LogIn />
            </>
          )}
        </Button>

        <p className="flex items-center justify-start gap-1 mt-2 text-xs text-gray-400">
          Все още нямате регистрация?{" "}
          <Link to="/register" className="hover:underline text-primary">
            Създай профил.
          </Link>
        </p>

        <div className="flex items-center w-full text-gray-500 gap-12">
          <Separator className="flex-1" />
          <p>или</p>
          <Separator className="flex-1" />
        </div>

        <GoogleLoginButton />

        <div className="mt-4 text-xs text-gray-500 text-center">
          Този сайт е защитен от reCAPTCHA и се прилагат{" "}
          <Link
            to="https://policies.google.com/privacy"
            className="text-primary hover:underline"
          >
            Политиката за поверителност{" "}
          </Link>
          и{" "}
          <Link
            to="https://policies.google.com/terms"
            className="text-primary hover:underline"
          >
            Условията за ползване{" "}
          </Link>
          на Google.
        </div>
      </form>
    </motion.div>
  );
}

import { useForm } from "react-hook-form";
import { registerSchema } from "../../lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { KeyRound, Mail, UserRound, UserRoundPlus } from "lucide-react";
import { Spinner } from "../../components/ui/spinner";
import { Separator } from "../../components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useRegister } from "@/hooks/useRegister";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const mutation = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  interface FormData {
    email: string;
    password: string;
    username: string;
  }

  const onSubmit = (data: FormData) => {
    setError(null);
    mutation.mutate(data, {
      onSuccess: () => {
        toast.success("Регистрацията е успешна!");
        navigate("/");
      },
      onError: (error) => {
        setError(error?.message || "Възникна грешка при регистрацията.");
        toast.error(error?.message || "Възникна грешка при регистрацията.");
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
        <h1 className="flex items-center text-3xl text-primary font-bold gap-2">
          Създай профил
          <UserRoundPlus size={28} />
        </h1>

        {error && <p className="text-primary">{error}</p>}

        <div className="mb-4 space-y-1">
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-300">
            <UserRound className="text-primary" size={16} />
            Потребителско име
          </Label>
          <Input
            {...register("username")}
            type="text"
            required
            placeholder="Сатоши Накамото"
            className="w-full px-3 py-2 dark:border rounded-lg shadow-sm outline-none focus:outline-none text-gray-400 dark:bg-blue-950/10 dark:border-stone-900"
          />
          {errors.username && (
            <p className="text-primary">{errors.username.message}</p>
          )}
        </div>

        <div className="mb-4 space-y-1">
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-300">
            <Mail className="text-primary" size={16} />
            Имейл
          </Label>
          <Input
            {...register("email")}
            required
            placeholder="dailyblock@example.com"
            className="w-full px-3 py-2 dark:border rounded-lg shadow-sm outline-none focus:outline-none text-gray-400 dark:bg-blue-950/10 dark:border-stone-900"
          />
          {errors.email && (
            <p className="text-primary">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4 space-y-1">
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-300">
            <KeyRound className="text-primary" size={16} />
            Парола
          </Label>
          <Input
            {...register("password")}
            type="password"
            required
            placeholder="**********"
            className="w-full px-3 py-2 dark:border rounded-lg shadow-sm outline-none focus:outline-none text-gray-400 dark:bg-blue-950/10 dark:border-stone-900"
          />
          {errors.password && (
            <p className="text-primary">{errors.password.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="default"
          className="flex items-center w-full p-2 rounded-md bg-primary"
          disabled={status === "pending"}
        >
          {status === "pending" ? (
            <>
              {" "}
              <Spinner />
            </>
          ) : (
            <>
              Създай профил <UserRoundPlus />{" "}
            </>
          )}
        </Button>

        <p className="flex items-center justify-start gap-1 mt-2 text-xs text-gray-400">
          Вече имате регистрация?{" "}
          <Link to="/login" className="hover:underline text-primary">
            Влез в своя профил.
          </Link>
        </p>

        <Separator className="flex-1 w-full text-gray-700" />

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

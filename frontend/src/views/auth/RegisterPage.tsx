import { useForm } from "react-hook-form";
import { registerSchema } from "../../lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { db } from "../../config/db";
import { GiQuillInk } from "react-icons/gi";
import toast from "react-hot-toast";
import { Spinner } from "../../components/ui/spinner";
import { Separator } from "../../components/ui/separator";
export default function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
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

  const onSubmit = async (data: FormData) => {
    setError(null);
    setLoading(true);
    const { error: signUpError } = await db.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
    } else {
      toast.success("Signed up successfully");
      navigate("/");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto dark:bg-slate-950 p-6 rounded-lg outline dark:outline-gray-800 space-y-4 shadow-xl"
    >
      <h1 className="flex items-center text-3xl text-teal-400 font-bold gap-1">
        Създай профил
        <GiQuillInk size={28} />
      </h1>

      {error && <p className="text-teal-500">{error}</p>}

      <div className="mb-4">
        <label className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Потребителско име
        </label>
        <input
          {...register("username")}
          type="name"
          required
          placeholder="Сатоши Накамото"
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 border-gray-600 outline-none focus:outline-none text-gray-400 dark:bg-blue-950/10 dark:border-stone-900"
        />
        {errors.username && (
          <p className="text-teal-500">{errors.username.message}</p>
        )}
      </div>

      <div className="mb-4 space-y-1">
        <label className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Имейл
        </label>
        <input
          {...register("email")}
          required
          placeholder="dailyblock@example.com"
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 border-gray-600 outline-none focus:outline-none text-gray-400 dark:bg-blue-950/10 dark:border-stone-900"
        />
        {errors.email && (
          <p className="text-teal-500">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Парола
        </label>
        <input
          {...register("password")}
          type="password"
          required
          placeholder="**********"
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 border-gray-900 outline-none focus:outline-none text-gray-400 dark:bg-blue-950/10 dark:border-stone-900"
        />
        {errors.password && (
          <p className="text-teal-500">{errors.password.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="default"
        className="w-full text-white p-2 rounded-md cursor-pointer bg-teal-500 hover:bg-teal-400"
      >
        {loading ? <Spinner className="text-white" /> : "Създай"}
      </Button>

      <p className="flex items-center justify-start gap-1 mt-2 text-xs text-gray-400">
        Вече имате регистрация?{" "}
        <Link to="/login" className="hover:underline text-teal-400">
          Влез в своя профил.
        </Link>
      </p>

      <Separator className="flex-1 w-full text-gray-700" />

      <div className="mt-4 text-xs text-gray-500 text-center">
        Този сайт е защитен от reCAPTCHA и се прилагат{" "}
        <Link
          to="https://policies.google.com/privacy"
          className="text-teal-500 hover:underline"
        >
          Политиката за поверителност{" "}
        </Link>
        и{" "}
        <Link
          to="https://policies.google.com/terms"
          className="text-teal-500 hover:underline"
        >
          Условията за ползване{" "}
        </Link>
        на Google.
      </div>
    </form>
  );
}

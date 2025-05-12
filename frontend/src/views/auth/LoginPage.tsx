import { useForm } from "react-hook-form";
import { loginSchema } from "../../lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { db } from "../../config/db";
import { TbShieldLock } from "react-icons/tb";
import toast from "react-hot-toast";
import { Spinner } from "../../components/ui/spinner";
import { Separator } from "../../components/ui/separator";
import GoogleLoginButton from "../../components/ui/google-button";

export default function LoginPage() {
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

  const onSubmit = async (data: FormData) => {
    setError(null);
    setLoading(true);
    const { error: signInError } = await db.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    if (signInError) {
      setError(signInError.message);
      setLoading(false);
    } else {
      toast.success(`Добре дошли!`);
      navigate("/");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto dark:bg-slate-950 p-6 rounded-lg outline dark:outline-gray-800 space-y-4 shadow-xl"
    >
      <h1 className="flex items-center text-3xl text-teal-400 font-bold gap-2">
        Впишете се
        <TbShieldLock size={28} />
      </h1>

      {error && <p className="text-teal-500">{error}</p>}

      <div className="mb-4 space-y-1">
        <label className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Имейл
        </label>
        <input
          {...register("email")}
          type="email"
          required
          placeholder="john@example.com"
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
          placeholder="********"
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 border-gray-600 outline-none focus:outline-none text-gray-400 dark:bg-blue-950/10 dark:border-stone-900"
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
        {loading ? <Spinner className="text-white" /> : "Влез"}
      </Button>

      <p className="flex items-center justify-start gap-1 mt-2 text-xs text-gray-400">
        Все още нямате регистрация?{" "}
        <Link to="/register" className="hover:underline text-teal-400">
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

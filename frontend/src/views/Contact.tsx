import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactSchema } from "../lib/zodSchemas";
import toast from "react-hot-toast";
import { TbMail } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { Spinner } from "../components/ui/spinner";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";

interface FormData {
  username: string;
  email: string;
  message: string;
}
export default function ContactPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormData) => {
    setError(null);
    setLoading(true);

    setLoading(false);
    toast.success("Signed up successfully");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto dark:bg-slate-950 p-6 rounded-lg outline outline-gray-800 space-y-4"
    >
      <h1 className="flex items-center text-3xl text-teal-400 font-bold gap-2">
        Свържете се с нас <TbMail size={28} />
      </h1>
      <div className="mb-4 space-y-1">
        <label className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Потребителско име
        </label>
        <input
          type="text"
          {...register("username")}
          placeholder="Сатоши Накамото"
          required
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 border-gray-600 outline-none focus:outline-none text-gray-400 dark:bg-blue-950/10 dark:border-stone-900"
        />
        {errors.username && (
          <p className="text-teal-500">{errors.username.message}</p>
        )}
      </div>
      <div className="mb-4 space-y-1">
        <label className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="john@example.com"
          required
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 border-gray-600 outline-none focus:outline-none text-gray-400 dark:bg-blue-950/10 dark:border-stone-900"
        />
        {errors.email && (
          <p className="text-teal-500">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4 space-y-1">
        <label className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Съобщение
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Как можем да ви помогнем?"
          required
          className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 border-gray-600 outline-none focus:outline-none text-gray-400 dark:bg-blue-950/10 dark:border-stone-900"
        />
        {errors.message && (
          <p className="text-teal-500">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="default"
        className="w-full text-white p-2 rounded-md cursor-pointer bg-teal-500 hover:bg-teal-400"
      >
        {loading ? <Spinner /> : "Изпрати съобщение"}
      </Button>

      <div className="flex items-center w-full text-gray-500 gap-12">
        <Separator className="flex-1" />
        <p>или</p>
        <Separator className="flex-1" />
      </div>

      <p className="mt-2 text-xs text-gray-400 text-center">
        Имате въпрос? Свържете се с нас на{" "}
        <a
          href="mailto:support@yourforum.com"
          className="text-teal-400 hover:underline"
        >
          support@dailyblock.com
        </a>
      </p>
    </form>
  );
}

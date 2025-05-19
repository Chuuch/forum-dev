import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactSchema } from "../lib/zodSchemas";
import toast from "react-hot-toast";
import { Mail, MessageSquareText, Unplug, UserRound, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { Spinner } from "../components/ui/spinner";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

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
    <>
      <header>
        <title>TheDailyBlock | Свържете се с нас</title>
      </header>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto bg-white dark:bg-slate-950 p-6 rounded-lg dark:outline outline-gray-800 shadow-lg space-y-4"
        >
          <h1 className="flex items-center text-3xl text-primary font-bold gap-2">
            Свържете се с нас <Unplug size={28} />
          </h1>
          <div className="mb-4 space-y-1">
            <Label className="text-sm font-medium text-gray-500 dark:text-gray-300">
              <UserRound className="text-primary" size={16} />
              Потребителско име
            </Label>
            <Input
              type="text"
              {...register("username")}
              placeholder="Сатоши Накамото"
              required
              className="w-full px-3 py-2 rounded-lg shadow-sm outline-none focus:outline-none text-gray-400 dark:bg-blue-950/10 dark:border-stone-900"
            />
            {errors.username && (
              <p className="text-primary">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-4 space-y-1">
            <Label className="text-sm font-medium text-gray-500 dark:text-gray-300">
              <Mail className="text-primary" size={16} />
              Email
            </Label>
            <Input
              {...register("email")}
              type="email"
              placeholder="john@example.com"
              required
              className="w-full px-3 py-2 dark:border rounded-lg shadow-sm outline-none focus:outline-none text-gray-400 dark:bg-blue-950/10 dark:border-stone-900"
            />
            {errors.email && (
              <p className="text-primary">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4 space-y-1">
            <Label className="text-sm font-medium text-gray-500 dark:text-gray-300">
              <MessageSquareText className="text-primary" size={16} />
              Съобщение
            </Label>
            <Textarea
              {...register("message")}
              rows={4}
              placeholder="Как можем да ви помогнем?"
              required
              className="w-full min-h-32 px-3 py-2 rounded-lg shadow-sm outline-none focus:outline-none text-gray-400 dark:bg-blue-950/10 dark:border-stone-900"
            />
            {errors.message && (
              <p className="text-teal-500">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            variant="default"
            className="w-full text-white p-2 rounded-md cursor-pointer bg-primary"
          >
            {loading ? (
              <Spinner />
            ) : (
              <>
                Изпрати съобщение <Send />
              </>
            )}
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
              className="text-primary hover:underline"
            >
              support@dailyblock.com
            </a>
          </p>
        </form>
      </motion.div>
    </>
  );
}

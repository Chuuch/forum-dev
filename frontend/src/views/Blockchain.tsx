import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Blockchain() {
  return (
    <>
      <header>
        <title>TheDailyBlock | Какво е всъщност Блокчейн?</title>
      </header>
      <div className="max-w-5xl mx-auto p-6 text-gray-400">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold text-primary mb-6">
            Какво е всъщност Блокчейн?
          </h1>
          <p className="text-lg mb-4">
            Блокчейн е{" "}
            <span className="text-blue-400 font-semibold">
              децентрализирана
            </span>{" "}
            и <span className="text-teal-300 font-semibold">разпределена</span>{" "}
            технология, която съхранява информация в последователност от
            блокове, свързани чрез криптографски механизми.
          </p>

          <h2 className="text-3xl text-sky-400 font-semibold mt-6">
            Основни характеристики
          </h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>
              <span className="text-blue-300 font-semibold">
                Децентрализация
              </span>{" "}
              – няма централен орган, който да контролира данните.
            </li>
            <li>
              <span className="text-teal-500 font-semibold">Прозрачност</span> –
              всеки участник в мрежата може да провери информацията.
            </li>
            <li>
              <span className="text-purple-300 font-semibold">Неизменност</span>{" "}
              – записите не могат да бъдат променяни или изтривани.
            </li>
          </ul>

          <h2 className="text-3xl text-sky-400 font-semibold mt-6">
            Как работи Блокчейн?
          </h2>
          <p className="mt-4">
            Всеки блок съдържа информация за транзакции, уникален идентификатор
            (хеш) и хеша на предишния блок, което създава{" "}
            <span className="text-blue-400 font-semibold">
              верига от блокове
            </span>
            . Това прави технологията изключително сигурна и устойчива на
            манипулации.
          </p>

          <h2 className="text-3xl text-sky-400 font-semibold mt-6">
            Приложения на Блокчейн
          </h2>
          <p className="mt-4">
            Технологията намира приложение в различни индустрии:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>
              <span className="text-teal-400 font-semibold">Криптовалути</span>{" "}
              – Bitcoin, Ethereum и други.
            </li>
            <li>
              <span className="text-blue-300 font-semibold">
                Финансови услуги
              </span>{" "}
              – сигурни и прозрачни транзакции.
            </li>
            <li>
              <span className="text-purple-300 font-semibold">
                Здравеопазване
              </span>{" "}
              – сигурно съхранение на медицински досиета.
            </li>
            <li>
              <span className="text-gray-400 font-semibold">
                Управление на веригите за доставки
              </span>{" "}
              – проследяване на стоки в реално време.
            </li>
          </ul>

          <h2 className="text-3xl text-sky-400 font-semibold mt-6">
            Заключение
          </h2>
          <p className="mt-4">
            Блокчейн е{" "}
            <span className="text-teal-500 font-semibold">
              революционна технология
            </span>
            , която трансформира начина, по който обменяме информация и
            стойност. С нейната помощ можем да изградим по-сигурни, прозрачни и
            ефективни системи.
          </p>

          <p className="mt-6">
            Научи повече:{" "}
            <Link
              to="https://bitcoin.org/bg/how-it-works"
              className="text-blue-400 underline"
            >
              Как работи Биткойн?
            </Link>
          </p>
        </motion.div>
      </div>
    </>
  );
}

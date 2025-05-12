import { Link } from "react-router-dom";

export default function SmartContracts() {
  return (
    <>
      <header>
        <title>TheDailyBlock | Смарт контракти</title>
      </header>
      <div className="max-w-3xl mx-auto py-12 px-6 text-gray-400">
        <h1 className="text-4xl font-bold text-teal-400 mb-6">
          Смарт контракти и одитиране на смарт контракти
        </h1>

        <p className="text-lg text-gray-400 mb-4">
          Смарт контрактите са самоуправляващи се програми, които изпълняват
          определени действия автоматично, когато са изпълнени зададените
          условия. Те работят върху блокчейн мрежи като Ethereum и BNB Smart
          Chain.
        </p>

        <h2 className="text-2xl font-semibold text-blue-400 mt-6">
          Как работят смарт контрактите?
        </h2>
        <p className="text-gray-400 mb-4">
          Смарт контрактите елиминират нуждата от посредници, като изпълняват
          логиката си автоматично след подписването. Кодът на контракта се
          съхранява в блокчейна и е неизменяем.
        </p>

        <h2 className="text-2xl font-semibold text-purple-300 mt-6">
          Одитиране на смарт контракти
        </h2>
        <p className="text-gray-400 mb-4">
          Одитирането е процесът на преглед на кода на смарт контрактите, за да
          се гарантира, че няма уязвимости. Това включва анализ на сигурността,
          тестване и симулация на потенциални атаки.
        </p>

        <h3 className="text-xl font-semibold text-pink-400 mt-6">
          Популярни компании за одит
        </h3>
        <ul className="list-disc pl-6 text-gray-400 mb-4">
          <li>Pashov Audit Group</li>
          <li>Trail Of Bits</li>
          <li>Quantstamp</li>
          <li>OpenZeppelin</li>
        </ul>

        <h3 className="text-xl font-semibold text-teal-500 mt-6">
          Примерен Solidity код на смарт контракт
        </h3>
        <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-gray-300">
          <p className="flex flex-col">
            {`
            SPDX-License-Identifier: MIT //
            pragma solidity ^0.8.0; 

            contract SimpleContract {
              address public owner;
              constructor() {
              owner = msg.sender;
            }`}
          </p>
        </pre>

        <p className="text-gray-400 mt-6">
          Ако искате да научите повече за смарт контрактите, посетете
          <Link
            to="https://ethereum.org/en/developers/docs/smart-contracts/"
            className="text-blue-300 underline"
          >
            официалната документация на Ethereum
          </Link>
          .
        </p>
      </div>
    </>
  );
}

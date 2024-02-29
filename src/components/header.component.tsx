import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="min-h-screen px-4 h-96 flex flex-col justify-center bg-gradient-to-tr from-slate-900 to-slate-400">
      <div className="text-center m-auto text-transparent bg-clip-text bg-gradient-to-br from-slate-400 via-slate-300 to-slate-200">
        {/* //TODO: Проработать буквы в лого - возможна 3D стилизация или что то такое */}
        <h1 className="text-6xl font-medium">
          Gecko
        </h1>

        <p className="text-xl text-center">
          {"A personal guide to your city's historical treasures"}
        </p>
      </div>

      {/* //TODO: Подумать над надписью + шрифт */}
      <h3 className="text-2xl text-end font-mono font-medium text mb-2 mt-auto text-transparent bg-gradient-to-r bg-clip-text from-slate-900 via-slate-800 to-slate-300">
        {"<//*Gecko for users />"}
      </h3>
    </header>
  );
};

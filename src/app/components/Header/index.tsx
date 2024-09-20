import Image from "next/image";
import React from "react";

const Header = () => {
  const currentDate = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "2-digit", // Deve ser '2-digit' ou 'numeric'
    month: "long",
    year: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("pt-BR", options);

  return (
    <header className=" max-w-[272px] w-full flex flex-col  border-b-2 border-[#d6dde9] pb-6 gap-2 m-auto lg:flex-row lg:max-w-[1328px] lg:justify-between lg:items-center">
      <div className="flex gap-2">
        <Image src="/logomark.svg" width={33} height={32} alt="logo mark" />
        <Image src="/logotype.svg" width={106} height={15} alt="logo mark" />
      </div>

      <h1 className="text-black text-base font-medium font-['Inter Tight']lg:text-center lg:text-2xl lg:relative lg:left-16">
        Bem-vindo de volta, Marcus
      </h1>
      <span className="text-black/50 text-base font-normal font-[Inter Tight]">
        {formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}
      </span>
    </header>
  );
};

export default Header;

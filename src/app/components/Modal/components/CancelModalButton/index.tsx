type ButtonProps = {
  onClick: () => void;
};

const CancelModalButton = ({ onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`h-[51px] px-6 py-4  bg-[#e7eefb]  rounded-lg justify-center items-center gap-2 inline-flex lg:flex-1   `}
    >
      <div className={` text-black text-base font-medium font-['Inter Tight']`}>
        Cancelar
      </div>
    </button>
  );
};

export default CancelModalButton;

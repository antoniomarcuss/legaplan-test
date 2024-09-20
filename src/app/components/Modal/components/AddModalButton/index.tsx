type buttonProps = { handleSubmit: (e: React.FormEvent) => void };

const AddModalButton = ({ handleSubmit }: buttonProps) => {
  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className={`h-[51px] px-6 py-4  bg-gradient-to-r from-[#0795d3] to-[#52c0ef]  rounded-lg justify-center items-center gap-2 inline-flex lg:flex-1   `}
    >
      <div className={` text-white text-base font-medium font-['Inter Tight']`}>
        Adicionar
      </div>
    </button>
  );
};

export default AddModalButton;

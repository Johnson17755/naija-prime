interface NextContentProps {
  onNext: () => void;
}

const NextContent: React.FC<NextContentProps> = ({ onNext }) => {
  return (
    <div>
      <button
        className="bg-[#0BF931] py-1 px-3 text-xs font-bold"
        onClick={onNext}
      >
        NEXT CONTENT
      </button>
    </div>
  );
};

export default NextContent;

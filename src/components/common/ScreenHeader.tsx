import { useNavigate } from "react-router-dom";

interface ScreenHeaderProps {
  title: string;
  showBackButton?: boolean;
  rightElement?: React.ReactNode;
}

const ScreenHeader = ({
  title,
  showBackButton = true,
  rightElement,
}: ScreenHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="relative flex items-center justify-center px-6 pb-6 pt-14 lg:pt-8">
      {showBackButton && (
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="absolute left-6 text-4xl leading-none text-[#181725]"
          aria-label="Go back"
        >
          ‹
        </button>
      )}

      <h1 className="text-[22px] font-bold text-[#181725] lg:text-3xl">
        {title}
      </h1>

      {rightElement && <div className="absolute right-6">{rightElement}</div>}
    </header>
  );
};

export default ScreenHeader;

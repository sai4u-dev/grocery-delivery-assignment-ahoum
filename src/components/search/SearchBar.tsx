interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search Store",
}: SearchBarProps) => {
  return (
    <div className="flex h-[52px] items-center gap-3 rounded-[15px] bg-[#F2F3F2] px-4">
      <span className="text-xl">🔍</span>

      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-[15px] font-semibold text-[#181725] outline-none placeholder:text-[#7C7C7C]"
      />
    </div>
  );
};

export default SearchBar;

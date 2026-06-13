import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MobileNumberPage = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("+880");

  const handleSubmit = () => {
    navigate("/verification");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Mobile */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-white to-[#F8E7E7] px-6 pb-[300px] pt-14 lg:hidden">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-3xl font-light text-[#181725]"
        >
          ‹
        </button>

        <div className="mt-16">
          <h1 className="text-[26px] font-semibold text-[#181725]">
            Enter your mobile number
          </h1>

          <label className="mt-9 block text-[16px] font-semibold text-[#7C7C7C]">
            Mobile Number
          </label>

          <div className="mt-4 flex items-center gap-3 border-b border-[#E2E2E2] pb-4">
            <span className="flex h-6 w-9 items-center justify-center rounded-sm bg-[#006A4E]">
              <span className="h-4 w-4 rounded-full bg-[#F42A41]" />
            </span>

            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="tel"
              autoFocus
              className="w-full bg-transparent text-[18px] font-medium text-[#181725] outline-none"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="absolute bottom-[330px] right-6 flex h-[67px] w-[67px] items-center justify-center rounded-full bg-[#53B175] text-4xl text-white transition active:scale-95"
        >
          ›
        </button>

        {/* Fake keyboard for Figma match */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#DADCE3]/80 px-1 pb-8 pt-2">
          <div className="grid grid-cols-3 gap-1">
            {[
              ["1", ""],
              ["2", "A B C"],
              ["3", "D E F"],
              ["4", "G H I"],
              ["5", "J K L"],
              ["6", "M N O"],
              ["7", "P Q R S"],
              ["8", "T U V"],
              ["9", "W X Y Z"],
            ].map(([num, letters]) => (
              <button
                key={num}
                type="button"
                className="h-[50px] rounded-md bg-white text-center shadow-sm"
                onClick={() => setPhoneNumber((prev) => prev + num)}
              >
                <span className="block text-[25px] leading-6 text-black">
                  {num}
                </span>
                <span className="text-[10px] font-bold tracking-[0.28em] text-black">
                  {letters}
                </span>
              </button>
            ))}

            <button className="h-[50px] text-[22px] text-black">+*#</button>

            <button
              type="button"
              onClick={() => setPhoneNumber((prev) => prev.slice(0, -1))}
              className="h-[50px] rounded-md bg-white text-[25px] shadow-sm"
            >
              0
            </button>

            <button
              type="button"
              onClick={() => setPhoneNumber((prev) => prev.slice(0, -1))}
              className="h-[50px] text-[22px] text-black"
            >
              ⌫
            </button>
          </div>

          <div className="mx-auto mt-14 h-1 w-32 rounded-full bg-black/15" />
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden min-h-screen bg-[#F8FAFB] lg:flex lg:items-center lg:justify-center">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-12 px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#53B175]">
              Secure sign in
            </p>

            <h1 className="mt-5 text-6xl font-bold leading-tight tracking-[-0.05em] text-[#181725]">
              Enter your
              <br />
              mobile number
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-[#7C7C7C]">
              We’ll send a verification code to confirm your number before you
              continue shopping.
            </p>
          </div>

          <div className="rounded-[36px] bg-white p-10 shadow-xl">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="mb-10 text-3xl text-[#181725]"
            >
              ‹
            </button>

            <label className="block text-[16px] font-semibold text-[#7C7C7C]">
              Mobile Number
            </label>

            <div className="mt-4 flex items-center gap-3 border-b border-[#E2E2E2] pb-4">
              <span className="flex h-6 w-9 items-center justify-center rounded-sm bg-[#006A4E]">
                <span className="h-4 w-4 rounded-full bg-[#F42A41]" />
              </span>

              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="tel"
                className="w-full bg-transparent text-[18px] font-medium text-[#181725] outline-none"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="mt-10 h-[67px] w-full rounded-[19px] bg-[#53B175] text-[18px] font-semibold text-white transition hover:bg-[#49A66C] active:scale-[0.98]"
            >
              Continue
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MobileNumberPage;

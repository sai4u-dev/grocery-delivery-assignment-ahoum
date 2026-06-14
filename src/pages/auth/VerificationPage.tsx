import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../constants";

const VerificationPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    navigate(ROUTES.LOCATION);
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
            Enter your 4-digit code
          </h1>

          <label className="mt-9 block text-[16px] font-semibold text-[#7C7C7C]">
            Code
          </label>

          <input
            value={otp}
            onChange={(event) => setOtp(event.target.value.slice(0, 4))}
            type="text"
            inputMode="numeric"
            autoFocus
            placeholder="- - - -"
            className="mt-4 w-full border-b border-[#E2E2E2] bg-transparent pb-4 text-[22px] font-semibold tracking-[0.5em] text-[#181725] outline-none focus:border-[#53B175]"
          />
        </div>

        <div className="absolute bottom-[330px] left-6 right-6 flex items-center justify-between">
          <button
            type="button"
            className="text-[18px] font-semibold text-[#53B175]"
          >
            Resend Code
          </button>

          <button
            type="button"
            onClick={handleVerify}
            className="flex h-[67px] w-[67px] items-center justify-center rounded-full bg-[#53B175] text-4xl text-white transition active:scale-95"
          >
            ›
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-[#DADCE3]/80 px-1 pb-8 pt-2">
          <div className="grid grid-cols-3 gap-1">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"].map(
              (key) => (
                <button
                  key={key || "empty"}
                  type="button"
                  disabled={!key}
                  onClick={() => {
                    if (key === "⌫") {
                      setOtp((current) => current.slice(0, -1));
                      return;
                    }

                    setOtp((current) => `${current}${key}`.slice(0, 4));
                  }}
                  className="h-[50px] rounded-md bg-white text-[25px] shadow-sm disabled:bg-transparent disabled:shadow-none"
                >
                  {key}
                </button>
              ),
            )}
          </div>

          <div className="mx-auto mt-14 h-1 w-32 rounded-full bg-black/15" />
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden min-h-screen bg-[#F8FAFB] lg:flex lg:items-center lg:justify-center">
        <div className="w-full max-w-md rounded-[36px] bg-white p-10 shadow-xl">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-10 text-3xl text-[#181725]"
          >
            ‹
          </button>

          <h1 className="text-4xl font-bold text-[#181725]">
            Enter your 4-digit code
          </h1>

          <p className="mt-4 text-[#7C7C7C]">
            Please enter the verification code sent to your mobile number.
          </p>

          <label className="mt-8 block text-[16px] font-semibold text-[#7C7C7C]">
            Code
          </label>

          <input
            value={otp}
            onChange={(event) => setOtp(event.target.value.slice(0, 4))}
            type="text"
            inputMode="numeric"
            placeholder="- - - -"
            className="mt-4 w-full border-b border-[#E2E2E2] bg-transparent pb-4 text-[28px] font-semibold tracking-[0.5em] text-[#181725] outline-none focus:border-[#53B175]"
          />

          <button
            type="button"
            onClick={handleVerify}
            className="mt-10 h-[67px] w-full rounded-[19px] bg-[#53B175] text-[18px] font-semibold text-white"
          >
            Verify
          </button>
        </div>
      </section>
    </main>
  );
};

export default VerificationPage;

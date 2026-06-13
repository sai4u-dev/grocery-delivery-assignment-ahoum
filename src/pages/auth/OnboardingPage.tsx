import { useNavigate } from "react-router-dom";
import onboardingImage from "../../assets/onboarding.png";

const OnboardingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signin");
  };

  return (
    <main className="min-h-screen bg-white font-gilroy">
      {/* Mobile UI */}
      <section className="relative min-h-screen overflow-hidden lg:hidden">
        <img
          src={onboardingImage}
          alt="Grocery delivery welcome"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-end px-8 pb-24 text-center text-white">
          <div className="mb-5 text-5xl">
            <img src="./nectarIcon.svg" alt="nectar-icon" />
          </div>

          <h1 className="text-[48px]  font-semibold leading-[1.18] tracking-[-0.04em]">
            Welcome
            <br />
            to our store
          </h1>

          <p className="mt-3 text-[16px] font-medium text-white/80">
            Ger your groceries in as fast as one hour
          </p>

          <button
            type="button"
            onClick={handleGetStarted}
            className="mt-10 h-16.75 w-full rounded-[19px] bg-[#53B175] text-[18px] font-semibold light text-white transition active:scale-[0.98]"
          >
            Get Started
          </button>
        </div>

        <div className="absolute bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-black/20" />
      </section>

      {/* Desktop UI */}
      <section className="hidden min-h-screen bg-[#F8FAFB] lg:block">
        <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-2 items-center gap-12 px-8 py-10">
          <div className="relative h-[calc(100vh-80px)] overflow-hidden rounded-[40px] shadow-2xl">
            <img
              src={onboardingImage}
              alt="Grocery delivery welcome"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

            <div className="absolute bottom-10 left-10 right-10 text-white text-center">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/70">
                Fresh groceries
              </p>
              <h2 className="mt-3 text-4xl font-bold leading-tight">
                Delivered fast,
                <br />
                right to your door.
              </h2>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-[36px] bg-white p-10 shadow-xl">
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-[#53B175] text-5xl">
                  <img src="./nectarIcon.svg" alt="nectar-icon" />
                </div>

                <h1 className="mt-8 text-5xl font-bold leading-tight tracking-[-0.04em] text-[#181725]">
                  Welcome to
                  <br />
                  our store
                </h1>

                <p className="mt-4 text-lg font-medium leading-7 text-[#7C7C7C]">
                  Get your groceries in as fast as one hour with a simple,
                  fresh, and friendly shopping experience.
                </p>

                <button
                  type="button"
                  onClick={handleGetStarted}
                  className="mt-10 h-[67px] w-full rounded-[19px] bg-[#53B175] text-[18px] font-semibold text-white shadow-lg shadow-green-200 transition hover:bg-[#49A66C] active:scale-[0.98]"
                >
                  Get Started
                </button>

                <p className="mt-6 text-sm text-[#7C7C7C]">
                  Fresh products, fast checkout, and easy delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OnboardingPage;

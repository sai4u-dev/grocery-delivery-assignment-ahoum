import { useNavigate } from "react-router-dom";
import signInImage from "../../assets/groceriesBag.png";

const SignInPage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white">
      {/* Mobile */}
      <section className="relative min-h-screen overflow-hidden px-6 lg:hidden">
        <img
          src={signInImage}
          alt="Fresh groceries"
          className="  w-full object-cover mx-6"
        />

        <div className="mt-6">
          <h1 className="text-[26px] font-semibold leading-[1.35] text-[#181725]">
            Get your groceries
            <br />
            with nectar
          </h1>

          <button
            type="button"
            onClick={() => navigate("/number")}
            className="mt-8 flex w-full items-center gap-4 border-b border-[#E2E2E2] pb-5 text-left"
          >
            <span className="text-xl">🌐</span>
            <span className="text-[18px] font-medium text-[#181725]">+880</span>
          </button>

          <p className="mt-10 text-center text-[14px] font-semibold text-[#828282]">
            Or connect with social media
          </p>

          <div className="mt-8 space-y-5">
            <button
              type="button"
              className="flex h-[67px] w-full items-center justify-center gap-8 rounded-[19px] bg-[#5383EC] text-[18px] font-semibold text-white transition active:scale-[0.98]"
            >
              <span className="text-3xl font-bold">G</span>
              Continue with Google
            </button>

            <button
              type="button"
              className="flex h-[67px] w-full items-center justify-center gap-8 rounded-[19px] bg-[#4A66AC] text-[18px] font-semibold text-white transition active:scale-[0.98]"
            >
              <span className="text-3xl font-bold">f</span>
              Continue with Facebook
            </button>
          </div>
        </div>

        <div className="absolute bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-black/20" />
      </section>

      {/* Desktop */}
      <section className="hidden min-h-screen bg-[#F8FAFB] lg:block">
        <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-2 items-center gap-12 px-8 py-10">
          <div className="relative h-[calc(100vh-80px)] overflow-hidden rounded-[40px] bg-white shadow-2xl">
            <img
              src={signInImage}
              alt="Fresh groceries"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-[36px] bg-white p-10 shadow-xl">
              <h1 className="text-5xl font-bold leading-tight tracking-[-0.04em] text-[#181725]">
                Get your groceries
                <br />
                with nectar
              </h1>

              <button
                type="button"
                onClick={() => navigate("/number")}
                className="mt-10 flex w-full items-center gap-4 border-b border-[#E2E2E2] pb-5 text-left"
              >
                <span className="text-xl">🌐</span>
                <span className="text-[18px] font-medium text-[#181725]">
                  +880
                </span>
              </button>

              <p className="mt-10 text-center text-[14px] font-semibold text-[#828282]">
                Or connect with social media
              </p>

              <div className="mt-8 space-y-5">
                <button className="flex h-[67px] w-full items-center justify-center gap-8 rounded-[19px] bg-[#5383EC] text-[18px] font-semibold text-white">
                  <span className="text-3xl font-bold">G</span>
                  Continue with Google
                </button>

                <button className="flex h-[67px] w-full items-center justify-center gap-8 rounded-[19px] bg-[#4A66AC] text-[18px] font-semibold text-white">
                  <span className="text-3xl font-bold">f</span>
                  Continue with Facebook
                </button>
              </div>

              <p className="mt-6 text-center text-sm text-[#7C7C7C]">
                Sign in quickly and continue shopping fresh groceries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;

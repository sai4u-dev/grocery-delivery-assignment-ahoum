import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../constants";
import { Button, Input } from "../../components/common";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Mobile */}
      <section className="px-6 pb-10 pt-14 lg:hidden">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-3xl font-light text-[#181725]"
        >
          ‹
        </button>

        <div className="mt-12 text-center">
          <div className="text-5xl flex justify-center">
            <img src="./nectarOrange.svg" alt="nectar-icon" />
          </div>
        </div>

        <div className="mt-16">
          <h1 className="text-[26px] font-semibold text-[#181725]">Log In</h1>

          <p className="mt-3 text-[16px] text-[#7C7C7C]">
            Enter your email and password
          </p>

          <div className="mt-10 space-y-8">
            <Input
              label="Email"
              type="email"
              className="text-black"
              placeholder="imshuvo97@gmail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              className="text-black"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="mt-5 text-right">
            <button
              type="button"
              className="text-[14px] font-medium text-[#181725]"
            >
              Forgot Password?
            </button>
          </div>

          <div className="mt-8">
            <Button onClick={handleSignIn}>Log In</Button>
          </div>

          <p className="mt-8 text-center text-[14px] font-medium text-[#181725]">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              onClick={() => navigate(ROUTES.SIGN_UP)}
              className="font-semibold text-[#53B175]"
            >
              Signup
            </button>
          </p>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden min-h-screen bg-[#F8FAFB] lg:flex">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-12 px-8">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#53B175]">
              Welcome Back
            </p>

            <h1 className="mt-5 text-6xl font-bold leading-tight tracking-[-0.05em] text-[#181725]">
              Login to
              <br />
              your account
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-[#7C7C7C]">
              Continue shopping fresh groceries with a seamless and secure
              experience.
            </p>
          </div>

          {/* Right Card */}
          <div className="rounded-[36px] bg-white p-10 shadow-xl">
            <div className="text-center">
              <div className="text-5xl flex justify-center">
                <img src="./nectarOrange.svg" alt="nectar-icon" />
              </div>

              <h2 className="mt-6 text-3xl font-bold text-[#181725]">Log In</h2>

              <p className="mt-2 text-[#7C7C7C]">
                Enter your credentials to continue
              </p>
            </div>

            <div className="mt-10 space-y-8">
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="mt-5 text-right">
              <button
                type="button"
                className="text-sm font-medium text-[#181725]"
              >
                Forgot Password?
              </button>
            </div>

            <div className="mt-8">
              <Button onClick={handleSignIn}>Log In</Button>
            </div>

            <p className="mt-8 text-center text-sm text-[#181725]">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => navigate(ROUTES.SIGN_UP)}
                className="font-semibold text-[#53B175]"
              >
                Signup
              </button>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;

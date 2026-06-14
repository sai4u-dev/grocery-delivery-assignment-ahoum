import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../constants";
import { Button, Input } from "../../components/common";

const SignupPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen bg-white">
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
          <h1 className="text-[26px] font-semibold text-[#181725]">Sign Up</h1>

          <p className="mt-3 text-[16px] text-[#7C7C7C]">
            Enter your credentials to continue
          </p>

          <div className="mt-10 space-y-8">
            <Input
              label="Username"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Afsar Hossen Shuvo"
            />

            <Input
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="imshuvo97@gmail.com"
              type="email"
            />

            <Input
              label="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              type="password"
            />
          </div>

          <p className="mt-6 text-[14px] leading-6 text-[#7C7C7C]">
            By continuing you agree to our{" "}
            <span className="font-semibold text-[#53B175]">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="font-semibold text-[#53B175]">Privacy Policy</span>
            .
          </p>

          <div className="mt-8">
            <Button onClick={() => navigate(ROUTES.LOCATION)}>Sign Up</Button>
          </div>

          <p className="mt-6 text-center text-[14px] font-semibold text-[#181725]">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate(ROUTES.LOGIN)}
              className="text-[#53B175]"
            >
              Signin
            </button>
          </p>
        </div>
      </section>

      <section className="hidden min-h-screen bg-[#F8FAFB] lg:flex lg:items-center lg:justify-center">
        <div className="w-full max-w-md rounded-[36px] bg-white p-10 shadow-xl">
          <div className="text-center text-5xl flex justify-center">
            <img src="./nectarOrange.svg" alt="nectar-icon" />
          </div>

          <h1 className="mt-10 text-4xl font-bold text-[#181725]">Sign Up</h1>

          <p className="mt-3 text-[#7C7C7C]">
            Enter your credentials to continue
          </p>

          <div className="mt-10 space-y-8">
            <Input
              label="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <Input
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>

          <div className="mt-8">
            <Button onClick={() => navigate(ROUTES.LOCATION)}>Sign Up</Button>
          </div>

          <p className="mt-6 text-center text-sm font-semibold text-[#181725]">
            Already have an account?{" "}
            <button
              onClick={() => navigate(ROUTES.LOGIN)}
              className="text-[#53B175]"
            >
              Signin
            </button>
          </p>
        </div>
      </section>
    </main>
  );
};

export default SignupPage;

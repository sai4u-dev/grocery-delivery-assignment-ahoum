import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../constants";
import { Button, Input } from "../../components/common";

const LocationPage = () => {
  const navigate = useNavigate();

  const [zone, setZone] = useState("Banasree");
  const [area, setArea] = useState("Dhaka");

  const handleSubmit = () => {
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

        <div className="mt-16 text-center">
          <div className="text-7xl flex justify-center">
            <img src="./navigationMap.png" alt="location" />
          </div>

          <h1 className="mt-10 text-[26px] font-semibold text-[#181725]">
            Select Your Location
          </h1>

          <p className="mt-4 text-[16px] leading-6 text-[#7C7C7C]">
            Switch on your location to stay in tune with what’s happening in
            your area.
          </p>
        </div>

        <div className="mt-20 space-y-8">
          <Input
            label="Your Zone"
            value={zone}
            onChange={(event) => setZone(event.target.value)}
          />

          <Input
            label="Your Area"
            value={area}
            onChange={(event) => setArea(event.target.value)}
          />
        </div>

        <div className="mt-10">
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden min-h-screen bg-[#F8FAFB] lg:flex lg:items-center lg:justify-center">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-12 px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#53B175]">
              Delivery Location
            </p>

            <h1 className="mt-5 text-6xl font-bold leading-tight tracking-[-0.05em] text-[#181725]">
              Select your
              <br />
              location
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-[#7C7C7C]">
              Choose your delivery zone so we can show available products and
              faster delivery options.
            </p>
          </div>

          <div className="rounded-[36px] bg-white p-10 shadow-xl">
            <div className="text-center">
              <div className="text-7xl flex justify-center">
                <img src="./navigationMap.png" alt="location" />
              </div>

              <h2 className="mt-6 text-3xl font-bold text-[#181725]">
                Select Your Location
              </h2>
            </div>

            <div className="mt-12 space-y-8">
              <Input
                label="Your Zone"
                value={zone}
                onChange={(event) => setZone(event.target.value)}
              />

              <Input
                label="Your Area"
                value={area}
                onChange={(event) => setArea(event.target.value)}
              />
            </div>

            <div className="mt-10">
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LocationPage;

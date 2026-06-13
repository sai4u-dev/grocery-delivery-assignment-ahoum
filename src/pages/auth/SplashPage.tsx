const SplashPage = () => {
  return (
    <main className=" font-gilroy relative flex min-h-screen items-center justify-center overflow-hidden bg-[#53B175]  ">
      {/* Logo */}
      <section className="flex items-center gap-3  ">
        <div className="text-6xl text-white">
          <img src="./nectarIcon.svg" alt="nectar-icon" />
        </div>

        <div>
          <h1 className="text-6xl font-extralight leading-none tracking-tight text-white ">
            nectar
          </h1>
          <p className="mt-1 text-center text-[14px] tracking-[0.3em] text-white">
            online groceriet
          </p>
        </div>
      </section>

      {/* Home indicator */}
      <div className="absolute bottom-3 h-1 w-32 rounded-full bg-black/15" />
    </main>
  );
};

export default SplashPage;

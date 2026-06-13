// src/pages/auth/SplashPage.tsx

const SplashPage = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#53B175]">
      {/* Status bar */}
      <div className="absolute left-0 top-0 flex w-full items-center justify-between px-10 pt-5 text-sm font-medium text-white">
        <span>9:41</span>

        <div className="flex items-center gap-1.5">
          <span className="h-3 w-4 rounded-sm border-2 border-white" />
          <span className="h-3 w-3 rounded-full border-2 border-white" />
          <span className="h-3 w-6 rounded-sm border-2 border-white" />
        </div>
      </div>

      {/* Logo */}
      <section className="flex items-center gap-3">
        <div className="text-6xl text-white">🥕</div>

        <div>
          <h1 className="text-6xl font-medium leading-none tracking-tight text-white">
            nectar
          </h1>
          <p className="mt-1 text-center text-[14px] tracking-[0.45em] text-white">
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

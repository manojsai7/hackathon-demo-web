export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center border-2 border-red-600 bg-black">
          <span className="text-3xl font-black text-red-600">IH</span>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1 bg-zinc-800 overflow-hidden mb-6">
          <div className="h-full w-1/2 bg-red-600 animate-pulse" />
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <h2 className="text-xl font-black uppercase tracking-wider text-white">Loading</h2>
          <p className="text-sm font-mono text-gray-600">Compiling genius ideas...</p>
        </div>
      </div>
    </div>
  );
}

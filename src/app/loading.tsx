export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-dark-base">
      <div className="text-center">
        {/* Animated logo/spinner */}
        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center">
          <div className="relative">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-dark-border border-t-primary-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Loading...</h2>
          <p className="text-sm text-gray-400">Brewing some innovation ☕</p>
        </div>
      </div>

      {/* Fun loading messages */}
      <div className="mt-8 animate-pulse text-center text-xs text-gray-600">
        <p>Compiling genius ideas...</p>
      </div>
    </div>
  );
}

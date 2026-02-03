export default function FloatingElements() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-10 top-24 h-2 w-2 rounded-full bg-primary-400/70 animate-float" />
      <div className="absolute right-20 top-40 h-3 w-3 rounded-full bg-accent-500/70 animate-float delay-1000" />
      <div className="absolute bottom-32 left-1/4 h-1.5 w-1.5 rounded-full bg-primary-300/70 animate-float delay-500" />
      <div className="absolute bottom-24 right-1/3 h-2 w-2 rounded-full bg-accent-400/60 animate-float delay-700" />
    </div>
  );
}

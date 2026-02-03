export default function SectionDivider() {
  return (
    <div className="relative h-24 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-px bg-gradient-to-b from-transparent via-accent-500/50 to-transparent" />
      </div>
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500 shadow-[0_0_20px_rgba(147,51,234,0.8)]" />
    </div>
  );
}

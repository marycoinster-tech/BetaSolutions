import { useInView } from "react-intersection-observer";
import { useCounter } from "@/hooks/useCounter";

interface Props {
  value: string;
  label: string;
  suffix?: string;
}

export default function AnimatedCounter({ value, label, suffix = "" }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const count = useCounter(numericValue, 2000, inView);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-muted-foreground text-sm font-medium uppercase tracking-widest">{label}</div>
    </div>
  );
}

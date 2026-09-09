import Marquee from "react-fast-marquee";

type EditorialMarqueeProps = {
  items: string[];
  dark?: boolean;
};

export const EditorialMarquee = ({ items, dark = false }: EditorialMarqueeProps) => (
  <div
    className={`overflow-hidden border-y py-6 md:py-8 ${
      dark ? "border-white/10 bg-obsidian text-white" : "border-obsidian/10 bg-ochre text-obsidian"
    }`}
    data-testid="editorial-marquee"
  >
    <Marquee speed={28} gradient={false} pauseOnHover>
      {items.map((item, i) => (
        <span key={i} className="flex items-center font-mono text-xs uppercase tracking-[0.35em] md:text-sm">
          <span className="whitespace-nowrap">{item}</span>
          <span className={`mx-12 inline-block h-2 w-2 rotate-45 md:mx-16 ${dark ? "bg-ochre" : "bg-obsidian/50"}`} />
        </span>
      ))}
    </Marquee>
  </div>
);

export const container = "mx-auto w-[min(1298px,calc(100%_-_48px))] max-sm:w-[min(100%_-_28px,560px)]";

export const section = "bg-[#101010] py-[92px] max-sm:py-[68px]";

export const brand =
  "font-serif text-[clamp(1.4rem,2vw,2rem)] uppercase tracking-[0.42em] text-[#fff7eb] max-sm:text-[1.12rem] max-sm:tracking-[0.32em]";

export const button =
  "inline-flex min-h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-transparent px-7 text-[0.95rem] font-bold transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(210,175,105,0.55),0_14px_34px_rgba(0,0,0,0.32)] focus-visible:shadow-[0_0_28px_rgba(210,175,105,0.55)]";

export const goldButton = `${button} bg-gradient-to-br from-[#f0ca78] to-[#c89a43] text-white`;

export const outlineGoldButton = `${button} border-[#cfa959] bg-black/10 text-[#d9b76d]`;

export const blackButton = `${button} bg-[#090909] text-white`;

export const mutedButton = `${button} bg-[#201e1b]/65 text-white`;

export const title =
  "my-5 font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[1.09] tracking-normal text-[#fff9ef]";

export const goldText = "text-[#cfab64]";

export const paragraph = "text-base leading-[1.7] text-[#d6d0c9]";

export const kicker = "flex items-center gap-4 text-[0.82rem] font-bold uppercase tracking-[0.38em] text-[#d2af69]";

export const line = "h-px w-[78px] bg-[#d2af69]/45";

export const pill =
  "inline-flex min-h-7 w-fit items-center gap-2 rounded-full bg-white/25 px-3.5 text-xs font-bold text-white";

export const darkPill =
  "inline-flex min-h-7 w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#d9d3ca]";

export const avatarStack = "flex items-center [&>img]:-ml-2.5 [&>img:first-child]:ml-0 [&>img]:size-7 [&>img]:rounded-full [&>img]:border-2 [&>img]:border-white [&>img]:object-cover";

export const glowHover =
  "transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_34px_rgba(210,175,105,0.42),0_22px_60px_rgba(0,0,0,0.42)]";

export const imageGlow = `${glowHover} hover:brightness-110`;

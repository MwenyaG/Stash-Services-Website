import { cn } from "@/lib/utils";

type BrandLogoVariant = "nav" | "footer" | "card" | "hero";

const variantClasses: Record<
  BrandLogoVariant,
  { frame: string; image: string }
> = {
  nav: {
    frame:
      "inline-flex w-fit items-center justify-center rounded-lg bg-white shadow-sm px-1.5 py-1 md:px-2 md:py-1.5",
    image: "h-12 md:h-14 lg:h-16 w-auto max-w-full object-contain",
  },
  footer: {
    frame:
      "inline-flex w-fit items-center justify-center rounded-lg bg-white shadow-sm px-1.5 py-1 md:px-2 md:py-1.5",
    image: "h-12 md:h-14 w-auto max-w-full object-contain",
  },
  card: {
    frame:
      "mb-4 inline-flex w-fit items-center justify-center rounded-lg bg-white shadow-sm px-1.5 py-1 md:px-2 md:py-1.5",
    image: "h-9 md:h-10 w-auto max-w-full object-contain",
  },
  hero: {
    frame:
      "mb-5 flex w-fit items-center justify-center rounded-lg bg-white shadow-sm px-2 py-1.5 md:px-2.5 md:py-2",
    image: "h-14 md:h-16 lg:h-20 w-auto max-w-full object-contain",
  },
};

interface BrandLogoProps {
  src: string;
  alt: string;
  variant?: BrandLogoVariant;
  frameClassName?: string;
  imageClassName?: string;
  testId?: string;
}

export function BrandLogo({
  src,
  alt,
  variant = "hero",
  frameClassName,
  imageClassName,
  testId,
}: BrandLogoProps) {
  const classes = variantClasses[variant];

  return (
    <div className={cn(classes.frame, frameClassName)}>
      <img
        src={src}
        alt={alt}
        className={cn(classes.image, imageClassName)}
        data-testid={testId}
      />
    </div>
  );
}

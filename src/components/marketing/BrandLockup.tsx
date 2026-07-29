import Image from "next/image";

type BrandLockupProps = {
  size?: "default" | "compact";
};

export function BrandLockup({
  size = "default",
}: BrandLockupProps) {
  const isCompact = size === "compact";

  return (
    <span className="inline-flex items-center gap-2">
      <Image
        src="/brand/novaflow-mark.svg"
        alt=""
        width={22}
        height={22}
        className={isCompact ? "size-5" : "size-5 md:size-5.5"}
      />
      <span
        className={
          isCompact
            ? "text-base font-semibold tracking-tight"
            : "text-lg font-semibold tracking-tight"
        }
      >
        NovaFlow
      </span>
    </span>
  );
}

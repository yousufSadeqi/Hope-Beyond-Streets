/**
 * A lightweight alternative to clsx + tailwind-merge to combine CSS class names.
 * Filters out falsy values and joins them with a space.
 */
export function cn(...classes: (string | undefined | null | boolean | { [key: string]: boolean })[]) {
  return classes
    .flatMap((c) => {
      if (!c) return [];
      if (typeof c === "string") return [c];
      if (typeof c === "object") {
        return Object.entries(c)
          .filter(([_, value]) => Boolean(value))
          .map(([key]) => key);
      }
      return [];
    })
    .join(" ");
}

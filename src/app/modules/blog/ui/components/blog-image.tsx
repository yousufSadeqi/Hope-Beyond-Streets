import { PlaceholderImage } from "@/components/ui/placeholder-image";

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function BlogImage(props: BlogImageProps) {
  return <PlaceholderImage {...props} />;
}

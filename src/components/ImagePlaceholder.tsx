import { ImagePlus } from "lucide-react";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

export function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div className={`image-placeholder ${className}`} role="img" aria-label={`${label} placeholder — add your photo`}>
      <div className="placeholder-mark" aria-hidden="true">
        <ImagePlus size={22} strokeWidth={1.6} />
      </div>
      <div>
        <strong>Add Your Photo</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}
// A photo block. If the image file is missing, a gradient shows instead,
// so the site always looks finished.
type PhotoProps = {
  src: string; // e.g. "hero.jpg" inside /public/images
  className?: string;
  label?: string; // describes the photo for screen readers
  children?: React.ReactNode;
};

export default function Photo({ src, className = "", label, children }: PhotoProps) {
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      className={`photo ${className}`}
      style={{
        backgroundImage: `url(/images/${src}), linear-gradient(135deg, #b8441a 0%, #e0a526 55%, #3a302a 100%)`,
      }}
    >
      {children}
    </div>
  );
}

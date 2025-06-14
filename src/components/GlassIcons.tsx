import React from 'react';

const gradientMapping = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
  cyan: "linear-gradient(hsl(183, 90%, 50%), hsl(168, 90%, 50%))",
  pink: "linear-gradient(hsl(323, 90%, 50%), hsl(308, 90%, 50%))",
  yellow: "linear-gradient(hsl(53, 90%, 50%), hsl(38, 90%, 50%))",
  transparent: "transparent",
};

interface GlassIconItem {
  icon: React.ReactNode;
  label: string;
  color: keyof typeof gradientMapping;
  customClass?: string;
  onClick?: () => void;
}

interface GlassIconsProps {
  items: GlassIconItem[];
  className?: string;
  onClose?: () => void;
}

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className, onClose }) => {
  const getBackgroundStyle = (color: keyof typeof gradientMapping) => {
    if (color === 'transparent') {
      return { background: 'transparent' };
    }
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  const handleItemClick = (item: GlassIconItem) => {
    if (item.onClick) {
      item.onClick();
    }
    if (onClose) {
      setTimeout(onClose, 300); // Small delay for animation
    }
  };

  return (
    <div
      className={`grid gap-8 mx-auto py-8 overflow-visible place-items-center ${
        className || "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
      }`}
    >
      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          aria-label={item.label}
          onClick={() => handleItemClick(item)}
          className={`relative bg-transparent outline-none w-32 h-32 lg:w-36 lg:h-36 [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group cursor-pointer ${
            item.customClass || ""
          }`}
        >
          {/* Shadow Layer - Only show if not transparent */}
          {item.color !== 'transparent' && (
            <span
              className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
              style={{
                ...getBackgroundStyle(item.color),
                boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
              }}
            ></span>
          )}

          {/* Glass Layer - Fixed size and padding */}
          <span
            className={`absolute top-0 left-0 w-full h-full rounded-2xl transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex flex-col items-center justify-center backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform group-hover:[transform:translateZ(2em)] p-4 ${
              item.color === 'transparent' 
                ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20' 
                : 'bg-[hsla(0,0%,100%,0.15)]'
            }`}
            style={{
              boxShadow: item.color === 'transparent' 
                ? "0 0 0 0.1em hsla(0, 0%, 100%, 0.1) inset" 
                : "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
            }}
          >
            {/* Icon Container */}
            <div className="flex items-center justify-center mb-3 w-12 h-12 lg:w-14 lg:h-14" aria-hidden="true">
              {item.icon}
            </div>
            
            {/* Label inside the box */}
            <span className="text-xs lg:text-sm font-medium text-white/90 text-center leading-tight">
              {item.label}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;
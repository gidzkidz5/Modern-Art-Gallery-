'use client'

interface ColorProps {
  hex: string;
  RGB: number[];
  HSV: number[];
}

const Color = (props: ColorProps) => {
  return (
    <div className="ff-big-shoulders-display">
      <div
        className={
          props.hex == "FFFFFF"
            ? "bg-white border-black border min-h-24 lg:min-w-64 relative"
            : "bg-gold min-h-24 lg:min-w-64 relative"
        }
        style={{ backgroundColor: `#${props.hex}` }}
      >
        <h1
          className={
            props.hex == "FFFFFF"
              ? "leading-9 ff-big-shoulders-display text-2xl cl-black pl-4 pb-3 absolute bottom-0"
              : "leading-9 ff-big-shoulders-display text-2xl cl-white pl-4 pb-3 absolute bottom-0"
          }
        >
          #{props.hex}
        </h1>
      </div>
      <p className="text-base font-normal leading-7 text-left ff-outfit">
        <span className="opacity-50 cl-black mr-6 char">RGB</span>{" "}
        <span className="text-strong">
          {props.RGB[1]}, {props.RGB[2]}, {props.RGB[3]}
        </span>
      </p>
      <p className="text-base font-normal leading-7 text-left ff-outfit">
        <span className="opacity-50 cl-black mr-6 char">HSL</span>{" "}
        <span className="text-bold">
          {props.HSV[1]}°, {props.HSV[2]}%, {props.HSV[3]}%
        </span>
      </p>
    </div>
  );
};

export default Color;

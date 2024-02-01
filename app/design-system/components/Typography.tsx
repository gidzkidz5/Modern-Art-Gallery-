export interface TypographyProps {
  heading: string;
  font: "big" | "normal";
  fontSize: number;
  lineHeight: number;
  text: string;
  text2?: string;
  className?: string;
}

const Typography = ({
  heading,
  font,
  fontSize,
  lineHeight,
  text,
  text2,
  className,
}: TypographyProps) => {
  return (
    <div>
      <div className="ff-outfit cl-black text-base leading-7 flex flex-wrap items-center gap-3 font-normal mb-4">
        <h3>{heading}</h3>
        <p className="opacity-50">
          {font == "big" ? "Big Shoulders Display Black" : "Outfit Light"}
        </p>
        <p className="opacity-50">{fontSize}px</p>
        <p className="opacity-50">{lineHeight}px Line spacing</p>
      </div>
      <span
        className={`${
          font == "big"
            ? "ff-big-shoulders-display uppercase cl-black"
            : "ff-outfit cl-grey"
        } ${className}`}
      >
        {text}
      </span>
      {text2 && (
        <>
          <br />
          <br />
          <span
            className={`${
              font == "big"
                ? "ff-big-shoulders-display uppercase cl-black"
                : "ff-outfit cl-grey"
            } ${className}`}
          >
            {text2}
          </span>
        </>
      )}
    </div>
  );
};

export default Typography;

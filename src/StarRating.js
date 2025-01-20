import { useState } from "react";

export { useState } from "react";
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const starContainerStyle = {
  display: "flex",
};
const textStyle = {
  lineHeight: "1",
  margin: "0",
};
export default function StarRating({ maxRating = 5, color, size }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  function handleRating(rate) {
    setRating(rate);
  }
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Stars
            key={i}
            onRate={() => handleRating(i + 1)}
            full={hoverRating ? hoverRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setHoverRating(i + 1)}
            onHoverOut={() => setHoverRating(0)}
          />
        ))}
      </div>
      <p style={textStyle}>{hoverRating || rating || ""}</p>
    </div>
  );
}
function Stars({ onRate, full, onHoverIn }) {
  return (
    <span
      role="button"
      onClick={onRate}
      style={{ cursor: "pointer" }}
      onMouseEnter={onHoverIn}
      onMouseLeave={() => console.log("Leaving")}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          cursor="pointer"
          viewBox="0 0 24 24"
          fill="orangered"
        >
          <polygon points="12,2 15,10 24,10 17,15 19,23 12,18 5,23 7,15 0,10 9,10" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="orangered"
          strokeWidth="2"
        >
          <polygon points="12,2 15,10 24,10 17,15 19,23 12,18 5,23 7,15 0,10 9,10" />
        </svg>
      )}
    </span>
  );
}

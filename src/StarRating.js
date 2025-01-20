import { useState } from "react";
import PropTypes from "prop-types";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const starContainerStyle = {
  display: "flex",
};
StarRating.propTypes = {
  maxRating: PropTypes.number.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  messages: PropTypes.array,
  defaultRating: PropTypes.number,
  onSetRating: PropTypes.func,
};

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [hoverRating, setHoverRating] = useState(0);

  function handleRating(rate) {
    setRating(rate);
    setHoverRating(0);
  }
  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };
  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Stars
            key={i}
            onRate={() => handleRating(i + 1)}
            full={hoverRating ? hoverRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setHoverRating(i + 1)}
            onHoverOut={() => setHoverRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[hoverRating ? hoverRating - 1 : rating - 1]
          : hoverRating || rating || "No rating"}
      </p>
    </div>
  );
}
function Stars({ onRate, full, onHoverIn, color, size }) {
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
          width={`${size}px`}
          height={`${size}px`}
          cursor="pointer"
          viewBox="0 0 24 24"
          fill={color}
        >
          <polygon points="12,2 15,10 24,10 17,15 19,23 12,18 5,23 7,15 0,10 9,10" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${size}px`}
          height={`${size}px`}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={color}
        >
          <polygon points="12,2 15,10 24,10 17,15 19,23 12,18 5,23 7,15 0,10 9,10" />
        </svg>
      )}
    </span>
  );
}

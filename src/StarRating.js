import { useState } from "react";

/* import { useState } from "react";

const containerStyle = { display: "flex", alignItems: "center", gap: "16px" };
const starcontainerStyle = { display: "flex" };
const textStyle = { lineHeight: "1", margin: "0" };
const starStyle = {
  width: "48px",
  height: "48px",
  display: "block",
  cursor: "pointer",
};
export default function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(1);
  function handleRating(rating) {
    setRating(rating);
  }
  return (
    <div style={containerStyle}>
      <div style={starcontainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star key={i} onRate={() => handleRating(i + 1)} />
        ))}
      </div>
      <p style={textStyle}>{rating || ""}></p>
    </div>
  );
}

function Star({ onRate }) {
  return (
    <span role="button" style={starStyle} onClick={onRate}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="#000"
        stroke="#000"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </span>
  );
}

 */
const containerStyle = {
  display: "flex",
  gap: "16px",
  justifyContent: "center",
};
const textStyle = {
  margin: "0",
  lineHeight: "1",
};
export default function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>
            <Star
              key={i}
              onRate={() => handleRating(i + 1)}
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
              onHoverIn={() => setTempRating(i + 1)}
              onHoverOut={() => setTempRating(0)}
            />
          </span>
        ))}
      </div>
      <p>{tempRating || rating || ""}</p>
    </div>
  );
}
const starStyle = {
  width: "48px",
  height: "48px",
  display: "inline",
  cursor: "pointer",
};
function Star({ onRate, full, onHoverIn, onHoverOut }) {
  return (
    <span
      style={starStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 .587l3.668 7.568 8.332 1.21-6.034 5.878 1.425 8.31L12 18.897l-7.391 3.88 1.425-8.31-6.034-5.878 8.332-1.21z"
            fill="black"
          />
        </svg>
      ) : (
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 .587l3.668 7.568 8.332 1.21-6.034 5.878 1.425 8.31L12 18.897l-7.391 3.88 1.425-8.31-6.034-5.878 8.332-1.21z"
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      )}
    </span>
  );
}

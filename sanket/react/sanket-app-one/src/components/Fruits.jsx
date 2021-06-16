import React from "react";

const Fruits = React.forwardRef((props, ref) => {
  return (
    <div>
      <input
        type="text"
        className="form-control w-25 my-2"
        ref={ref}
        onChange={(e) => props.text(e.target.value)}
      />
    </div>
  );
});

export default Fruits;

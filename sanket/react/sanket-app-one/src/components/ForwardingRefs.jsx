import React from "react";

const ForwardingRefs = React.forwardRef((props, ref) => {
  return (
    <div>
      <input
        className="form-control w-50 my-2"
        type="text"
        ref={ref}
        onChange={(e) => props.text(e.target.value)}
      />
      <p>{props.newText}</p>
    </div>
  );
});

export default ForwardingRefs;

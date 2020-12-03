import React from "react";
export default function Title({ name }) {
  return (
    <div>
      <h1 className="text-title text-center">{name}</h1>
      <p className="text-center">
        Mobile Mart provides you the best phones with the best deals ever
      </p>
    </div>
  );
}

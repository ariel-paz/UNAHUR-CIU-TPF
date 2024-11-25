import React from "react";

const ErrorComponent = ({ mensaje, refetch }) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
      style={{ justifyItems: "center" }}
    >
      <div className="flex flex-col items-center">
        <strong className="font-bold text-2xl">UPS!</strong> <br />
        <span className="block sm:inline text-xl mb-5">{mensaje}</span>
      </div>
      {refetch && (
        <button
          onClick={refetch}
          className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Reintentar
        </button>
      )}
    </div>
  );
};

export default ErrorComponent;

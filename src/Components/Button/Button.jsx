function Button({ label }) {
  return (
    <div>
      <button
        type="submit"
        className="w-full border rounded-lg py-3 my-2 bg-rgba  uppercase"
      >
        {label}
      </button>
    </div>
  );
}

export default Button;

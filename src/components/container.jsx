function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1140px] px-[15px] min-[1400px]:max-w-[1320px] ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;

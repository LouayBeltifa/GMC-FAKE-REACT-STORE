function ButtonComponent({ title }) {
  return (
    <button className="bg-emerald-400 p-2 px-4 rounded-xl cursor-pointer border-0 font-medium hover:bg-emerald-500 hover:text-white transition-all">
      {title}
    </button>
  );
}

export default ButtonComponent;

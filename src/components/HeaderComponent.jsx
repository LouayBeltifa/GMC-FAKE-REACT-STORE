function HeaderComponent({ title, description }) {
  return (
    <header className="bg-gradient-to-r from-emerald-400 to-teal-400 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">{description}</p>
      </div>
    </header>
  );
}

export default HeaderComponent;

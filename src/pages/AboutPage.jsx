export default function AboutPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1760706401016-767d2403b823?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
          className="w-full h-full object-cover brightness-75"
          alt="About Hero"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wider">
            About Us
          </h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Welcome to <span className="font-semibold">Legend Mall</span>, your
          number-one source for premium quality products. Founded with the
          mission to provide high–quality, stylish, and affordable items, we are
          dedicated to giving you the very best shopping experience with a
          strong focus on dependability, customer service, and uniqueness.
        </p>

        <p className="text-lg leading-relaxed text-gray-600 mt-4">
          We carefully source our products from trusted creators and
          manufacturers across the world, ensuring every item meets our high
          standards. Whether you're looking for fashion, electronics, beauty
          essentials, or home accessories, we’ve got you covered.
        </p>
      </section>

      {/* Vision + Values */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="p-6 shadow-md rounded-xl bg-gray-300 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To create an enjoyable and seamless shopping experience where
              quality and affordability meet.
            </p>
          </div>

          <div className="p-6 shadow-md rounded-xl bg-gray-300 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To become Africa’s most trusted online shopping platform known for
              innovation, customer satisfaction, and premium products.
            </p>
          </div>

          <div className="p-6 shadow-md rounded-xl bg-gray-300 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">What Makes Us Different</h3>
            <p className="text-gray-600">
              Curated collections, excellent service, fast delivery, and a
              passion for making every customer smile.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet The Team</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              className="rounded-full w-40 h-40 mx-auto object-cover"
              alt="CEO"
            />
            <h3 className="mt-4 text-xl font-semibold">Jane Doe</h3>
            <p className="text-gray-500">Founder & CEO</p>
          </div>

          <div className="text-center">
            <img
              src="https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?semt=ais_hybrid&w=740&q=80"
              className="rounded-full w-40 h-40 mx-auto object-cover"
              alt="Manager"
            />
            <h3 className="mt-4 text-xl font-semibold">Ragnar Lothbrok</h3>
            <p className="text-gray-500">Product Manager</p>
          </div>

          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
              className="rounded-full w-40 h-40 mx-auto object-cover"
              alt="Designer"
            />
            <h3 className="mt-4 text-xl font-semibold">Thor Odinson</h3>
            <p className="text-gray-500">Creative Director</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Thank You For Shopping With Us
        </h2>
        <p className="text-gray-300 mb-6">
          We’re committed to giving you the best products and service.
        </p>
        <a
          href="/"
          className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
        >
          Explore Our Store
        </a>
      </section>
    </div>
  );
}

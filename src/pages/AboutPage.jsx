import HeaderComponent from "../components/HeaderComponent";

function AboutPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <HeaderComponent
        title="About Our Store"
        description="We build beautiful shopping experiences and simple tooling
      to help you prototype e‑commerce flows quickly. This demo showcases
      browsing, favourites and a Redux-backed cart."
      />
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Our mission</h2>
            <p className="text-gray-700 leading-relaxed">
              We're focused on delivering a minimal, accessible and responsive
              demo storefront that demonstrates common e‑commerce patterns:
              browsing, product pages, cart and favourites. This project is
              intentionally small so you can learn and extend it into a
              production-ready application.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded">
                <h3 className="font-semibold">Easy to extend</h3>
                <p className="text-sm text-gray-600">
                  Well-structured components and Redux slices make adding
                  features straightforward.
                </p>
              </div>
              <div className="p-4 border rounded">
                <h3 className="font-semibold">Tailwind-first</h3>
                <p className="text-sm text-gray-600">
                  Utility classes keep the UI consistent and easy to adjust.
                </p>
              </div>
              <div className="p-4 border rounded">
                <h3 className="font-semibold">Redux-backed</h3>
                <p className="text-sm text-gray-600">
                  Cart and favourites are stored in Redux for predictable state
                  management.
                </p>
              </div>
              <div className="p-4 border rounded">
                <h3 className="font-semibold">Minimal & focused</h3>
                <p className="text-sm text-gray-600">
                  No heavy dependencies — just a starting point you can
                  customize.
                </p>
              </div>
            </div>
          </div>

          <aside className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-3">Quick facts</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Products: demo dataset</li>
              <li>Cart: Redux Toolkit slice</li>
              <li>Favourites: Redux Toolkit slice</li>
              <li>Styling: Tailwind CSS</li>
            </ul>

            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block bg-emerald-400 text-white px-4 py-2 rounded"
              >
                Contact us
              </a>
            </div>
          </aside>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Meet the team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 text-center shadow"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  Avatar
                </div>
                <h4 className="font-semibold">Team Member {i}</h4>
                <p className="text-sm text-gray-600">Role / short bio</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;

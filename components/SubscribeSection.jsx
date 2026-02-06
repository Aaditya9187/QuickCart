export default function SubscribeSection() {
  return (
    <section className="py-24 text-center border-t">
      <h2 className="text-3xl font-extrabold mb-4">
        Subscribe now & get 20% off
      </h2>

      <form className="max-w-xl mx-auto flex gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow px-6 py-4 border rounded-xl"
        />
        <button className="bg-primary text-white px-10 py-4 rounded-xl">
          Subscribe
        </button>
      </form>
    </section>
  );
}

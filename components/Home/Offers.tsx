export function Offers() {
  return (
    <section className="grid grid-cols-2">
      <div className="grid gap-1 place-items-center">
        <img
          src="/power-fontain/thermaltake-700w.jpg"
          alt=""
        />
        <img
          src="/monitors/zowie_rl2755.jpg"
          alt=""
        />
      </div>
      <picture>
        <img
          src="/power-fontain/cooler-master-750w.jpg"
          className="w-full object-cover"
          alt=""
        />
      </picture>
    </section>
  );
}

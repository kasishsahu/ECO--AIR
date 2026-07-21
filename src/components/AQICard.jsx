function AQICard({ title, value, unit, color , icon}) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-xl hover:shadow-green-500/20 hover:scale-105 hover:bg-slate-700 transition duration-300 w-56">

        <div className="text-3xl mb-3">
        {icon}
      </div>

      <h3 className="text-gray-400 text-sm uppercase tracking-wider">
        {title}
      </h3>

      <h1 className={`text-5xl font-bold mt-4 ${color}`}>
        {value}
      </h1>

      <div className="mt-4">
  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
    {unit}
  </span>
</div>

    </div>
  );
}

export default AQICard;
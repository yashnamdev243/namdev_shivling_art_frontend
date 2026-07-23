export default function SectionTitle({
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={`${center ? "text-center" : ""} mb-14`}>

      <span className="uppercase tracking-[5px] text-amber-700 font-semibold">
        {subtitle}
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-3">
        {title}
      </h2>

    </div>
  );
}
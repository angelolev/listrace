interface IFeatureCard {
  icon: string;
  href: string;
  label?: string;
  textContent: string;
  title: string;
}

export default function FeatureCard({
  icon,
  href,
  label = "Read more",
  textContent,
  title,
}: IFeatureCard) {
  return (
    <div className="feature-card text-center items-center flex flex-col gap-4 py-[50px] px-[42px] shadow-feature-card hover:bg-primary-500 duration-300 group">
      <div className="bg-[#eef2f6] rounded-full w-fit py-4 px-6">
        <i className={`fi fi-rr-${icon}`}></i>
      </div>
      <h3 className="heading-3 group-hover:text-white">{title}</h3>
      <p className="paragraph group-hover:text-white">{textContent}</p>
      <a
        className="btn text-paragraph text-[12px] border-[1px] border-[#d3d6d9] border-solid p-2 w-fit group-hover:text-white"
        href={href}
      >
        {label}
      </a>
    </div>
  );
}

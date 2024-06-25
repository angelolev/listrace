interface ICategoryCard {
  icon: string;
  name: string;
  listingsCount: number;
}

export default function CategoryCard({
  icon,
  name,
  listingsCount,
}: ICategoryCard) {
  return (
    <div className="category-card flex flex-col gap-2 shadow-category-card w-[205px] py-10 text-center bg-white group hover:bg-primary-500 duration-300">
      <div className="">
        <i className={`fi fi-rr-${icon}`}></i>
      </div>
      <h2 className="m-0 text-light-black text-[18px] font-medium capitalize group-hover:text-white">
        <a href="#">{name}</a>
      </h2>
      <p className="paragraph group-hover:text-white">
        {listingsCount} listings
      </p>
    </div>
  );
}

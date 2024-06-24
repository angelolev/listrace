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
    <div className="category-card flex flex-col gap-2 shadow-category-card w-[205px] py-10 text-center">
      <div className="">
        <i className={`fi fi-rr-${icon}`}></i>
      </div>
      <h2 className="heading-2">
        <a href="#">{name}</a>
      </h2>
      <p className="paragraph">{listingsCount} listings</p>
    </div>
  );
}

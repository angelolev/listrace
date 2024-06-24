import {
  Activities,
  ActivityCard,
  CategoryCard,
  FeatureCard,
  Nav,
  Posts,
  Reviews,
} from "@/components";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pb-20">
        <section className="hero h-[800px] bg-[url('/images/hero/banner.jpg')] text-center contrast-100 pt-[80px]">
          <div className="container mx-auto px-6">
            <h1 className="text-[24px] text-white uppercase font-bold tracking-[2.4px] ">
              BEST PLACE TO FIND AND EXPLORE THAT ALL YOU NEED
            </h1>
            <p className="text-white txt-[18px] mt-[25px]">
              Find Best Place, Restaurant, Hotel, Real State and many more think
              in just One click
            </p>
          </div>
        </section>
        <section className="categories grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 container mx-auto gap-6 justify-items-center">
          <CategoryCard
            icon="restaurant"
            name="Restaurants"
            listingsCount={150}
          />
          <CategoryCard
            icon="suitcase-alt"
            name="Destination"
            listingsCount={214}
          />
          <CategoryCard icon="building" name="Hotels" listingsCount={185} />
          <CategoryCard icon="pills" name="Healthcare" listingsCount={200} />
          <CategoryCard icon="car-side" name="Automotion" listingsCount={120} />
        </section>
        <section className="how-it-works my-8 text-center text-[24px] container mx-auto pt-[100px] px-6">
          <h2 className="uppercase mb-6 tracking-wide">How it works</h2>
          <p className="paragraph">Learn More about how our website works</p>
          <div className="pt-[70px] features-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Choose what to Do"
              icon="lightbulb-on"
              href="/"
              textContent="Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua."
            />
            <FeatureCard
              title="Find what you want"
              icon="search"
              href="/"
              textContent="Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua."
            />
            <FeatureCard
              title="Explore amazing Place"
              icon="map-marker"
              href="/"
              textContent="Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua."
            />
          </div>
        </section>
        <section className="explore container mx-auto px-6 text-center bg-[#f8fafb]">
          <h2 className="uppercase mb-6 tracking-wide">Explore</h2>
          <p className="paragraph">
            Explore New place, food, culture around the world and many more
          </p>
          <Activities />
        </section>
        <section className="reviews text-center">
          <h2 className="uppercase mb-6 tracking-wide">Clients Reviews</h2>
          <p className="paragraph">What our client say about us</p>
          <Reviews />
        </section>
        <section className="blog container mx-auto px-6 text-center">
          <h2 className="uppercase mb-6 tracking-wide">News and Articles</h2>
          <p className="paragraph">
            Always upto date with our latest News and Articles{" "}
          </p>
          <Posts />
        </section>
      </main>
    </>
  );
}

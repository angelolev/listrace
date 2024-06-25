import {
  Activities,
  ActivityCard,
  CategoryCard,
  FeatureCard,
  Footer,
  Nav,
  Newsletter,
  Posts,
  Reviews,
} from "@/components";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="hero h-[800px] bg-[url('/images/hero/banner.jpg')] relative text-center pt-[80px] md:pt-[155px]">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-6 relative max-w-6xl">
            <h1 className="text-[24px] text-white uppercase font-bold tracking-[2.4px] text-pretty md:text-[40px] md:px-16">
              BEST PLACE TO FIND AND EXPLORE THAT ALL YOU NEED
            </h1>
            <p className="text-white txt-[18px] mt-[25px]">
              Find Best Place, Restaurant, Hotel, Real State and many more think
              in just One click
            </p>
          </div>
        </section>
        <section className="categories container mx-auto mt-[60px] relative max-w-6xl">
          <div className="categories-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center md:absolute md:w-full md:-top-[155px]">
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
            <CategoryCard
              icon="car-side"
              name="Automotion"
              listingsCount={120}
            />
          </div>
        </section>
        <section className="how-it-works my-8 text-center container mx-auto max-w-6xl pt-[100px] px-6 pb-[90px] md:pt-[300px] lg:pt-[150px]">
          <h2 className="heading-2">How it works</h2>
          <p className="paragraph md:text-[18px]">
            Learn More about how our website works
          </p>
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
        <section className="explore bg-[#f8fafb] pt-[117px] pb-[95px]">
          <div className="container mx-auto px-6 text-center max-w-6xl">
            <h2 className="heading-2">Explore</h2>
            <p className="paragraph md:text-[18px]">
              Explore New place, food, culture around the world and many more
            </p>
            <Activities />
          </div>
        </section>
        <section className="reviews text-center pt-[117px] overflow-hidden">
          <h2 className="heading-2">Clients Reviews</h2>
          <p className="paragraph md:text-[18px]">
            What our client say about us
          </p>
          <Reviews />
        </section>
        <section className="blog container max-w-6xl mx-auto px-6 text-center pb-[90px]">
          <h2 className="heading-2">News and Articles</h2>
          <p className="paragraph md:text-[18px]">
            Always upto date with our latest News and Articles{" "}
          </p>
          <Posts />
        </section>
        <section className="contact bg-[#f8fafb] py-[150px]">
          <Newsletter />
        </section>
      </main>
      <Footer />
    </>
  );
}

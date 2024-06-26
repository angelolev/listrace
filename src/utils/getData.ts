export default async function getData(path: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${path}`);
    console.log(`Fetching data from: ${process.env.NEXT_PUBLIC_API_URL}`);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Fetch error:", res.status, res.statusText, errorText);
      throw new Error(`Failed to fetch data: ${res.statusText}`);
      // throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    throw error;
  }
}

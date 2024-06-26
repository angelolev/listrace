export default async function getData(path: string) {
  try {
    const res = await fetch(`${process.env.API_URL}/api/${path}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    throw error;
  }
}

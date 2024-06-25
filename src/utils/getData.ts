export default async function getData(path: string) {
  const res = await fetch(`${process.env.API_URL}/api/${path}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

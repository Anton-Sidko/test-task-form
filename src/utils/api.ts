export const fetchData = async function <T>(url: string): Promise<Awaited<T>> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};

export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter((item) =>
    item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
  );
}

export const initialData = [
  {
    id: crypto.randomUUID(),
    title: "Dummy Title 1",
    text: "Dummy text 1",
    date: "2023-10-01",
    category: "To-Do",
  },
  {
    id: crypto.randomUUID(),
    title: "Dummy Title 2",
    text: "Dummy text 2",
    date: "2023-10-02",
    category: "To-Do",
  },
  {
    id: crypto.randomUUID(),
    title: "Dummy Title 3",
    text: "Dummy text 3",
    date: "2023-10-03",
    category: "To-Do",
  },
  {
    id: crypto.randomUUID(),
    title: "Dummy Title 4",
    text: "Dummy text 4",
    date: "2023-10-04",
    category: "On-Progress",
  },
  {
    id: crypto.randomUUID(),
    title: "Dummy Title 5",
    text: "Dummy text 5",
    date: "2023-10-05",
    category: "Done",
  },
  {
    id: crypto.randomUUID(),
    title: "Dummy Title 6",
    text: "Dummy text 6",
    date: "2023-10-06",
    category: "Done",
  },
  {
    id: crypto.randomUUID(),
    title: "Dummy Title 7",
    text: "Dummy text 7",
    date: "2023-10-07",
    category: "Revise",
  },
];

export const search = (data, query) => {
  const keys = ["title", "artist"];

  return data.filter((item) =>
    keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
  );
};

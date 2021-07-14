type Authors = string[];

export function getAutors(authors: Authors) {
  if (authors.length > 1)
    return authors.slice(0, -1).join(", ") + " & " + authors.slice(-1);
  return authors[0];
}

export default getAutors;

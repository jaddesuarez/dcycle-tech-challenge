export const normalizeName = (name: string) => {
  return name.toLowerCase().trim();
};

export const upperCaseFirstLetter = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

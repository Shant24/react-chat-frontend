const getUpperLetter = (string: string) => {
  const [l1, l2] = Array.from(string);
  return [l1?.toUpperCase(), l2?.toUpperCase()];
};

export const generateNameForAvatar = (fullName: string): string => {
  const [name, surname = ''] = fullName.split(' ');
  const [n1, n2] = getUpperLetter(name);
  const [s1] = getUpperLetter(surname);

  return `${n1}${s1 || n2}`;
};

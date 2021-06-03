import tinycolor from 'tinycolor2';

const getCorrectIndex = (number: number): number => {
  return Math.min(Math.max(0, number), 255);
};

export const getColorFromName = (name: string): { color: string; colorLighten: string } => {
  const [r, g, b] = name
    .slice(0, 3)
    .split('')
    .map((char) => getCorrectIndex(char.charCodeAt(0)));

  return {
    color: tinycolor({ r, g, b }).toHexString(),
    colorLighten: tinycolor({ r, g, b }).lighten(40).toHexString(),
  };
};

export const generateGradient = ({ color, colorLighten }: { color: string; colorLighten: string }): string => {
  return `linear-gradient(135deg, ${color} 0%, ${colorLighten} 100%)`;
};

export const generateAvatarFromName = (name: string): string => {
  return generateGradient(getColorFromName(name));
};

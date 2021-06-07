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

const stringToRGB = (string: string) => {
  let hash = 0;

  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let c = (hash & 0x00FFFFFF).toString(16);
  const color = '00000'.substring(0, 6 - c.length) + c;

  return {
    color: tinycolor(color).toHexString(),
    colorLighten: tinycolor(color).lighten(40).toHexString(),
  };
};

export const generateAvatarFromName = (name: string, type: 'normal' | 'require' = 'require'): string => {
  const color = type === 'normal' ? getColorFromName(name) : stringToRGB(name);
  console.log('color', color);

  return generateGradient(color);
};

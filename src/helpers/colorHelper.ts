import ColorHash from 'color-hash';

import { generateNameForAvatar } from './stringHelper';

export const generateGradient = ({ color, colorLighten }: { color: string; colorLighten: string }): string => {
  return `linear-gradient(135deg, ${color} 0%, ${colorLighten} 100%)`;
};

const getColorSpectrumFromString = (fullName: string): { color: string; colorLighten: string } => {
  const endPrefix = 'u';
  const name = `${generateNameForAvatar(fullName)}${endPrefix}`;
  const saturation = 1;
  const color = new ColorHash({ saturation }).hex(name);
  const colorLighten = new ColorHash({ saturation, lightness: 0.98 }).hex(name);
  return { color, colorLighten };
};

export const generateAvatarGradientFromFullName = (name: string): string => {
  return generateGradient(getColorSpectrumFromString(name));
};

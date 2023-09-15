type Dict = { [key: string]: any };

export const transparentize =
  (color: string, opacity: number, option: 'default' | '_dark') =>
  (theme: Dict) => {
    const targetColor = theme['semanticTokens']['colors'][color]?.[option];

    if (!targetColor) {
      throw new Error(
        `Target color '${color}' with option '${option}' not found in the theme.`,
      );
    }
    const rgb = hexToRgb(targetColor);

    const rgba = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;

    return rgba;
  };

const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const normalizedHex = hex.replace('#', '');

  const r = parseInt(normalizedHex.slice(0, 2), 16);
  const g = parseInt(normalizedHex.slice(2, 4), 16);
  const b = parseInt(normalizedHex.slice(4, 6), 16);

  return { r, g, b };
};

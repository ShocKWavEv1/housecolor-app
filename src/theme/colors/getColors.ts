export const getColors = ({ colors }: { colors: any }) => {
  const colorsNames: any = Object.keys(colors);
  const colorsFormat: any = {};
  colorsNames.forEach((colorName: any) => {
    colorsFormat[colorName] = colors[colorName]?.value;
  });
  return colorsFormat;
};

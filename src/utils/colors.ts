export const getLuckyColorStyle = (color: string): string => {
  const colorMap: { [key: string]: string } = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    yellow: "bg-yellow-500",
    orange: "bg-orange-500",
    pink: "bg-pink-500",
    brown: "bg-amber-800",
    gray: "bg-gray-500",
    black: "bg-black",
    white: "bg-white border border-gray-200",
    gold: "bg-yellow-600",
    silver: "bg-gray-300",
    turquoise: "bg-sky-400",
    darkgreen: "bg-emerald-900",
    darkblue: "bg-blue-900",
    darkred: "bg-red-900",
    darkpurple: "bg-purple-900",
    darkyellow: "bg-yellow-900",
    darkorange: "bg-orange-900",
    darkpink: "bg-pink-900",
    darkbrown: "bg-amber-900",
  };

  const normalizedColor = color.toLowerCase();
  return colorMap[normalizedColor] || "bg-gray-200";
};

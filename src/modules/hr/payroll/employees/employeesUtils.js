export const capitaliseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatString = (str) => {
  // Insert spaces between camel case words
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Split the string by spaces
  let words = str.split(" ");

  // Capitalize the first letter of each word
  words = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the words back together with spaces
  str = words.join(" ");

  return str;
};

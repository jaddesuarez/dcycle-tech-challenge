import getUnicodeFlagIcon from "country-flag-icons/unicode";

export const getCountryFlag = (countryCode: string) => {
  return getUnicodeFlagIcon(countryCode);
};

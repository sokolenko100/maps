/**
 * Filter countries data
 */
export const filterCountriesData = data => {
  const countriesData = data.map(
    ({CountryName, CapitalLatitude, CapitalLongitude, ContinentName}) => ({
      name: CountryName,
      region: ContinentName,
      coordinates: {
        latitude: +CapitalLatitude ?? 1,
        longitude: +CapitalLongitude,
      },
    }),
  );
  return countriesData;
};

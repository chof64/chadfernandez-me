/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { useEffect, useState } from "react";
// @ts-expect-error - no types
import { GeoJsonGeometry } from "three-geojson-geometry";

const ThreeCountries = () => {
  const [geoJson, setGeoJson] = useState<any>();

  const getGeoJson = async () => {
    try {
      const response = await fetch(
        "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson",
      );

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      setGeoJson(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void getGeoJson();
  }, []);

  return (
    <group>
      {geoJson
        ? geoJson.features.map(
            (
              data: { geometry: any },
              index: string | number | bigint | undefined,
            ) => {
              const { geometry } = data;
              return (
                <lineSegments
                  key={index}
                  geometry={new GeoJsonGeometry(geometry, 1)}
                >
                  <lineBasicMaterial color="#525252" />
                </lineSegments>
              );
            },
          )
        : null}
    </group>
  );
};

export default ThreeCountries;

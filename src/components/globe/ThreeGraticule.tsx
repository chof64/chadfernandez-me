/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { geoGraticule10 } from "d3-geo";
//@ts-expect-error - no types
import { GeoJsonGeometry } from "three-geojson-geometry";

export default function ThreeGraticule() {
  return (
    <group>
      <lineSegments geometry={new GeoJsonGeometry(geoGraticule10(), 1)}>
        <lineBasicMaterial color="#3f3f46" />
      </lineSegments>
    </group>
  );
}

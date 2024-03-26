import ThreeCountries from "./ThreeCountries";
import ThreeGraticule from "./ThreeGraticule";

export default function ThreeMesh() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32]} />
      <meshPhongMaterial color="#ffffff" transparent={true} opacity={0.0} />
      <ThreeCountries />
      <ThreeGraticule />
    </mesh>
  );
}

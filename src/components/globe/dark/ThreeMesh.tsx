import ThreeCountries from "./ThreeCountries";
import ThreeGraticule from "./ThreeGraticule";

export default function ThreeMesh() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32]} />
      <meshPhongMaterial color="#191919" transparent={true} opacity={0.8} />
      <ThreeCountries />
      <ThreeGraticule />
    </mesh>
  );
}

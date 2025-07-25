import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

export default function StarRate({
  stars,
  STAR_SIZE,
}: {
  stars: number;
  STAR_SIZE?: number;
}) {
  return (
    <View style={{ flexDirection: "row", marginBottom: 4 }}>
      {[...Array(5)].map((_, i) => (
        <Ionicons
          key={i}
          name={i < stars ? "star" : "star-outline"}
          size={STAR_SIZE ? STAR_SIZE : 22}
          color={i < stars ? "#FFB800" : "#D3D3D3"}
          style={{ marginRight: 2 }}
        />
      ))}
    </View>
  );
}

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRef } from "react";
import { Animated } from "react-native";

export function AnimatedIcon({
  name,
  color,
  focused,
}: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  focused: boolean;
}) {
  const scale = useRef(new Animated.Value(focused ? 1 : 0.7)).current;

  Animated.spring(scale, {
    toValue: focused ? 1.2 : 1,
    useNativeDriver: true,
    friction: 5,
  }).start();

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <FontAwesome size={22} name={name} color={color} />
    </Animated.View>
  );
}

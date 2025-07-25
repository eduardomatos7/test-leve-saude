import { Tabs } from "expo-router";
import { AnimatedIcon } from "../../components/animatedTabBar";
import { Colors } from "../../constants/Colors";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.background,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          height: 70,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.15,
          shadowRadius: 8,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
          fontSize: 12,
          marginBottom: 8,
        },
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="feedback"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon name="home" color={color} focused={focused} />
          ),
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.label,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Minha Conta",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon name="user" color={color} focused={focused} />
          ),
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.label,
        }}
      />
    </Tabs>
  );
}

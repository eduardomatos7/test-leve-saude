import React from "react";
import { ScrollView, Text, View } from "react-native";
import StarRate from "../../components/StarsRate";
import styles from "../../styles/myRate.styles";
import { ratings } from "../../utils/ratingsArrayExample";

export default function MyRateScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <Text style={styles.title}>Todas as avaliações</Text>
        {ratings.map((item, idx) => (
          <View key={idx} style={styles.card}>
            <Text style={styles.date}>{item.date}</Text>
            <StarRate stars={item.stars} />
            <Text style={styles.comment}>{item.comment}</Text>
            {idx < ratings.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

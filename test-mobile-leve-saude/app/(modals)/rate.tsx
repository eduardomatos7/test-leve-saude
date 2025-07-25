import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../../styles/rate.styles";

const STAR_COUNT = 5;
const STAR_SIZE = 43;

export default function RateScreen() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleStarPress = (index: number) => {
    setRating(index);
  };

  const handleSend = () => {
    alert("Avaliação enviada!");
    setRating(0);
    setComment("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual a sua experiência?</Text>
      <Text style={styles.subtitle}>
        Escolha de 1 a 5 estrelas para classificar.
      </Text>
      <View style={styles.starsContainer}>
        {[...Array(STAR_COUNT)].map((_, i) => (
          <TouchableOpacity key={i} onPress={() => handleStarPress(i + 1)}>
            <Ionicons
              name={i < rating ? "star" : "star-outline"}
              size={STAR_SIZE}
              color={i < rating ? "#FFB800" : "#D3D3D3"}
              style={{ marginHorizontal: 4 }}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.labelsContainer}>
        <Text style={styles.labelLeft}>Muito ruim</Text>
        <Text style={styles.labelRight}>Excelente</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Adicione um comentário"
        placeholderTextColor="#A0A0A0"
        multiline
        value={comment}
        onChangeText={setComment}
      />
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

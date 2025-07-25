import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { z } from "zod";
import Button from "../../components/Home/Button";
import { ratingSchema } from "../../schemas/ratingSchema";
import { addRating } from "../../services/firebaseAddRating";
import styles from "../../styles/rate.styles";
const STAR_COUNT = 5;
const STAR_SIZE = 43;

export default function RateScreen() {
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("");

  const handleStarPress = (index: number) => {
    setStars(index);
  };

  const handleSend = () => {
    try {
      ratingSchema.parse({ stars, comment });
      addRating(stars, comment)
        .then((addSucess) => {
          if (addSucess) {
            setStars(0);
            setComment("");
            alert("Avaliação enviada!");
          }
        })
        .catch(() => {
          alert("Erro ao enviar avaliação:");
        });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const messages = err.issues.map((issue) => issue.message);
        if (messages.length > 1) {
          alert("Insira todos os campos");
        } else {
          alert(messages);
        }
      } else {
        alert("Ocorreu um erro inesperado");
      }
    }
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
            <AntDesign
              name={i < stars ? "star" : "staro"}
              size={STAR_SIZE}
              color={i < stars ? "#FFB800" : "#D3D3D3"}
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
      <Button strokColor text="Enviar" width={100} onChange={handleSend} />
    </View>
  );
}

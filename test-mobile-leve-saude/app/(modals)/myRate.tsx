import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import ListRatings from "../../components/listRatings";
import Rating from "../../interfaces/ratingsProps";
import { fetchRatings } from "../../services/firebaseFetchRating";
import styles from "../../styles/myRate.styles";

export default function MyRateScreen() {
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRatings()
      .then((ratings) => {
        setRatings(ratings);
        setLoading(false);
        return ratings;
      })
      .catch((error) => {
        console.error("Erro ao buscar avaliações:", error);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
        size={"large"}
      />
    );
  }
  if (loading) {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
        size={"large"}
      />
    );
  }

  return (
    <View style={styles.container}>
      {ratings.length === 0 ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.noRatingsText}>
            Você ainda não fez nenhuma avaliação.
          </Text>
        </View>
      ) : (
        <>
          <Text style={styles.title}>Todas as avaliações</Text>
          <FlatList
            data={ratings}
            renderItem={({ item, index }) => (
              <ListRatings
                stars={item.stars}
                comment={item.comment}
                key={item.key}
                createdAt={item.createdAt}
                idx={index}
                lengthList={ratings.length}
              />
            )}
          />
        </>
      )}
    </View>
  );
}

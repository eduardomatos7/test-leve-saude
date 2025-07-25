import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/myRate.styles";
import formatDate from "../utils/formatDate";
import StarRate from "./StarsRate";

function ListRatings({
  stars,
  comment,
  createdAt,
  idx,
  lengthList,
}: {
  stars: number;
  comment: string;
  createdAt: Date;
  idx: number;
  lengthList: number;
}) {
  return (
    <>
      <View key={idx} style={styles.card}>
        <Text style={styles.date}>{formatDate(createdAt)}</Text>
        <StarRate stars={stars} />
        <Text style={styles.comment}>{comment}</Text>
        {idx < lengthList - 1 && <View style={styles.divider} />}
      </View>
    </>
  );
}

export default ListRatings;

import { Image, StyleSheet, Text, View } from "react-native";
import { Content } from "../../interfaces/contents";
import { styles } from "./styles";

interface ContentItemProps {
  data: Content;
}

export const ContentItem = ({ data }: ContentItemProps) => {
  return (
    <View style={styles.item}>
      <Image
        style={{ width: 115, height: 115 }}
        source={require("../../../assets/movie.png")}
      />
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
        {data.name}
      </Text>
    </View>
  );
};

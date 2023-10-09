import { FlatList, View } from "react-native";
import { useContents } from "../../queries/contents";
import { ContentItem } from "../../components/ContentItem";
import { Filter } from "../../components/Filter/intex";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { useState } from "react";

export function Home() {
  const [filter, setFilter] = useState("");
  const { data: contents } = useContents(filter);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.filterContainer}>
        <Filter name="Terror" onPress={() => setFilter("Terror")} />
        <Filter name="Suspense" onPress={() => setFilter("Suspense")} />
        <Filter name="Drama" onPress={() => setFilter("Drama")} />
        <Filter name="Romance" onPress={() => setFilter("Romance")} />
        <Filter name="Ação" onPress={() => setFilter("Ação")} />
      </View>

      <FlatList
        numColumns={3}
        data={contents}
        renderItem={(item) => <ContentItem data={item.item} />}
        keyExtractor={(item) => item.name}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

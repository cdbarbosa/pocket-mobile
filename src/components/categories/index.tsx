import { FlatList, View } from "react-native";
import { Category } from "../category";
import { s } from "./styles";

type Category = {
  id: string;
  name: string;
};

type CategoriesProps = {
  data?: Category[];
  selected: string;
  onSelect: (id: string) => void;
};

export function Categories({ data = [], selected, onSelect }: CategoriesProps) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          iconId={item.id}
          name={item.name}
          isSelected={item.id === selected}
          onPress={() => onSelect(item.id)}
        />
      )}
      horizontal
      contentContainerStyle={s.content}
      style={s.container}
      showsHorizontalScrollIndicator={false}
    />
  );
}

import { View } from "react-native";
import { Categories } from "../components/categories";
import { categories } from "../utils/data";
import { useEffect, useState } from "react";

export default function Home() {
  const [category, setCategory] = useState("");

  useEffect(() => {
    setCategory(categories[0].id);
  }, [categories]);

  return (
    <View style={{ flex: 1 }}>
      <Categories
        data={categories}
        selected={category}
        onSelect={setCategory}
      />
    </View>
  );
}

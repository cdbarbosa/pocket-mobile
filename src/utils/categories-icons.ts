import {
  BedIcon,
  ChefHatIcon,
  CoffeeIcon,
  LucideProps,
  PopcornIcon,
  ShoppingCartIcon,
} from "lucide-react-native";

export const categoriesIcons: Record<
  string,
  React.ComponentType<LucideProps>
> = {
  "1": ChefHatIcon,
  "2": PopcornIcon,
  "3": ShoppingCartIcon,
  "4": BedIcon,
  "5": CoffeeIcon,
};

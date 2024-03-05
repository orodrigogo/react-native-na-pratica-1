import {
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"

import { styles } from "./styles"

type Props = TouchableOpacityProps & {
  recipe: {
    name: string
    image: string
    minutes: number
  }
}

export function Recipe({ recipe, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <ImageBackground source={{ uri: recipe.image }} style={styles.image}>
        <LinearGradient
          colors={["rgba(0,0,0,0.5)", "#000"]}
          style={styles.linear}
        >
          <Text style={styles.title} numberOfLines={1} lineBreakMode="tail">
            {recipe.name}
          </Text>

          <Text style={styles.minutes} numberOfLines={1} lineBreakMode="tail">
            {recipe.minutes} minutos
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}

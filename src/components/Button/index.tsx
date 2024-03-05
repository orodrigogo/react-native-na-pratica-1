import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { styles } from "./styles"

type Props = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.button]} {...rest}>
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  )
}

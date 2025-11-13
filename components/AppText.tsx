import { Text, TextProps } from "react-native";
import { FONT_FAMILY } from "../constants/fonts";

const AppText = (props: TextProps) => {
  const { style, children, ...rest } = props;
  return (
    <Text {...(rest as any)} style={[{ fontFamily: FONT_FAMILY }, style]}>
      {children}
    </Text>
  );
};

export default AppText;

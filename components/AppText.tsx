import { Text, TextProps } from "react-native";
import { FONT_FAMILY } from "../constants/fonts";

interface AppTextProps extends TextProps {
  className?: string;
}

const AppText = (props: AppTextProps) => {
  const { style, children, ...rest } = props;
  return (
    <Text {...rest} style={[{ fontFamily: FONT_FAMILY }, style]}>
      {children}
    </Text>
  );
};

export default AppText;

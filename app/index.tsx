import { Link } from "expo-router";
import { Text, View } from "react-native";
import { ONBOARDING_STEP_1 } from "../constants/Routes";


export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href={ONBOARDING_STEP_1}>Go to onboarding</Link>
    </View>
  );
}

import { View } from "react-native";
import { router } from "expo-router";
import { Button } from 'react-native-paper';
import { ONBOARDING_STEP_QUESTIONNAIRE } from "../constants/Routes";


export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button mode="contained" onPress={() => router.navigate(`${ONBOARDING_STEP_QUESTIONNAIRE}/0`)}>Go to onboarding</Button>
    </View>
  );
}

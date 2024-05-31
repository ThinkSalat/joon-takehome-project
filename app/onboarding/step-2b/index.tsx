import { View } from "react-native";
import { router } from "expo-router";
import { Button, Text } from 'react-native-paper';
import { ONBOARDING_FAMILY_CODE, ONBOARDING_STEP_3 } from "../../../constants/Routes";

export default function Index() {

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 50 }}>
      <Text variant="headlineMedium">Add children or enter family code</Text>
      <Button style={{ marginTop: 20 }} accessibilityLabel="Go to add children screen" mode="contained" onPress={() => router.navigate(ONBOARDING_STEP_3)}>Add children</Button>
      {/* Separator line */}
      <Button style={{ marginTop: 20 }} accessibilityLabel="Go to enter family code screen" mode="contained" onPress={() => router.navigate(ONBOARDING_FAMILY_CODE)}>Enter Family Code</Button>
    </View>
  );
}

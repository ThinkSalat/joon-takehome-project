import { View } from "react-native";
import { router } from "expo-router";
import { Button, Text, TextInput } from 'react-native-paper';
import { Controller, useFormContext } from "react-hook-form";
import { ONBOARDING_STEP_2 } from "../../../constants/Routes";
import { FormValues } from "../types";

export default function Index() {
  const { control } = useFormContext<FormValues>()

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 50 }}>
      <Text variant="headlineMedium">What is your name?</Text>
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Name"
            accessibilityLabel="Name text input"
            placeholder="Eg Kevin"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Button style={{ marginTop: 20 }} accessibilityLabel="Go to next screen" mode="contained" onPress={() => router.navigate(ONBOARDING_STEP_2)}>Next</Button>
    </View>
  );
}

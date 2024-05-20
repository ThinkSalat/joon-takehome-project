import { View } from "react-native";
import { router } from "expo-router";
import { Button, Text } from 'react-native-paper';
import { Controller, useFormContext } from "react-hook-form";
import { ONBOARDING_STEP_3 } from "../../../constants/Routes";
import { FormValues } from "../types";

export default function Index() {
  const { control, setValue, watch } = useFormContext<FormValues>()
  const selectedGender = watch('gender');

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 50 }}>
      <Text variant="headlineMedium">What is your gender?</Text>
      <Controller
        name="gender"
        control={control}
        defaultValue=""
        render={({ field: { onChange } }) => (
          <View style={{ flexDirection: 'row' }}>
            {['Male', 'Female', 'Other'].map((gender) => (
              <Button
                key={gender}
                mode={selectedGender === gender ? "contained" : "outlined"}
                onPress={() => {
                  onChange(gender);
                  setValue('gender', gender);
                }}
                >
                  {gender}
              </Button>
            ))}
          </View>
        )}
      />
      <Button accessibilityLabel="Go to next screen" mode="contained" onPress={() => router.navigate(ONBOARDING_STEP_3)}>Next</Button>
    </View>
  );
}

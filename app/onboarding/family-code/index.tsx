import { router } from "expo-router";
import { View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper';
import { Controller, useFormContext } from "react-hook-form";
import { ONBOARDING_STEP_4 } from "../../../constants/Routes";
import { FormValues } from "../types";
import { useMemo } from "react";

export default function Index() {
  const { control, watch } = useFormContext<FormValues>()
  const familyCode = watch('familyCode') || ""

  const validCode = useMemo( () => {
    return familyCode.length === 8;
  },[familyCode])

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 50 }}>
      <Text variant="headlineMedium">Please enter family code</Text>
      <Controller
        name="familyCode"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Family Code"
            defaultValue={""}
            accessibilityLabel="Family code input"
            placeholder="xxxxx"
            maxLength={8}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Button disabled={!validCode} style={{ marginTop: 20 }} accessibilityLabel="Go to next screen" mode="contained" onPress={() => router.navigate(ONBOARDING_STEP_4)}>Next</Button>
    </View>
  );
}

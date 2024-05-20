import { Link } from "expo-router";
import { TextInput, View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { ONBOARDING_STEP_2 } from "../../../constants/Routes";
import { FormValues } from "../types";

export default function Index() {
  const { control } = useFormContext<FormValues>()

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Eg Kevin"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      <Link href={ONBOARDING_STEP_2}>Next</Link>
    </View>
  );
}

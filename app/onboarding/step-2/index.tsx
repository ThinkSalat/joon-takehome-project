import { Link } from "expo-router";
import { Text, View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { ONBOARDING_STEP_3 } from "../../../constants/Routes";
import RadioButton from "../../../components/RadioButton";
import { FormValues } from "../types";

export default function Index() {
  const { control, setValue, watch } = useFormContext<FormValues>()
  const selectedGender = watch('gender');

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
     <Text>Choose an Option:</Text>
      <Controller
        name="gender"
        control={control}
        defaultValue=""
        render={({ field: { onChange } }) => (
          <View style={{ flexDirection: 'row' }}>
            {['Male', 'Female', 'Other'].map((gender) => (
              <RadioButton
                key={gender}
                label={gender}
                selected={selectedGender === gender}
                onPress={() => {
                  onChange(gender);
                  setValue('gender', gender);
                }}
              />
            ))}
          </View>
        )}
      />
      <Link href={ONBOARDING_STEP_3}>Next</Link>
    </View>
  );
}

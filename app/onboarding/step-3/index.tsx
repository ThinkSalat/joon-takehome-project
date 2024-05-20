import { View } from "react-native";
import { router } from "expo-router";
import { Button, Text, TextInput } from 'react-native-paper';
import { Controller, useFormContext, useFieldArray } from "react-hook-form";

import { ONBOARDING_STEP_4 } from "@/constants/Routes";
import { FormValues } from "../types";

export default function Index() {
  const { control } = useFormContext<FormValues>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: "childrenNames"
  })

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 50 }}>
      <Text variant="headlineMedium">Add your children</Text>

      {fields.map( (field, index) => {
        return (
          <Controller
            key={field.id}
            control={control}
            name={`childrenNames.${index}.value`}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Child's Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                right={<TextInput.Icon icon="delete" onPress={() => remove(index)} />}
                />
            )}
          />
        )
      })}
      <Button mode="outlined" onPress={() => append({ value: '' })}>Add Child</Button>
      <Button mode="contained" onPress={() => router.navigate(ONBOARDING_STEP_4)}>Done</Button>
    </View>
  );
}

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
                accessibilityLabel="Child's name input"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                right={<TextInput.Icon accessible accessibilityLabel="delete" icon="delete" onPress={() => remove(index)} />}
                />
            )}
          />
        )
      })}
      <Button style={{ marginTop: 20 }} mode="outlined" onPress={() => append({ value: '' })}>Add Child</Button>
      <Button style={{ marginTop: 20 }} accessibilityLabel="Finish onboarding" mode="contained" onPress={() => router.navigate(ONBOARDING_STEP_4)}>Done</Button>
    </View>
  );
}

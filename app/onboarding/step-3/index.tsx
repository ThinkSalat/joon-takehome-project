import { Button, TextInput, View } from "react-native";
import { Controller, useFormContext, useFieldArray } from "react-hook-form";
import { Link } from "expo-router";
import { ONBOARDING_STEP_4 } from "@/constants/Routes";


export default function Index() {
  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: "childrenNames"
  })

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {fields.map( (field, index) => {
        return (
          <View style={{ flexDirection: 'row' }}>
            <Controller
              key={field.id}
              control={control}
              name={`childrenNames.${index}`}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Child's Name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  />
              )}
            />
            <Button title="Delete" onPress={() => remove(index)}/>
          </View>
        )
      })}
      <Button title="Add Child" onPress={() => append('')}/>
      <Link href={ONBOARDING_STEP_4}>Next</Link>
    </View>
  );
}

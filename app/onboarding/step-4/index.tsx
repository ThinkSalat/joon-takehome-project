
import { Button, TextInput, View } from "react-native";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
import { FormValues } from "../types";

export default function Index() {
  const { control, handleSubmit } = useFormContext<FormValues>()

  const onSubmit: SubmitHandler<FormValues>= (data) => console.log(data)

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)}/>
    </View>
  );
}

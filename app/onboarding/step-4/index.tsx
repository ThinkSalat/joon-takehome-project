import { View } from "react-native";
import { Button, Checkbox, Text, TextInput } from 'react-native-paper';
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
import { FormValues } from "../types";
import { useState } from "react";

export default function Index() {
  const { control, handleSubmit } = useFormContext<FormValues>()
  const [hidePassword, setHidePassword] = useState(true)
    const [checked, setChecked] = useState(false);

  const onSubmit: SubmitHandler<FormValues>= (data) => console.log(data)

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 50 }}>
      <Text variant="headlineMedium">Create your Account</Text>

      <Text variant="bodyMedium">Email</Text>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Text variant="bodyMedium">Password</Text>
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            secureTextEntry={hidePassword}
            label="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            right={<TextInput.Icon icon="eye" onPress={() => setHidePassword(hidePw => !hidePw)}/>}
          />
        )}
      />
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>Sign Up</Button>
      <View style={{ flexDirection: "row" }}>
        <Checkbox.Android status={checked ? "checked" : "unchecked"} onPress={() => setChecked(!checked)}/>
        <Text variant="bodySmall" >I've read and accepted the terms and conditions</Text>
      </View>
    </View>
  );
}

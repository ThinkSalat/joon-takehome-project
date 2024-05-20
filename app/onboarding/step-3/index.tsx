import { Link } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";



export default function Index() {
  const { control, handleSubmit } = useFormContext()

  const onSubmit = data => console.log(data)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title='Submit' onPress={handleSubmit(onSubmit)}>Submit</Button>
    </View>
  );
}

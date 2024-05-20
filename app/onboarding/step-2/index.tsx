import { Link } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { ONBOARDING_STEP_3 } from "../../../constants/Routes";

const RadioButton = ({ onPress, selected, label }) => {
  return (
    <TouchableOpacity
      style={[styles.button, selected && styles.selected]}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    margin: 5,
  },
  selected: {
    backgroundColor: 'lightblue',
  },
  label: {
    textAlign: 'center',
  },
});

export default function Index() {
  const { control, setValue, watch } = useFormContext()
  const selectedGender = watch('gender');

  const onSubmit = data => console.log(data)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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

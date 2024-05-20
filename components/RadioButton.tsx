import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface RadioButtonProps {
  onPress: () => void;
  selected: boolean;
  label: string;
}

const RadioButton = ({ onPress, selected, label }: RadioButtonProps) => {
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

export default RadioButton
import React, { useMemo } from 'react';
import { View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Button, Text } from 'react-native-paper';
import { Controller, useFormContext } from "react-hook-form";
import { ONBOARDING_STEP_1, ONBOARDING_STEP_QUESTIONNAIRE } from "../../../constants/Routes";
import { FormValues } from "../types";
import { apiResponse } from '../questions'

export default function QuestionnaireItem() {
  const { questionIndex: indexString } = useLocalSearchParams();
  const questionIndex = Number(indexString)
  const currentQuestionnaire = useMemo(() => apiResponse[questionIndex], [questionIndex])
  const { control, setValue } = useFormContext<FormValues>()

  const goToNext = () => {
    if (questionIndex === apiResponse.length - 1) {
      router.navigate(ONBOARDING_STEP_1)
    } else {
      router.navigate(`${ONBOARDING_STEP_QUESTIONNAIRE}/${questionIndex + 1}`)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 50 }}>
      <Text variant="headlineMedium">{currentQuestionnaire.question}</Text>

      <Controller
        name={`questionnaireValues.${questionIndex}`}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <View style={{ flexDirection: 'column' }}>
              {currentQuestionnaire.answers.map(({ id, answer }) => {
                return (
                  <Button
                    key={id}
                    mode={"outlined"}
                    onPress={() => {
                      onChange(id);
                      setValue(`questionnaireValues.${questionIndex}`, { question_id: currentQuestionnaire.id, answer_id: id });
                      goToNext()
                    }}
                  >
                    {answer}
                  </Button>
                )
              })}
            </View>
          )
        }
        }
      />
    </View>
  );
}

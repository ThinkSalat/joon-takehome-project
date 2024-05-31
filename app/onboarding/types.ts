export interface FormValues {
  name: string;
  gender: string;
  childrenNames?: { value: string }[];
  email: string;
  password: string;
  familyCode?: string;
  questionnaireValues: {
    question_id: number,
    answer_id: number
  }[]
}
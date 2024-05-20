import { Slot } from 'expo-router';
import { FormProvider, useForm } from 'react-hook-form';

export default function OnboardingLayout() {
  const methods = useForm()

  return <FormProvider {...methods}><Slot /></FormProvider>
}

/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InferType } from 'yup';
import { One, Two, Three, NavigationButtons, Four } from '@app/views/form';
import { form } from '@app/views/validator';

type FormType = InferType<typeof form>;

const Home = () => {
  const methods = useForm<FormType>({
    mode: 'all',
    resolver: yupResolver(form),
  });
  const [currentStep, setCurrentStep] = useState<number>(1);
  const nextStep = () => {
    setCurrentStep((el) => el + 1);
  };

  const prevStep = () => {
    setCurrentStep((el) => el - 1);
  };

  const onSubmit = (data) => console.log(data);
  return (
    <Box>
      <Box>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {currentStep === 1 && <One />}
            {currentStep === 2 && <Two />}
            {currentStep === 3 && <Three />}
            {currentStep === 4 && <Four />}
            <NavigationButtons nextStep={nextStep} prevStep={prevStep} currentStep={currentStep} />
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};
export default Home;

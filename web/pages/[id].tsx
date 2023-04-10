import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { One, Two, Three, NavigationButtons } from '@app/views/form';

const Home = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  return (
    <Box>
      <Box>
        {currentStep === 1 && <One />}
        {currentStep === 2 && <Two />}
        {currentStep === 3 && <Three />}
        <NavigationButtons changeStep={setCurrentStep} currentStep={currentStep} />
      </Box>
    </Box>
  );
};
export default Home;

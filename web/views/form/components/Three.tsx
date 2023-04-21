import { Flex, Text, FormControl, FormLabel, Input, Stack, Box } from '@chakra-ui/react';
import React from 'react';

export const Three = () => (
  <Box mb="30px">
    <Flex justifyContent="center" flexDir="column" w="900px">
      <Text mt="5">Safety arrangements are completed and permission to work is granted</Text>

      <FormControl id="input1" mb={4} mt={10}>
        <FormLabel>Name of the officer/designation</FormLabel>
        <Input />
        <Text mt="10px">We engage in bespoke work</Text>
      </FormControl>
      <Flex justifyContent="space-between" gap="4px" mb="20px">
        <Text>Name of employees/designation </Text>
        <Text>Time</Text>
        <Text>Safety equipment used(ladder,gloves,safety belt,etc)</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Stack spacing={7}>
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
          <Text>4</Text>
          <Text>5</Text>
          <Text>6</Text>
        </Stack>
        <Stack spacing={3}>
          <Input placeholder="Name" size="md" />
          <Input placeholder="Name" size="md" />
          <Input placeholder="Name" size="md" />
          <Input placeholder="Name" size="md" />
          <Input placeholder="Name" size="md" />
          <Input placeholder="Name" size="md" />
        </Stack>
        <Stack spacing={3}>
          <Input placeholder="Time" size="md" type="datetime-local" />
          <Input placeholder="Time" size="md" type="datetime-local" />
          <Input placeholder="Time" size="md" type="datetime-local" />
          <Input placeholder="Time" size="md" type="datetime-local" />
          <Input placeholder="Time" size="md" type="datetime-local" />
          <Input placeholder="Time" size="md" type="datetime-local" />
        </Stack>
        <Stack spacing={3}>
          <Input size="md" />
          <Input size="md" />
          <Input size="md" />
          <Input size="md" />
          <Input size="md" />
          <Input size="md" />
        </Stack>
      </Flex>
    </Flex>
  </Box>
);

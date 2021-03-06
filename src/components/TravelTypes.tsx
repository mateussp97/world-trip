import React from 'react';
import { Flex, Wrap, WrapItem, Text, Image } from '@chakra-ui/react';
import { TravelTypes as data } from './../data/TravelTypes';

export default function TravelTypes() {
  return (
    <Flex
      as="div"
      width="100vw"
      height="100%"
      pt="5rem"
      px="1rem"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Wrap
        h="100%"
        w="100%"
        maxW="1160px"
        mx="auto"
        justify={{ base: 'center', md: 'space-between', lg: 'space-between' }}
        spacing={{ base: '3rem', md: '0', lg: '0' }}
      >
        {data.map((item) => (
          <WrapItem key={item.text}>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={item.url}
                w={{ base: '64px', md: '64px', lg: '80px' }}
                h={{ base: '64px', md: '64px', lg: '80px' }}
              />
              <Text
                color="gray.700"
                mt="1.5rem"
                fontSize={{ base: '1.125rem', md: '1.125rem', lg: '1.25rem' }}
                fontWeight="medium"
              >
                {item.text}
              </Text>
            </Flex>
          </WrapItem>
        ))}
      </Wrap>
      <div
        style={{
          background: '#47585b',
          width: '90px',
          height: '2px',
          marginTop: '5rem',
        }}
      />
    </Flex>
  );
}

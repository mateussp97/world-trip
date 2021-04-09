import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { Flex, Wrap, WrapItem, Heading } from '@chakra-ui/react';
import Header from '../../components/Header';
import { ContinentPage as data } from '../../data/ContinentPage';
import BannerContinent from '../../components/BannerContinent';
import ContentContinent from '../../components/ContentContinent';
import CityCard from '../../components/CityCard';

export default function Continent() {
  const { asPath } = useRouter();

  const continent = data
    .filter((item) => item.slug === asPath)
    .map((item) => (
      <Flex
        key={item.slug}
        maxW="100vw"
        overflowX="hidden"
        overflowY="hidden"
        direction="column"
      >
        <Header />
        <BannerContinent title={item.title} url={item.url} />
        <ContentContinent
          title={item.title}
          cities={item.cities}
          countries={item.countries}
          language={item.language}
          summary={item.summary}
          facts={item.facts}
        />
        <div
          style={{
            width: '100%',
            maxWidth: '1160px',
            margin: '0 auto',
            padding: '0 16px 48px',
          }}
        >
          <Heading
            color="gray.700"
            fontWeight="600"
            fontSize="2.25rem"
            mb="40px"
          >
            The major cities
          </Heading>
          <Wrap spacing="32px" justify="center">
            {item.main_cities.map((city) => (
              <WrapItem key={city.url}>
                <CityCard
                  url={city.url}
                  name={city.name}
                  country={city.country}
                  flag={city.flag}
                />
              </WrapItem>
            ))}
          </Wrap>
        </div>
      </Flex>
    ));

  return continent;
}

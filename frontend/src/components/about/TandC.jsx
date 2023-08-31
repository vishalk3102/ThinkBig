import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const TandC = ({termsandconditions}) => {
  return (
      <Box>
          <Heading
              size={'md'}
              children='Terms & Condition'
              textAlign={['center', 'left']}
              my='4'
          />

          <Box
              h={'sm'}
              p={'4'}
              overflowY='scroll'
          >
              <Text
                  textAlign={['center', 'left']}
                  letterSpacing='widest'
                  fontFamily={'heading'}
              >
                  {termsandconditions}
              </Text>
              <Heading
                  my={'4'}
                  size='xs'
                  children='Refund only applicable for cancellation within 7 days.'
              />
          </Box>
    </Box>
  )
}

export default TandC
import React from 'react';

import { Box, ChakraProps, Text } from '@chakra-ui/react';

import presignedUrlApi from '@apis/S3FileUploader/S3FileUploaderApi';

interface StarterDocsExamplesFileInputPageProps extends ChakraProps {}

function StarterDocsExamplesFileInputPage({
  ...basisProps
}: StarterDocsExamplesFileInputPageProps) {
  return (
    <Box {...basisProps}>
      <Text>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            presignedUrlApi
              .uploadFileToS3(file)
              .then(console.log)
              .catch(console.error);
          }}
        />
      </Text>
    </Box>
  );
}

export default StarterDocsExamplesFileInputPage;

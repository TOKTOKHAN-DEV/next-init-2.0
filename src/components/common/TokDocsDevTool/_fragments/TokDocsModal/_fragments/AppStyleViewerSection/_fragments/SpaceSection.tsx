import React from 'react';

import { Box } from '@chakra-ui/layout';
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

interface SpaceSectionProps {
  spaces: Record<string, string>;
}

const SpaceSection = ({ spaces }: SpaceSectionProps) => {
  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Size</Th>
            <Th>Css</Th>
            <Th>Length</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(spaces).map((key, idx) => {
            const space = spaces[key];
            return (
              <Tr key={idx}>
                <Td>{key}</Td>
                <Td>
                  <Box w={space} bg="green.300" h="30px" />
                </Td>
                <Td>{space}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SpaceSection;

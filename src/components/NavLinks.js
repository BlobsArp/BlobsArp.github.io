import {
  Button,
  Box,
  Center,
  HStack,
  Text,
  Link,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { Link as GatbsyLink } from 'gatsby';
import { SavedIcon, TwitterIcon, BookmarkIcon } from './Common/Icons';
import { dynamic } from '../state';

const NavLinks = ({ saveBlob }) => {
  const toast = useToast();
  return (
    <Box px="10" pt="3">
      <Center>
        <HStack spacing="2px" fontSize="sm">
          <Box as={Text}>
            <Button
              variant="heavy"
              leftIcon={<BookmarkIcon fontSize="18px" />}
              aria-label="Save blob"
              onClick={() => {
                saveBlob();
                toast({
                  render: () => (
                    <Box
                      bg="primary"
                      my="10"
                      py="3"
                      px="5"
                      rounded="lg"
                      color="white"
                      textAlign="center"
                      fontWeight="500"
                      shadow="xl"
                    >
                      Blob Saved!
                    </Box>
                  ),
                  duration: 2000,
                });
              }}
            >
              Save
            </Button>
          </Box>

          <Box as={Text}>
            <Button
              href="/saved-blobs/"
              as={GatbsyLink}
              to="/saved-blobs"
              variant="heavy"
              leftIcon={<SavedIcon fontSize="18px" />}
              aria-label="Saved blobs"
            >
              Saved blobs
            </Button>
          </Box>
          <Box as={Text}>
            <Button
              href="https://sylus.co.uk"
              target="_blank"
              as={Link}
              variant="heavy"
              aria-label="Share"
            >
              Sylus SEO
            </Button>
          </Box>
        </HStack>
      </Center>
    </Box>
  );
};

export default dynamic(NavLinks);

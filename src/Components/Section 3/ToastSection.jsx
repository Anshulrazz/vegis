import { Button, Wrap, WrapItem, useToast } from '@chakra-ui/react';
import React from 'react';

function ToastSection() {
  const toast = useToast();

  return (
    <Wrap>
      <WrapItem>
        <Button
          onClick={() =>
            toast({
              title: 'Success toast',
              status: 'success',
              isClosable: true,
            })
          }
        >
          Show Success toast
        </Button>
      </WrapItem>
    </Wrap>
  );
}

export default ToastSection;

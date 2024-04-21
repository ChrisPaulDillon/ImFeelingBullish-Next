import { createStandaloneToast, theme } from '@chakra-ui/react';
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

declare module '@tanstack/react-query' {
  export interface MutationMeta {
    useGlobalErrorHandler: boolean;
    fallbackTranslation?: string;
  }

  export interface QueryMeta {
    useGlobalErrorHandler: boolean;
    fallbackTranslation?: string;
  }
}

const { toast } = createStandaloneToast({ theme });

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      staleTime: 0.5 * 60 * 1000,
      meta: { useGlobalErrorHandler: false },
    },
    mutations: {
      meta: { useGlobalErrorHandler: false },
    },
  },
  mutationCache: new MutationCache({
    onError: (error, _variables, _context, mutation) => {
      if (mutation.meta?.useGlobalErrorHandler) {
        if (mutation.meta?.useGlobalErrorHandler) {
          const err = error as AxiosError;
          handleGlobalErrorResponse(err, mutation.meta?.fallbackTranslation);
        }
      }
    },
  }),
  queryCache: new QueryCache({
    onError: (_error, query) => {
      if (query.meta?.useGlobalErrorHandler) {
        const err = _error as AxiosError;
        handleGlobalErrorResponse(err, query.meta?.fallbackTranslation);
      }
    },
  }),
});

const ERR_BAD_REQUEST_400 = 'ERR_BAD_REQUEST';

type ErrorResponseObj = {
  message: string;
  metadata: string;
  reasons: string[];
};

const handleGlobalErrorResponse = (error: AxiosError, fallbackTranslation?: string) => {
  const err = error as AxiosError;
  const fluentResponseMessage = err.response?.data as ErrorResponseObj | string;

  if (err.code !== ERR_BAD_REQUEST_400) {
    return;
  }

  const errorTitle = 'Error';
  const errorStatus = 'error';

  if (typeof fluentResponseMessage === 'string') {
    toast({
      title: errorTitle,
      description: fluentResponseMessage,
      status: errorStatus,
      duration: 9000,
      isClosable: true,
      position: 'top',
    });
    return;
  }

  if (fluentResponseMessage.message) {
    toast({
      title: errorTitle,
      description: fluentResponseMessage.message,
      status: errorStatus,
      duration: 9000,
      isClosable: true,
      position: 'top',
    });
    return;
  }

  const customErrorMsg = fallbackTranslation as string;
  if (customErrorMsg) {
    toast({
      title: errorTitle,
      description: customErrorMsg,
      status: errorStatus,
      duration: 9000,
      isClosable: true,
      position: 'top',
    });
    return;
  }

  toast({
    title: errorTitle,
    description: 'An unknown error has occurred',
    status: errorStatus,
    duration: 9000,
    isClosable: true,
    position: 'top',
  });
};

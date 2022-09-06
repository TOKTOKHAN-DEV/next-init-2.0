import React from 'react';

import {
  Box,
  Button,
  Center,
  ChakraProps,
  Image,
  List,
  ListItem,
  Text,
  useToast,
} from '@chakra-ui/react';

import {
  useUploadFileToS3Mutation,
  useUploadFilesToS3Mutation,
} from '@apis/S3FileUploader/S3FileUploaderApi.mutation';

import { bytesToMB, fileToBase64, isBase64Img, isOverSize } from '@utils/file';

interface StarterDocsExamplesFileInputPageProps extends ChakraProps {}

function StarterDocsExamplesFileInputPage({
  ...basisProps
}: StarterDocsExamplesFileInputPageProps) {
  const FILE_MAX_SIZE_MB = 10;

  const [files, setFiles] = React.useState<File[]>([]);
  const [currentFile, setCurrentFile] = React.useState<File | null>(null);
  const [currentFileBase64, setCurrentFileBase64] = React.useState<
    string | ArrayBuffer | null
  >(null);

  const toast = useToast();

  const {
    data: uploadedFileData,
    mutateAsync: uploadFileMutate, //
    isLoading: isLoadingUploadFileMutate,
  } = useUploadFileToS3Mutation();
  const {
    data: uploadedFilesData,
    mutateAsync: uploadFilesMutate,
    isLoading: isLoadingUploadFilesMutate,
  } = useUploadFilesToS3Mutation();

  const onChangeFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;
    if (isOverSize(file, { maxSize: FILE_MAX_SIZE_MB })) {
      toast({
        status: 'info',
        description:
          '용량이 초과된 파일입니다. 용량처리는 onSubmit 시점이 아닌 onChange 시점이 더욱 좋습니다. 지금은 onSubmit 에서 하도록 패쓰~',
      });
    }
    setCurrentFile(file);
    setFiles((cur) => [...cur, file]);
  };

  const onSubmitCurrentFile = () => {
    if (!currentFile) return;
    uploadFileMutate(
      { file: currentFile, options: { maxSize: FILE_MAX_SIZE_MB } },
      {
        onSuccess: ({ file }) => {
          toast({
            status: 'success',
            description: `${file.name}이 정상적으로 업로드 되었습니다.`,
          });
        },
        onError: (err) => {
          toast({
            status: 'error',
            description: err.message,
          });
        },
      },
    );
  };

  const onSubmitFiles = async () => {
    const { fulfilled, rejected } = await uploadFilesMutate({
      files,
      options: { maxSize: FILE_MAX_SIZE_MB },
    });
    fulfilled.forEach((data) => {
      toast({
        status: 'success',
        description: `${data.value.file.name}이 정상적으로 업로드 되었습니다.`,
      });
    });

    rejected.forEach((err) => {
      toast({
        status: 'error',
        description: err.reason.message,
      });
    });
  };

  const onSubmitWithFormData = async () => {
    if (!currentFile) return;
    const { url } = await uploadFileMutate({ file: currentFile });
    const { fulfilled } = await uploadFilesMutate({ files });
    const formData = {
      name: '블라블라',
      file: url,
      files: fulfilled,
    };
    console.log({ formData });
    toast({
      status: 'success',
      description: `mutateAsync 로 실행시점에 muate 의 결과 값을 가져올 수 있습니다. 콘솔 확인하기`,
    });
  };

  // For: Convert Current File To Base64
  React.useEffect(() => {
    async function setter() {
      if (!currentFile) return;
      setCurrentFileBase64(await fileToBase64(currentFile));
    }
    setter();
  }, [currentFile]);

  // For : Console Log Current Fullfiled Muataion Data
  React.useEffect(() => {
    console.log(
      'useMuattion 에서도 최근에 실행된 mutate 의 결과값을 useQuery 처럼 data 값으로 가져올 수 있습니다.',
      { uploadedFileData, uploadedFilesData },
    );
  }, [uploadedFileData, uploadedFilesData]);

  return (
    <Box w="500px" {...basisProps}>
      <Center w="100%" mb="20px" flexDirection="column">
        <Text mb="10px">용량제한 :{FILE_MAX_SIZE_MB}MB</Text>
        <Button as="label" colorScheme="cyan" w="100%" cursor="pointer">
          파일 선택
          <input
            style={{ display: 'none' }}
            type="file"
            onChange={onChangeFile}
          />
        </Button>
      </Center>
      <Center mb="20px">
        <Button
          mr="10px"
          w="100%"
          colorScheme="primary"
          isLoading={isLoadingUploadFileMutate}
          onClick={onSubmitCurrentFile}
        >
          현재 파일 업로드 하기
        </Button>
        <Button
          w="100%"
          colorScheme="secondary"
          isLoading={isLoadingUploadFilesMutate}
          onClick={onSubmitFiles}
        >
          파일 목록 업로드하기
        </Button>
      </Center>
      <Text textAlign="center" fontWeight={700} mb="10px">
        현재 파일
      </Text>
      <Center w="100%" flexDirection="column">
        {isBase64Img(currentFileBase64) && <Image src={currentFileBase64} />}
        <List w="100%" bg="gray.200" p="10px" mb="20px">
          {!!currentFile && (
            <ListItem>
              {currentFile.name}({bytesToMB(currentFile.size).toFixed(1)}MB)
            </ListItem>
          )}
        </List>
      </Center>

      <Text textAlign="center" fontWeight={700} mb="10px">
        파일 목록
      </Text>
      <List bg="gray.200" p="10px" mb="40px">
        {files.map((f, idx) => {
          return (
            <ListItem key={idx}>
              {f.name}({bytesToMB(f.size).toFixed(1)}MB)
            </ListItem>
          );
        })}
      </List>

      <Button
        w="100%"
        colorScheme="messenger"
        isLoading={isLoadingUploadFileMutate}
        onClick={onSubmitWithFormData}
      >
        파일이 포함된 폼 제출시 파일 url 사용하기
      </Button>
    </Box>
  );
}

export default StarterDocsExamplesFileInputPage;

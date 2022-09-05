//@delete:file
import type { NextApiRequest, NextApiResponse } from 'next';

import instance from '@apis/_axios/instance';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' });
  if (!req.body.file) {
    res.status(400).statusMessage = 'file 은 필수 값 입니다.';
    return;
  }
  const { file } = req.body;
  if (!isFile(file)) {
    res.status(400).statusMessage = '올바르지 않은 파일 형식입니다.';
    return;
  }

  console.log({ file });
  //   const {
  //     data: { url },
  //   } = await instance.post<{ url: string }>(`/v1/presigned_url/`, {
  //     name: file.name,
  //   });

  //   const { data } = await instance.put(
  //     url,
  //     { file },
  //     { headers: { 'Content-Type': file.type } },
  //   );

  //   res.status(200).json(data);
};

function isFile(value: unknown): value is File {
  return true;
}

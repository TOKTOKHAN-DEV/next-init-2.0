import { RootConfig } from '@toktokhan-fe/cli';

import { clearFile } from './src/clearFiles/clearFile';

/**
 * config 를 정의합니다.
 *
 * RootConfig 의 제네릭에 plugin 의 type 을 정의 함으로써 type safe 하게 option 을 정의할 수 있습니다.
 */
const config: RootConfig<{ plugins: [typeof clearFile] }> = {
  /**
   * tokript 가 해당 플러그인을 실행시키기 위해 조회하는 플러그인 리스트입니다.
   */
  plugins: [clearFile],
  /**
   * 정의된 이름을 key 값으로 config type 을 value 로써 config 정의가 가능합니다.
   */
  'clear:file': {},
};

export default config;

import { defineCommand } from '@toktokhan-fe/cli';
import fs from 'fs';
import madge from 'madge';
import path from 'path';

// tsconfig.json 파일을 읽고 baseUrl 설정 가져오기
const getTsconfig = () => {
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
  return tsconfig;
};

const extensions = ['.tsx', '.jsx'];

const projectRoot = process.cwd();
const srcDir = path.join(projectRoot, 'src');
const tsconfigPath = path.join(projectRoot, 'tsconfig.json');

// Madge 설정
const madgeConfig = {
  baseDir: srcDir,
  fileExtensions: extensions.map((ext) => ext.slice(1)),
  tsConfig: getTsconfig(),
};

const findUnusedFile = async () => {
  await madge(projectRoot, madgeConfig)
    .then((res) => {
      const orphans = res.orphans();
      const unusedFiles = orphans
        .filter((file) => {
          return extensions.includes(path.extname(file));
        })
        .filter((item) => {
          const parse = item.split('/');
          const isIndex =
            parse.includes('index.tsx') || parse.includes('index.jsx');
          return parse[0] !== 'app' && parse[0] !== 'pages' && !isIndex;
        });

      if (unusedFiles.length === 0) {
        console.log('사용되지 않는 파일이 없습니다.');
        return;
      }

      unusedFiles.forEach((file) => console.log(file));

      const fileContent = unusedFiles.join('\n');
      // fs.writeFileSync(path.join(projectRoot), fileContent, "utf8");
      const outputPath = path.join(projectRoot, `unUsedFiles`);

      fs.mkdir(path.dirname(outputPath), { recursive: true }, (err) => {
        if (err) throw err;

        fs.writeFileSync(outputPath, fileContent, 'utf8');
      });
    })
    .catch((err) => {
      console.error('종속성 분석 중 오류 발생:');
      console.error(err);
    });
};

export const clearFile = defineCommand<'clear:file', any>({
  /**
   * 플러그인의 이름을 정의합니다.
   *
   * - tokript {command} 로 실행됩니다.
   * - tok-cli.config 에서 옵션 정의시 해당 옵션의 key 값으로 사용됩니다.
   */
  name: 'clear:file',
  /**
   * 플러그인의 설명을 정의합니다.
   *
   * - tokript help 실행시 표기됩니다.
   */
  description: '프로젝트에서 사용되지않는 컴포넌트 제거합니다.',
  /**
   * 플러그인 실행시 사용할 config 의 기본값을 정의합니다.
   *
   * - 특정 옵션이 `--output` 과 같은 `cli option` 이나 `tok-cli.config.ts` 에 정의 되지 않았을 때 사용됩니다.
   */
  default: {},
  /**
   * --output, -o 와 같은 cli option 을 정의합니다.
   *
   * - cli option 에 정의되지 않은 옵션은 오직 config 파일에서만 정의 가능합니다.
   * - cli option 은 원시값, 원시값 배열과 같은 간단한 값만 사용 가능합니다. ex) string, string[]
   * - tokript help {command} 시 정의한 alias, 설명, 기본값을 확인할 수 있습니다.
   */

  /**
   * 플러그인 실행 함수를 정의합니다.
   *
   * - config: GenTxtConfig 타입의 config 객체가 인자로 넘어옵니다.
   * - config 객체는 default, cli option, tok-cli.config.ts 에 정의된 값들이 합쳐진 값입니다.
   * - config 우선순위는 cli option > tok-cli.config.ts > default 입니다.
   * - run 함수는 플러그인의 실제 동작을 정의합니다.
   */
  run: async () => {
    findUnusedFile();
  },
});

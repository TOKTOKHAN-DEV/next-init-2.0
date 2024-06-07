import { defineCommand } from '@toktokhan-fe/cli';
import pkg from 'enquirer';
import fs from 'fs';
import path from 'path';

/**
 * 플러그인의 config 타입을 정의합니다.
 *
 * - tok-cli.config.ts 에서 해당 플러그인의 option 을 정의할 때 사용됩니다.
 * - config 파일은 js, ts 이기 때문에, 옵션 객체의 각 property 는 함수, 배열 등 어떤 타입이든 정의 가능합니다.
 * - run 함수의 인자 type 으로 사용됩니다.
 */

export type GenSnippetConfig = {
  output: string;
};

type SnippetType = 'custom' | 'default';

interface SnippetItem {
  prefix: string;
  body: string[];
  description: string;
}

function getBasePath(type: SnippetType) {
  const projectRoot = process.cwd();
  const outputPath = path.join(projectRoot, '.vscode', `${type}.code-snippets`);
  return outputPath;
}

function createSnippet({
  type,
  formattedSnippets,
}: {
  type: SnippetType;
  formattedSnippets: Record<string, SnippetItem>;
}) {
  fs.mkdir(path.dirname(getBasePath(type)), { recursive: true }, (err) => {
    if (err) throw err;

    fs.writeFile(
      getBasePath(type),
      JSON.stringify(formattedSnippets, null, 2),
      (err) => {
        if (err) throw err;
        console.log('Snippets saved to .vscode/project.code-snippets');
      },
    );
  });
}

function parseSnippets(snippetString: string) {
  const snippets = snippetString
    .split('/**')
    .filter((s) => s.trim().startsWith('* @prefix'));
  return snippets.map((snippet) => {
    const prefixMatch = snippet.match(/\* @prefix\s+(\w+)/);
    const descriptionMatch = snippet.match(/\* @description\s+([^*]+)/);
    const bodyMatch = snippet.match(/\* @body\s+([^*]+)/);

    const isCursor = bodyMatch
      ? bodyMatch[1].trim().replaceAll('{cursor}', `$2`)
      : '';
    const isVar = isCursor ? isCursor.replaceAll('{var}', '${1:custom}') : '';

    return {
      prefix: prefixMatch ? prefixMatch[1].trim() : '',
      description: descriptionMatch ? descriptionMatch[1].trim() : '',
      body: [isVar],
    };
  });
}

function formatSnippets(snippetArray: SnippetItem[]) {
  const formatted: Record<string, SnippetItem> = {};
  snippetArray.forEach((snippet: SnippetItem) => {
    formatted[snippet.description] = {
      ...snippet,
    };
  });
  return formatted;
}

async function getTypeSnippet() {
  const { prompt } = pkg;
  const type = await prompt<{
    snippetType: 'custom' | 'default';
  }>({
    type: 'autocomplete',
    name: 'snippetType',
    choices: ['default', 'custom'],
    message: '스니펫 형태를 선택해 주세요',
    required: true,
  });
  return type.snippetType;
}

export const genSnippet = defineCommand<'gen:snippet', GenSnippetConfig>({
  /**
   * 플러그인의 이름을 정의합니다.
   *
   * - tokript {command} 로 실행됩니다.
   * - tok-cli.config 에서 옵션 정의시 해당 옵션의 key 값으로 사용됩니다.
   */
  name: 'gen:snippet',
  /**
   * 플러그인의 설명을 정의합니다.
   *
   * - tokript help 실행시 표기됩니다.
   */
  description: '프로젝트별 커스텀 스니펫 생성을 자동생성해줍니다.',
  /**
   * 플러그인 실행시 사용할 config 의 기본값을 정의합니다.
   *
   * - 특정 옵션이 `--output` 과 같은 `cli option` 이나 `tok-cli.config.ts` 에 정의 되지 않았을 때 사용됩니다.
   */
  default: {
    output: path.resolve('generated', 'my.txt'),
  },
  /**
   * --output, -o 와 같은 cli option 을 정의합니다.
   *
   * - cli option 에 정의되지 않은 옵션은 오직 config 파일에서만 정의 가능합니다.
   * - cli option 은 원시값, 원시값 배열과 같은 간단한 값만 사용 가능합니다. ex) string, string[]
   * - tokript help {command} 시 정의한 alias, 설명, 기본값을 확인할 수 있습니다.
   */
  cliOptions: [
    {
      name: 'output',
      alias: 'o',
      description: '텍스트 파일 생성 경로',
      type: 'string',
    },
  ],
  /**
   * 플러그인 실행 함수를 정의합니다.
   *
   * - config: GenTxtConfig 타입의 config 객체가 인자로 넘어옵니다.
   * - config 객체는 default, cli option, tok-cli.config.ts 에 정의된 값들이 합쳐진 값입니다.
   * - config 우선순위는 cli option > tok-cli.config.ts > default 입니다.
   * - run 함수는 플러그인의 실제 동작을 정의합니다.
   */
  run: async () => {
    const type = await getTypeSnippet();
    const isCustom = type === 'custom';
    const isCustomFile = fs.existsSync('customSnippets.ts');

    if (isCustom && !isCustomFile) {
      const projectRoot = process.cwd();
      const outputPath = path.join(projectRoot, `customSnippets.ts`);

      const initData = fs.readFileSync(
        path.resolve(__dirname, 'initSnippets.ts'),
        {
          encoding: 'utf8',
        },
      );
      fs.writeFile(outputPath, initData, (err) => {
        if (err) throw err;
        console.log('Snippets saved to .vscode/project.code-snippets');
      });
    }

    const data = isCustom
      ? isCustomFile
        ? fs.readFileSync('customSnippets.ts', { encoding: 'utf8' })
        : fs.readFileSync(path.resolve(__dirname, 'initSnippets.ts'), {
            encoding: 'utf8',
          })
      : fs.readFileSync(path.resolve(__dirname, 'defaultSnippets.ts'), {
          encoding: 'utf8',
        });

    const formattedSnippets = formatSnippets(parseSnippets(data));

    createSnippet({ type, formattedSnippets });
  },
});

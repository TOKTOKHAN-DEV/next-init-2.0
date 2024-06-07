export {};
/* 
사용법 설명
    - 기본적으로 아래 example 코드의 형태를 따릅니다.
        - prefix : 호출명령어.
        - description : 스니펫 설명.
        - body : 생성 코드
    
    - 위와 같은 형태로 사용할 스니펫 형태를 해당 파일에(customSnippet.ts)에 이어서 작성 해주시면 됩니다.

    - 작업 효율을 증가시키기위해 cursor위치 및 디스클로져 처럼 네이밍 지정이 필요한 경우 추가 기능을 사용할 수 있습니다.
        - {cursor} : 스니펫 생성 이후 커서 위치를 지정하고 싶을때 사용합니다. 
                     ex) console.log({cursor});
        - {var}    : 스니펫 생성 이후 네이밍 수정을 해야하는 경우 사용합니다.
                     ex) const {isOpen:{var}IsOpen,onOpen:{var}OnOpen,onClose:{var}OnClose} = useDisclosure(); 
*/

/**
 * @prefix tok_example1
 * @description 커스텀 스니펫 예시입니다.
 * @body console.log('Hello, world!');
 */

/**
 * @prefix tok_example2
 * @description 커스텀 스니펫(var적용) 예시입니다.
 * @body const handler{var} = useCallback(()=>{},[]);
 */

/**
 * @prefix tok_example3
 * @description 커스텀 스니펫(cursor적용) 예시입니다.
 * @body console.log('Hello, {cursor}');
 */

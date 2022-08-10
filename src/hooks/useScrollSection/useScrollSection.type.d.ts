type UseScrollSectionParamType = {
  /** 부모요소에 해당하는 HTML Element 입니다 scroll yOffset 의 기준이 됩니다. default: "body" */
  parentsRef?: React.MutableRefObject<HTMLElement | null>;
  /** scroll progress 를 조회할 대상 Element 입니다. */
  onProgress: (arg: {
    /** Target Element 의 높이 대비 window 의 scroll 정도입니다. */
    progress: number;
    /** 이벤트가 실행하는 시점, 끝나는 시점에 대한 동작에 대해 더욱 세부적으로
     * 다를 수 있도록 도움을 주는 util 함수입니다.
     */
    helper: ProgressHelper;
  }) => void;
  /**
   * Element 가 onProgress 상태가 아닐때 실행되는 함수 입니다.
   * */
  onInValid?: (progress: number) => void;
  entryPoint?: 'top' | 'bottom';
};

type HelperOptionsType = {
  /** progress(0~1) 의 범위 중 onIn 과 onOut 이 실행되는 구간에 대한 정의입니다. (default : 0) */
  start?: number;
  /** progress(0~1) 의 범위 중 onIn 과 onOut 이 실행되는 구간에 대한 정의입니다. (default : 1) */
  end?: number;
  /** in event 와 out event 를 나누는 구간에 대한 정의입니다. */
  inOutPoint?: number;
  /** start ~ inOutPoint 까지의 구간에서 실행되는 함수입니다. */
  onIn?: (progress: {
    /** start ~ end 까지 구간 길이 대비 progress 입니다.. */
    progressOnRange: number; //
    /** start ~ isOutPoint 까지의 구간 길이 대비 progress 입니다.. */
    progressOnIn: number;
  }) => void;
  onOut?: (progress: {
    /** start ~ end 까지의 구간 길이 대비 progress 입니다.. */
    progressOnRange: number;
    /** isOutPoint ~ end 까지의 구간 길이 대비 progress 입니다.. */
    progressOnOut: number;
  }) => void;
  /**
   * Element 가 start ~ end 구간이 아닐때 실행되는 함수 입니다.
   * */
  onInvalid?: (progress: number) => void;
};

export type ProgressHelper = (options: HelperOptionsType) => void;

export interface ConsultingCreateType {
  projectName: string;
  name: string;
  email: string;
  phone: string;
  content: string;
  budget: number;
}

export interface EstimateFormulaType {
  /** @format double */
  readonly weight: number;
}

export interface EstimateStandardAmountType {
  level: string;
  readonly plan: number;
  readonly design: number;
  readonly front: number;
  readonly back: number;
}

export interface FAQListType {
  readonly id: number;
  readonly title: string;
  readonly description: string;
}

export interface KindListType {
  id: number;
  name: string;
  taskSet: TaskListType[];
}

export interface OutsourcingListType {
  readonly id: number;
  readonly title: string;
  /** @format uri */
  readonly thumbnail: string;
  readonly link: string;
}

export interface PaginatedKindListListType {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null;
  results?: KindListType[];
}

export interface PaginatedOutsourcingListListType {
  next?: string | null;
  previous?: string | null;
  results?: OutsourcingListType[];
}

export interface PaginatedProjectMeListType {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null;
  results?: ProjectMeType[];
}

export interface PaginatedServiceListType {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null;
  results?: ServiceType[];
}

export interface PaginatedSolutionListListType {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null;
  results?: SolutionListType[];
}

export interface PaginatedTaskListListType {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null;
  results?: TaskListType[];
}

export interface PatchedProjectDetailUpdateType {
  readonly id?: string;
  name?: string;
  desiredEstimate?: number;
  desiredWorkingMonth?: number;
  isCompleted?: boolean;
  step?: number;
  planInCharge?: number;
  designInCharge?: number;
  frontInCharge?: number;
  backInCharge?: number;
  readonly estimate?: number;
  readonly totalWorkingDay?: number;
  readonly isRequested?: boolean;
  readonly isConsulted?: boolean;
  readonly isOwn?: boolean;
  /** @format date-time */
  readonly created?: string;
  /** @format date-time */
  readonly updated?: string;
  readonly adjustedPlanWorkload?: number;
  readonly adjustedDesignWorkload?: number;
  readonly adjustedFrontWorkload?: number;
  readonly adjustedBackWorkload?: number;
  service?: ServiceType | null;
  taskSet?: ProjectTaskType[];
  solution?: ProjectSolutionType;
  opinion?: ProjectOpinionType;
}

export interface PatchedUserMeType {
  readonly id?: number;
  readonly email?: string;
  readonly nickname?: string;
  profileImage?: string | null;
  readonly loginType?: string;
  signupReason?: string | null;
}

export interface PresignedUrlType {
  name: string;
  /** @format uri */
  readonly url: string;
  path: string;
}

export interface ProjectCountType {
  readonly count: number;
}

export interface ProjectDetailUpdateType {
  readonly id: string;
  name: string;
  desiredEstimate: number;
  desiredWorkingMonth: number;
  isCompleted: boolean;
  step: number;
  planInCharge: number;
  designInCharge: number;
  frontInCharge: number;
  backInCharge: number;
  readonly estimate: number;
  readonly totalWorkingDay: number;
  readonly isRequested: boolean;
  readonly isConsulted: boolean;
  readonly isOwn: boolean;
  /** @format date-time */
  readonly created: string;
  /** @format date-time */
  readonly updated: string;
  readonly adjustedPlanWorkload: number;
  readonly adjustedDesignWorkload: number;
  readonly adjustedFrontWorkload: number;
  readonly adjustedBackWorkload: number;
  service: ServiceType | null;
  taskSet: ProjectTaskType[];
  solution: ProjectSolutionType;
  opinion: ProjectOpinionType;
}

export interface ProjectEstimateSheetType {
  readonly html: string;
}

export interface ProjectListCreateType {
  readonly id: string;
  name: string;
  desiredEstimate?: number;
  desiredWorkingMonth?: number;
  readonly estimate: number;
  readonly totalWorkingDay: number;
  isCompleted?: boolean;
  step?: number;
  planInCharge?: number;
  designInCharge?: number;
  frontInCharge?: number;
  backInCharge?: number;
  /** @format date-time */
  readonly created: string;
  /** @format date-time */
  readonly updated: string;
  readonly user: UserMeType;
  service?: ServiceType | null;
  taskSet?: ProjectTaskType[];
  solution?: ProjectSolutionType;
  opinion?: ProjectOpinionType;
}

export interface ProjectMeType {
  readonly id: string;
  readonly name: string;
  /** @format date-time */
  readonly updated: string;
  readonly estimate: number;
  readonly isCompleted: boolean;
  readonly step: number;
}

export interface ProjectOpinionType {
  content: string;
}

export interface ProjectRequestCreateType {
  name: string;
  /** @format email */
  email: string;
  phone: string;
  content: string;
  kind: string;
}

export interface ProjectSolutionType {
  readonly id: number;
  readonly type: string;
  readonly icon: string;
  readonly name: string;
  isRebrandingNeeded: boolean;
}

export interface ProjectTaskType {
  id: number;
  readonly name: string;
  readonly level: number;
  readonly description: string;
  readonly childSet: string;
}

export interface ReleaseHistoryLinkType {
  readonly linkUrl: string;
}

export interface ServiceType {
  id: number;
  readonly name: string;
  /** @format uri */
  readonly icon: string;
  readonly description: string;
}

export interface SolutionDataType {
  readonly id: number;
  readonly name: string;
  readonly icon: string;
  readonly expense: number;
}

export interface SolutionListType {
  readonly selfDevelopmentSet: SolutionDataType[];
  readonly commerceSet: SolutionDataType[];
  readonly cmsSet: SolutionDataType[];
  readonly nocodeSet: SolutionDataType[];
}

export interface TaskListType {
  id: number;
  name: string;
  description: string;
  /** @format uri */
  icon: string;
  level: number;
  designWorkload: number;
  frontWorkload: number;
  backWorkload: number;
  planWorkload: number;
  isRequired: boolean;
  isHover: boolean;
  /** @default false */
  isRecommend?: boolean;
  isAuto: boolean;
  option: string;
  readonly tip: TipType;
  readonly childSet: string;
}

export interface TipType {
  readonly title: string;
  /** @format uri */
  readonly icon: string;
  readonly description: string;
}

export interface TokenRefreshType {
  readonly access: string;
  refresh: string;
}

export interface UserMeType {
  readonly id: number;
  readonly email: string;
  readonly nickname: string;
  profileImage: string | null;
  readonly loginType: string;
  signupReason: string | null;
}

export interface UserRegisterType {
  /** 소셜 로그인 토큰 */
  socialToken?: string;
  email?: string;
  /** email verifier를 통해 얻은 token값입니다. */
  emailToken?: string;
  phone: string;
  /** phone verifier를 통해 얻은 token값입니다. */
  phoneToken?: string;
  password: string;
  passwordConfirm: string;
  readonly access: string;
  readonly refresh: string;
}

export interface UserSocialLoginType {
  code: string;
  state: string;
  readonly isRegister: boolean;
  readonly socialToken: string;
  readonly access: string;
  readonly refresh: string;
  readonly isNewUser: boolean;
}

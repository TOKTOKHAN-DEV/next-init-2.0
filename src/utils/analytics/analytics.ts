import * as _facebook from './facebook';
import * as _google from './google';
import * as _kakao from './kakao';

export const completeRegistrationAnalytics = (social: string) => {
  _facebook.completeRegistration(social);
  _google.completeRegistration(social);
  _kakao.completeRegistration(social);
};

export const startProjectAnalytics = (params: { id: string; step: number }) => {
  _facebook.startProject(params);
  _google.startProject(params);
  _kakao.startProject(params);
};

export const completeProjectAnalytics = (id: string) => {
  _facebook.completeProject(id);
  _google.completeProject(id);
  _kakao.completeProject(id);
};

export const consultingApplyAnalytics = () => {
  _facebook.consultingApply();
  _google.consultingApply();
  _kakao.consultingApply();
};

export const requestApplyAnalytics = () => {
  _facebook.requestApply();
  _google.requestApply();
  _kakao.requestApply();
};

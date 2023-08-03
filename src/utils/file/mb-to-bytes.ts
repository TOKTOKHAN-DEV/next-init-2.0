import { SafetyCalculator } from '@/utils/math/safety-caculdator';

export const mbToBytes = (mb: number) =>
  SafetyCalculator.multiply(mb, 1024, 1024);

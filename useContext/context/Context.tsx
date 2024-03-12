import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type OnboardingInfo = {
  gifteeName: string;
};

interface OnboardingInfoContext {
  onboardingInfo: OnboardingInfo;
  updateOnboardingInfo: (newInfo: Partial<OnboardingInfo>) => void;
}

const initialOnboardingInfo: OnboardingInfo = {
  gifteeName: "",
};

/**@todo 온보딩 컨텍스트 추가 */

import { useOnboardingContext } from "../../context/Context";

const useNameInput = () => {
  const { onboardingInfo, updateOnboardingInfo } = useOnboardingContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    /**@todo 값 업데이트해주는 로직 작성 */
  };

  return {
    onboardingInfo,
    handleInputChange,
  };
};

export default useNameInput;

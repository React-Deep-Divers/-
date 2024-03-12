import useNameInput from "../hooks/useNameInput";

const NameInput = () => {
  const { onboardingInfo, handleInputChange } = useNameInput();

  return (
    <>
      <input
        type="text"
        value={onboardingInfo.gifteeName}
        onChange={handleInputChange}
        maxLength={10}
        placeholder="이름을 입력해주세요"
      />
    </>
  );
};

export default NameInput;

const MyReact = (function () {
	let _val; // 상태를 저장해줍니다
	return {
		// 첫 번째 Closure: 함수형 컴포넌트 랜더링
		render(Component) {
			const Comp = Component();
			Comp.render();
			return Comp;
		},
		// 두 번째 Closure
		useState(initialValue) {
			// _val 값을 어딘가에서 저장해주고 있습니다
			_val = _val || initialValue;
			// 컴포넌트 값 업데이트를 위한 setState 메서드
			function setState(newVal) {
				_val = newVal;
			}
			return [_val, setState];
		},
	};
})();

export default MyReact;

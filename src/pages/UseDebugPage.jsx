import { useOnlineStatus } from "../components/UseOnlineStatus/useOnlineStatus";

export default function UseDebugPage() {
	const isOnline = useOnlineStatus();
	return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

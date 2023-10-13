export default function Loading({ className = "w-4 h-4" }: { className?: string }) {
	return <span className={`loading loading-spinner ${className}`}></span>;
}

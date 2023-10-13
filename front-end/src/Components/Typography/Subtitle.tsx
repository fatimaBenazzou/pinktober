function Subtitle({ styleClass, children }: { styleClass: string; children: React.ReactNode }) {
	return <h2 className={`text-3xl font-semibold ${styleClass}`}>{children}</h2>;
}

export default Subtitle;

function ErrorText({ styleClass, children }: { styleClass: string; children: React.ReactNode }) {
    return <p className={`text-center  text-error ${styleClass}`}>{children}</p>;
}

export default ErrorText;

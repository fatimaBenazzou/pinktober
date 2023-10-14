function DoctorIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            width={379}
            height={385}
            viewBox="0 0 379 385"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect width={379} height={385} fill="url(#pattern0)" />
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
                    <use
                        xlinkHref="#image0_34_3640"
                        transform="matrix(0.00105871 0 0 0.00104221 -1.16887 -0.711688)"
                    />
                </pattern>
                <image
                    id="image0_34_3640"
                    width={3200}
                    height={3200}
                />
            </defs>
        </svg>
    );
}

export default DoctorIcon;
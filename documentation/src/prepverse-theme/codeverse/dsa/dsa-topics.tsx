import React, { DetailedHTMLProps, ReactNode, SVGProps, useRef } from "react";
import clsx from "clsx";
import {
    Atlassian,
    AuthJs,
    Auth0,
    AwsCognito,
    AzureActiveDirectory,
    Clerk,
    Expo,
    Google,
    Headless,
    Okta,
} from "@site/src/assets/integration-icons";
import { useInView } from "framer-motion";

export const DSATopics: React.FC = () => {
    return (
        <div
            className={clsx(
                "flex flex-wrap",
                "border dark:border-gray-700 border-gray-200",
                "w-full",
                "rounded-2xl landing-sm:rounded-[32px]",
                "gap-2 landing-sm:gap-4",
                "p-2 landing-sm:p-4",
                "relative",
                "group/showcase",
                "landing-lg:overflow-hidden",
                "shadow-md",
                "border-2 border-gray-500 border-opacity-25",
            )}
        >
            <div
                className={clsx(
                    "landing-packages-mask",
                    "overflow-hidden",
                )}
            >
                <PackagesContainer animDirection="right">
                    {[...list, ...list].map(({ icon: Icon, label, tooltip }, index) => (
                        <PackageItem
                            key={index}
                            label={label}
                            tooltip={tooltip}
                            icon={<Icon width="24" height="24" />}
                        />
                    ))}
                </PackagesContainer>
                <br></br>
                <PackagesContainer animDirection="left">
                    {[...algolist, ...algolist].map(({ icon: Icon, label, tooltip }, index) => (
                        <PackageItem
                            key={index}
                            label={label}
                            tooltip={tooltip}
                            icon={<Icon width="24" height="24" />}
                        />
                    ))}
                </PackagesContainer>
            </div>
        </div>
    );
};

const PackagesContainer = ({
    children,
    className,
    animDirection,
    ...props
}: DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    animDirection: "left" | "right";
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref);

    return (
        <div
            ref={ref}
            className={clsx(
                "relative",
                "flex",
                "items-center",
                animDirection === "left" ? "justify-start" : "justify-end",
            )}
        >
            <div
                className={clsx(
                    className,
                    "hover:animation-paused",
                    inView
                        ? animDirection === "left"
                            ? "animate-enterprise-iam-services-left"
                            : "animate-enterprise-iam-services-right"
                        : "",
                    "absolute",
                    "left-0",
                    "top-0",
                    "pr-4",
                    "w-auto",
                    "flex",
                    "items-center",
                    "gap-[18px]",
                    // "mt-6",
                    "relative",
                )}
                {...props}
            >
                {children}
            </div>
        </div>
    );
};

const PackageItem = (props: {
    icon: ReactNode;
    label: string;
    tooltip: string | null;
}) => {
    const { tooltip, icon, label } = props;

    return (
        <div
            className={clsx(
                "group",
                "relative",
                "z-10",
                "flex",
                "items-center",
                "justify-center",
                "gap-3",
                "pl-4 pt-4 pb-4 pr-6",
                "dark:bg-gray-900 bg-gray-200",
                "rounded-full",
                "cursor-pointer",
            )}
        >
            <div>{icon}</div>
            <div
                className={clsx(
                    "text-sm",
                    "font-medium",
                    "dark:bg-landing-packages-text-dark bg-landing-packages-text",
                    "bg-clip-text",
                    "text-transparent",
                    "whitespace-nowrap",
                )}
            >
                {label}
            </div>

            {tooltip && (
                <div
                    className={clsx(
                        "absolute",
                        "z-20",
                        "top-[-48px]",
                        "scale-0",
                        "group-hover:scale-100",
                        "transition-transform",
                        "origin-top",
                    )}
                >
                    <div
                        className={clsx(
                            "relative",
                            "text-sm",
                            "dark:bg-gray-0 bg-gray-900",
                            "dark:text-gray-700 text-gray-300",
                            "rounded-full",
                            "px-6",
                            "py-3",
                            "whitespace-nowrap",
                        )}
                    >
                        {tooltip}
                    </div>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={40}
                        height={15}
                        fill="none"
                        className={clsx(
                            "absolute",
                            "scale-0",
                            "-bottom-2",
                            "left-1/2",
                            "-translate-x-1/2",
                            "group-hover:scale-100",
                            "transition-transform",
                            "origin-bottom",
                            "dark:text-gray-0 text-gray-900",
                        )}
                    >
                        <path
                            fill="currentColor"
                            d="M17.73 13.664C18.238 14.5 19.089 15 20 15c.912 0 1.763-.501 2.27-1.336l3.025-4.992C26.306 7.002 28.01 7 29.833 7H40V0H0v7h10.167c1.823 0 3.527.003 4.538 1.672l3.026 4.992Z"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
};

const list = [
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Expo {...props} />,
        label: "Array",
        tooltip: null,
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Headless {...props} />,
        label: "Linked List",
        tooltip: null,
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Headless {...props} />,
        label: "Stack",
        tooltip: null,
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Okta {...props} />,
        label: "Queue",
        tooltip: null,
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Headless {...props} />,
        label: "Tree",
        tooltip: null,
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <AzureActiveDirectory {...props} />,
        label: "Graph",
        tooltip: null,
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Headless {...props} />,
        label: "Time Complexity",
        tooltip: null,
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Headless {...props} />,
        label: "Space Complexity",
        tooltip: null,
    },
] as const;

const algolist = [
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Headless {...props} />,
        label: "Time Complexity",
        tooltip: null,
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Headless {...props} />,
        label: "Space Complexity",
        tooltip: null,
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Headless {...props} />,
        label: "Searching",
        tooltip: null,
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Headless {...props} />,
        label: "Sorting",
        tooltip: null,
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Headless {...props} />,
        label: "Mathematical Algorithms",
        tooltip: null,
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Headless {...props} />,
        label: "Bitwise Algorithms",
        tooltip: null,
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Headless {...props} />,
        label: "Dynamic Programming",
        tooltip: null,
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Headless {...props} />,
        label: "Recursion",
        tooltip: null,
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Headless {...props} />,
        label: "Backtracking Algorithm",
        tooltip: null,
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => <Headless {...props} />,
        label: "Greedy Algorithms",
        tooltip: null,
    },
] as const;
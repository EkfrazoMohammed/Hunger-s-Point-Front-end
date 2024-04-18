export const routeVariants = {
    initial: {
        y: "5vh",
        opacity: 0
    },
    final: {
        opacity: 1,
        y: "0vh",
        transition: {
            type: "spring",
            mass: 0.4,
            duration: 0.1,
            delay: 0.1,
        },
    },
};

export const childVariants = {
    initial: {
        opacity: 0,
        y: "50px",
    },
    final: {
        opacity: 1,
        y: "0px",
        transition: {
            duration: 0.5,
            delay: 0.5,
        },
    },
};
export const headerVariants = {
    initial: {
        opacity: 0,
        y: "50px",
    },
    final: {
        opacity: 1,
        y: "0px",
        transition: {
            duration: 1,
            delay: 1,
        },
    },
};
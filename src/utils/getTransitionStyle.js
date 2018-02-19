const getTransitionStyles = timeout => {
    return {
        entering: {
            opacity: 0,
            transform: `translate3d(0px, 400px, 0px)`
        },
        entered: {
            transition: `all ${timeout}ms cubic-bezier(.14,1,.34,1)`,
            opacity: 1,
            transform: `translate3d(0px, 0px, 0px)`
        },
        exiting: {
            transition: `all ${timeout}ms cubic-bezier(.14,1,.34,1)`,
            opacity: 0,
            transform: `translate3d(0px, 400px, 0px)`
        }
    };
};

const getTransitionStyle = ({ timeout, status }) =>
    getTransitionStyles(timeout)[status];

export default getTransitionStyle;

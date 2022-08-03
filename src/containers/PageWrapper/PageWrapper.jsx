import classes from "./PageWrapper.module.scss";

const PageWrapper = (props) => {
    const { children } = props;
    return <div>{children}</div>;
};

export default PageWrapper;

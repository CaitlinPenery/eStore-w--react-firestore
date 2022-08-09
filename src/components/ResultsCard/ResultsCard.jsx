import classes from "./ResultsCard.module.scss";

const ResultsCard = ({ data }) => {
    const { title } = data;

    const image = data.imageLink
        ? data.imageLink
        : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

    return (
        <>
            <div className={classes.Card}>
                <h2 className={classes.Card_Title}>{title}</h2>
                <img className={classes.Card_Image} src={image} alt={title} />
            </div>
        </>
    );
};

export default ResultsCard;

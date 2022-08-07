import classes from "./ResultsCard.module.scss";

const ResultsCard = ({ data }) => {
    const { name, brand } = data;

    const image = data.imageLink
        ? data.imageLink
        : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

    return (
        <>
            <div className={classes.Card}>
                <h2>{name}</h2>
                <h3>{brand}</h3>
                <img className={classes.Card_Image} src={image} alt={name} />
            </div>
        </>
    );
};

export default ResultsCard;

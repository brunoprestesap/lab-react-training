function Rating(props){
        const starRating = Math.ceil(props.children);

        return (
            <div>
                {[...Array(5)].map((start, index) => {
                    index += 1;
                    return (
                        <span
                            className={index <= starRating ? "on" : "off"}
                        >&#9733;</span>
                    )
                })}
            </div>           
        );
}
export default Rating;
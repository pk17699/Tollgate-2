import { addFavorite } from "../../service/taskService";

const AddFavorite = (props) => {
    const favorite = {
        // book: props.book,
        // genre: props.genre,
        // availability: props.availability,
        // date: props.date
        book: props["book"],
        genre: props["genre"],
        availability: props["availability"],
        date: props["date"]
    }
    addFavorite(favorite);
}

export default AddFavorite

import './Review.css'

const Review = (props) => {
    return (
        <div className='review-container'>
            <div className="review-top">
                <p>{props.title}</p>
                <p>{props.rating} <i className='fa-solid fa-star'></i></p>
            </div>

            <div className="review-bottom">
                <p>{props.body}</p>
            </div>
        </div>
    )
} 
export default Review;
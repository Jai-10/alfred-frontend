import './Reviews.css'
import Review from '../Review/Review'

const Reviews = () => {
    return (
        <div className='reviews-container'>
            <div className="review-section-heading">
                Reviews
            </div>

            <div className="all-reviews">
                <Review rating="4.8" title="lorem ipsum 1" body='Lorem ipsum dolor si pulvit, t magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Sed sapien libero, laoreet nec convallis at, sagittis et lorem. Proin et ligula dui. Quisque risus ex, ullamcorper dictum tincidunt vel, fermentum sit amet sem' />
                <Review rating="5" title="lorem ipsum 3" body='Lorem ipsumonsequat nibh eget mi maximus, aliquam pulvinar magna fringilla. Aenean ante risus, semper id lacinia sit amet, tincidunt in tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Sed sapien libero, laoreet nec convallis at, sagittis et lorem. Proin et ligula dui. Quisque risus ex, ullamcorper dictum tincidunt vel, fermentum sit amet sem' />
                <Review rating="4.3" title="lorem ipsum 3" body='Lorem ipsumonsequat nibh e varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Sed sapien libero, laoreet nec convallis at, sagittis et lorem. Proin et ligula dui. Quisque risus ex, ullamcorper dictum tincidunt vel, fermentum sit amet sem' />
                <Review rating="5" title="lorem ipsum 3" body='Lorem ipsum dollvinar magna in tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Sed sapien libero, laoreet nec convallis at, sagittis et lorem. Proin et ligula dui. Quisque risus ex, ullamcorper dictum tincidunt vel, fermentum sit amet sem' />
                <Review rating="4" title="lorem ipsum 4" body='Lorem ipsum dolor sit amet, consectetur adipiscing e nibh eget mi maximus, aliquam pulvinar magna fringilla. Aenean ante risus, semper id lacinia sit amet, tincidunt in tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Sed sapien libero, laoreet nec convallis at, sagittis et lorem. Proin et ligula dui. Quisque risus ex, ullamcorper dictum tincidunt vel, fermentum sit amet sem' />
                <Review rating="4.3" title="lorem ipsum 3" body='Lorem ipsum dolor  ante risus, semper  natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Sed sapien libero, laoreet nec convallis at, sagittis et lorem. Proin et ligula dui. Quisque risus ex, ullamcorper dictum tincidunt vel, fermentum sit amet sem' />
                <Review rating="5" title="lorem ipsum 5" body='Lorem ipsum dolor gilla. Aens. Orci varius nascetur ridiculus mus. Suspendisse potenti. Sed sapien libero, laoreet nec convallis at, sagittis et lorem. Proin et ligula dui. Quisque risus ex, ullamcorper dictum tincidunt vel, fermentum sit amet sem' />
            </div>
        </div>
    )
}
export default Reviews;
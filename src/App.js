import './App.css';
import {Button, Card, Col, Container, Modal, Row, Tab, Tabs} from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row className="recipe-review-overall-rating justify-content-between mb-3">
        <Col xs="auto">
          <h2 className="section-headline">
            <span className="review-headline">Reviews</span>{' '}
            <span className="review-headline-count">(15)</span>
          </h2>
        </Col>
        <Col xs="auto" className="d-flex align-items-center">
          <div className="all-reviews">
            <a className="all-reviews-link" href="?page=2">Read More Reviews</a>
            <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" role="img"
                 aria-hidden="true" tabIndex="-1"><title>Rate Review</title>
              <path
                d="M12.726 10.694L9.998 9.267l-2.719 1.43.52-3.025-2.205-2.15 3.04-.446L9.998 2.32l1.363 2.756 3.042.44-2.196 2.15.52 3.028zM18.236 0H1.761C.001 0 .001 1.606.001 1.606V12.16s-.057 1.587 1.524 1.587h1.638v5.476l5.475-5.476h9.836c1.579 0 1.526-1.587 1.526-1.587V1.606S20 0 18.236 0z"></path>
            </svg>
          </div>
        </Col>
      </Row>
      <Row className="recipe-review-top-reviews">
        <Col className="p-3 bg-secondary">
          <Card>
            <Card.Header>
              <div className="recipe-review-my-review">
                <svg className="rounded-circle border border-dark" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                  <path fill="#685F55"
                        d="M12.007 5.876c-.374 0-.744.07-1.109.212a4.102 4.102 0 0 0-.985.54 3.148 3.148 0 0 0-.705.712c-.178.256-.267.497-.267.725v2.19c0 .429.108.976.322 1.642s.55 1.182 1.006 1.547a.869.869 0 0 1 .328.794c-.027.146-.084.28-.17.403a.835.835 0 0 1-.336.28l-3.846 1.82a.959.959 0 0 0-.225.13c-.096.07-.144.195-.144.377v.89l12.248-.014v-.848c0-.238-.057-.386-.17-.445a1.43 1.43 0 0 0-.186-.09l-3.818-1.806a.887.887 0 0 1-.445-1.142.844.844 0 0 1 .267-.35c.475-.364.81-.882 1.006-1.552.196-.671.294-1.216.294-1.636v-2.19c0-.237-.09-.483-.273-.739-.183-.255-.418-.49-.705-.704s-.616-.393-.985-.534a3.065 3.065 0 0 0-1.102-.212z"></path>
                </svg>
                <button data-tracking-label="add comments" data-tracking-zone="recipe-review-add-review"
                        data-login-url="https://www.allrecipes.com/account/authenticationwelcome?actionsource=recipe&amp;loginreferrerurl=https://www.allrecipes.com/recipe/241067/chunky-italian-spaghetti-sauce/
" className="recipe-review-add-review btn btn-info p-3 ml-2">Add Rating &amp; Review
                </button>
              </div>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <div className="recipe-review-top-item">
                    <h6 className="recipe-review-top-item-header font-italic mb-3">Most helpful positive review</h6>
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                                <div className="recipe-review-body--truncated">
                            I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                            just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="recipe-review-top-item">
                    <h6 className="recipe-review-top-item-header font-italic mb-3">Most helpful critical review</h6>
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                        <div className="recipe-review-body--truncated">
                          I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                          just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="recipe-review-top-item recipe-review-top-item-ratings">
                    <div className="recipe-ratings-list">
                      <div className="ratings-count text-center font-italic">22 Ratings</div>
                      <ul className="ratings-list list-unstyled mt-3">
                        <li className="rating">
                          <span className="rating-stars">5</span>
                          <span className="icon-recipe-rating-star ml-1" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" role="img" aria-hidden="true"
                                 tabIndex="-1" xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          <span className="rating-bar-wrapper ml-1">
                          <span className="rating-bar" style={{width: '77%'}}></span>
                        </span>
                          <span className="rating-count ml-1">17</span>
                        </li>
                        <li className="rating">
                          <span className="rating-stars">4</span>
                          <span className="icon-recipe-rating-star ml-1" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" role="img" aria-hidden="true"
                                 tabIndex="-1" xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          <span className="rating-bar-wrapper ml-1">
                            <span className="rating-bar" style={{width: '14%'}}></span>
                          </span>
                          <span className="rating-count ml-1">3</span>
                        </li>
                        <li className="rating">
                          <span className="rating-stars">3</span>
                          <span className="icon-recipe-rating-star ml-1" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" role="img" aria-hidden="true"
                                 tabIndex="-1" xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          <span className="rating-bar-wrapper ml-1">
                            <span className="rating-bar" style={{width: '9%'}}></span>
                          </span>
                          <span className="rating-count ml-1">2</span>
                        </li>
                        <li className="rating">
                          <span className="rating-stars">2</span>
                          <span className="icon-recipe-rating-star ml-1" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" role="img" aria-hidden="true"
                                 tabIndex="-1" xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          <span className="rating-bar-wrapper ml-1">
                            <span className="rating-bar" style={{width: '0%'}}></span>
                          </span>
                          <span className="rating-count ml-1">0</span>
                        </li>
                        <li className="rating">
                          <span className="rating-stars">1</span>
                          <span className="icon-recipe-rating-star ml-1" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" role="img" aria-hidden="true"
                                 tabIndex="-1" xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          <span className="rating-bar-wrapper ml-1">
                            <span className="rating-bar" style={{width: '0%'}}></span>
                          </span>
                          <span className="rating-count ml-1">0</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="recipe-reviewed-items recipe-reviewed-items--grid mt-5">
        <Col>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="helpful" title="Most Helpful">
              <Row className="mt-3">
                <Col>
                  <div className="recipe-review-top-item pb-5 border-bottom">
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                        <div className="recipe-review-body--truncated">
                          I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                          just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="recipe-review-top-item pb-5 border-bottom">
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                        <div className="recipe-review-body--truncated">
                          I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                          just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="recipe-review-top-item pb-5 border-bottom">
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                        <div className="recipe-review-body--truncated">
                          I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                          just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className="recipe-review-top-item pb-5 border-bottom">
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                        <div className="recipe-review-body--truncated">
                          I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                          just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="recipe-review-top-item pb-5 border-bottom">
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                        <div className="recipe-review-body--truncated">
                          I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                          just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="recipe-review-top-item pb-5 border-bottom">
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                        <div className="recipe-review-body--truncated">
                          I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                          just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className="recipe-review-top-item">
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                        <div className="recipe-review-body--truncated">
                          I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                          just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="recipe-review-top-item">
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                        <div className="recipe-review-body--truncated">
                          I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                          just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="recipe-review-top-item">
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                        <div className="recipe-review-body--truncated">
                          I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                          just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="mostPositive" title="Most Positive">
              <Row className="mt-3">
                <Col>
                  <div className="recipe-review-top-item pb-5 border-bottom">
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                        <div className="recipe-review-body--truncated">
                          I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                          just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="recipe-review-top-item pb-5 border-bottom">
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                        <div className="recipe-review-body--truncated">
                          I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                          just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="recipe-review-top-item pb-5 border-bottom">
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                        <div className="recipe-review-body--truncated">
                          I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                          just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="leastPositive" title="Least Positive">
              <Row className="mt-3">
                <Col>
                  <div className="recipe-review-top-item">
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                        <div className="recipe-review-body--truncated">
                          I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                          just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="recipe-review-top-item">
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                        <div className="recipe-review-body--truncated">
                          I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                          just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="recipe-review-top-item">
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                        <div className="recipe-review-body--truncated">
                          I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                          just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="newest" title="Newest">
              <Row className="mt-3">
                <Col>
                  <div className="recipe-review-top-item pb-5 border-bottom">
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                        <div className="recipe-review-body--truncated">
                          I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                          just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="recipe-review-top-item pb-5 border-bottom">
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                        <div className="recipe-review-body--truncated">
                          I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                          just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="recipe-review-top-item pb-5 border-bottom">
                    <div className="component ugc-review ugc-item recipe-review-wrapper" data-cms-id="5238360">
                      <div className="recipe-review-byline mb-3">
                        <a className="recipe-review-author" href="https://www.allrecipes.com/cook/11785786/">    <span
                          className="reviewer-image-wrapper">
                                  <img className="reviewer-image border rounded-circle"
                                       src="https://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"
                                       alt="" pinger-seen="true"/>
                                </span>
                          <span className="reviewer-name ml-2">RosieB</span>
                        </a>
                      </div>
                      <div className="recipe-review-rating mb-3">
                        <div className="component recipe-ratings">
                          <span className="ratings-dropdown-button" aria-expanded="false">
                            {/*<span className="review-star-text">Rating: 5 stars</span>*/}
                            <span className="rating-star active" aria-hidden="true" data-rating="1"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="2"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="3"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="4"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                            <span className="rating-star active" aria-hidden="true" data-rating="5"><svg width="20"
                                                                                                         height="20"
                                                                                                         viewBox="0 0 24 24"
                                                                                                         role="img"
                                                                                                         aria-hidden="true"
                                                                                                         tabIndex="-1"
                                                                                                         xmlns="http://www.w3.org/2000/svg"><path
                              className="rating-star-filled"
                              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                          </span>
                          <span className="recipe-review-date">10/31/2015</span>
                        </div>
                      </div>
                      <div className="recipe-review-body mb-2">
                        <div className="recipe-review-body--truncated">
                          I used crushed tomatoes with basil in place of the diced tomatoes &amp; the basil (it's what I had on hand) &amp; I only added one can of tomato sauce as I prefer a thicker sauce.   I added homemade meatballs, simmered it about 30 minutes &amp; it was delicious. My hubby &amp; I both agreed it was the best spaghetti sauce I ever made &amp; this is how I will make it from now on.   It wasn't chunky ...
                          just thick, rich &amp; delicious.  Thanks for sharing !!!      </div>
                        <a className="link-view ugc-reviews-link" href="#" aria-label="Read Full Review">Read More</a>
                      </div>
                      <div className="recipe-review-helpful">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" tabIndex="-1"><title>Thumb Up</title>
                          <path
                            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                        </svg>
                        <span className="recipe-review-helpful-link ml-2">Helpful</span>
                        <span className="recipe-review-helpful-count ml-2">(4)</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Col>
      </Row>

      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>
            <div className="ugc-upload-banner">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 20" role="img"
                   aria-hidden="true" tabIndex="-1"><title>Rate Review</title>
                <path
                  d="M12.726 10.694L9.998 9.267l-2.719 1.43.52-3.025-2.205-2.15 3.04-.446L9.998 2.32l1.363 2.756 3.042.44-2.196 2.15.52 3.028zM18.236 0H1.761C.001 0 .001 1.606.001 1.606V12.16s-.057 1.587 1.524 1.587h1.638v5.476l5.475-5.476h9.836c1.579 0 1.526-1.587 1.526-1.587V1.606S20 0 18.236 0z"></path>
              </svg>
              Review this recipe
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>Chunky Italian Spaghetti Sauce</Col>
          </Row>
          <Row>
            <Col>
              <div className="component recipe-ratings interactive">
                <fieldset className="ratings-text ratings-input">
                  <legend className="ratings-legend">Rate this recipe</legend>
                  <input name="ugc-rating" type="radio" value="" id="star0"
                         className="rating-star-input visually-hidden star0" checked=""/>
                  <label htmlFor="star0" className="rating-star rating-star-label">
                    <span className="ratings-text-label" data-rating="0">Your rating</span>
                  </label>
                  <input name="ugc-rating" type="radio" value="1" id="star1"
                         className="rating-star-input visually-hidden star1"/>
                  <label htmlFor="star1" className="rating-star rating-star-label">
                    <span className="visually-hidden">Rate this a 1: </span>
                    <svg width="44" height="44" viewBox="0 0 24 24" role="img" aria-hidden="true" tabIndex="-1"
                         xmlns="http://www.w3.org/2000/svg">
                      <path className="rating-star-filled"
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <span className="ratings-text-label" data-rating="1">Couldn't eat it</span>
                  </label>
                  <input name="ugc-rating" type="radio" value="2" id="star2"
                         className="rating-star-input visually-hidden star2"/>
                  <label htmlFor="star2" className="rating-star rating-star-label">
                    <span className="visually-hidden">Rate this a 2: </span>
                    <svg width="44" height="44" viewBox="0 0 24 24" role="img" aria-hidden="true" tabIndex="-1"
                         xmlns="http://www.w3.org/2000/svg">
                      <path className="rating-star-filled"
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <span className="ratings-text-label" data-rating="2">Didn't like it</span>
                  </label>
                  <input name="ugc-rating" type="radio" value="3" id="star3"
                         className="rating-star-input visually-hidden star3"/>
                  <label htmlFor="star3" className="rating-star rating-star-label">
                    <span className="visually-hidden">Rate this a 3: </span>
                    <svg width="44" height="44" viewBox="0 0 24 24" role="img" aria-hidden="true" tabIndex="-1"
                         xmlns="http://www.w3.org/2000/svg">
                      <path className="rating-star-filled"
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <span className="ratings-text-label" data-rating="3">It was OK</span>
                  </label>
                  <input name="ugc-rating" type="radio" value="4" id="star4"
                         className="rating-star-input visually-hidden star4"/>
                  <label htmlFor="star4" className="rating-star rating-star-label">
                    <span className="visually-hidden">Rate this a 4: </span>
                    <svg width="44" height="44" viewBox="0 0 24 24" role="img" aria-hidden="true"
                         tabIndex="-1" xmlns="http://www.w3.org/2000/svg">
                      <path className="rating-star-filled"
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                    <span className="ratings-text-label" data-rating="4">Liked it</span>
                  </label>
                  <input name="ugc-rating" type="radio" value="5" id="star5"
                         className="rating-star-input visually-hidden star5"/>
                  <label htmlFor="star5" className="rating-star rating-star-label">
                              <span className="visually-hidden">Rate this a 5: </span>
                              <svg width="44" height="44" viewBox="0 0 24 24" role="img" aria-hidden="true"
                                   tabIndex="-1" xmlns="http://www.w3.org/2000/svg">
                                <path className="rating-star-filled"
                                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                              </svg>
                              <span className="ratings-text-label" data-rating="5">Loved it</span>
                            </label>
                </fieldset>
              </div>
              <div className="ugc-upload-text">
                <label className="visually-hidden" htmlFor="ugc-text">What did you think about this recipe? Did you make
                  any changes or notes?</label>
                <textarea id="ugc-text" name="ugc-text"
                          placeholder="What did you think about this recipe? Did you make any changes or notes? "></textarea>
              </div>
            </Col>
            <Col>
              <div className="component ugc-photo-upload">
                <input className="ugc-photo-upload__uniqueId js--uploadedPhotoId" type="hidden"/>
                  <div className="ugc-photo-upload__help">
                        <span className="ugc-photo-upload__helpIcon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" role="img"
                               aria-hidden="true" tabIndex="-1"><path
                            d="M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2 1.77 0 3.2-1.43 3.2-3.2 0-1.77-1.43-3.2-3.2-3.2-1.77 0-3.2 1.43-3.2 3.2z"></path></svg>
                        </span>
                    <label htmlFor="photoUploadFile" className="ugc-photo-upload__helpText">Add Photo</label>
                  </div>
                  <div className="ugc-photo-upload__uploadedImage js--uploadedImage">
                        <span className="ugc-photo-upload__editPhotoIcon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" role="img"
                               aria-hidden="true"><path
                            d="M0 16l5.08-2.031 7.619-7.62-3.811-3.808-7.619 7.618L0 16zM15.05 3.098L12.139.185a.635.635 0 0 0-.897 0L10.156 1.27l3.81 3.809 1.085-1.083a.637.637 0 0 0 0-.898z"></path></svg>
                        </span>
                  </div>
                  <input type="file" id="photoUploadFile" className="ugc-photo-upload__uploadInput js--fileInput"
                         data-photo-max-upload-size="2097152" accept="image/*"/>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Container>
  );
}

export default App;

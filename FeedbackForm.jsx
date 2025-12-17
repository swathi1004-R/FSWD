import { useState } from "react";
import "./FeedbackForm.css";

function FeedbackForm() {
  const productName = "Wireless Headphones";

  const [username, setUsername] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !rating || !review) {
      alert("Please fill all fields");
      return;
    }

    const newFeedback = {
      username,
      rating,
      review,
    };

    setFeedbacks([...feedbacks, newFeedback]);

    // clear form
    setUsername("");
    setRating("");
    setReview("");
  };

  return (
    <div className="product-feedback-container">
      <div className="product-card">
        <h2 className="product-title">{productName}</h2>
        <p className="product-desc">
          Share your experience with this product
        </p>

        <form className="feedback-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-field"
            placeholder="Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <select
            className="input-field"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Select Rating</option>
            <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
            <option value="4">⭐⭐⭐⭐ (Very Good)</option>
            <option value="3">⭐⭐⭐ (Good)</option>
            <option value="2">⭐⭐ (Average)</option>
            <option value="1">⭐ (Poor)</option>
          </select>

          <textarea
            className="input-field"
            placeholder="Write your review"
            rows="4"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>

          <button className="submit-btn" type="submit">
            Submit Review
          </button>
        </form>
      </div>

      {feedbacks.length > 0 && (
        <div className="review-section">
          <h3>Customer Reviews</h3>

          {feedbacks.map((item, index) => (
            <div key={index} className="review-card">
              <p><strong>Name:</strong> {item.username}</p>
              <p><strong>Rating:</strong> {item.rating} ⭐</p>
              <p><strong>Review:</strong> {item.review}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;

import React from 'react';

export default function CardNews (props) {
  if (!props.showNews) {
    return null;
  }

  return (
    <div className="card-news">
      <label>Free</label>
    </div>
  )
}
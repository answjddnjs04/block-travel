import React from 'react';

const BlockCard = ({ block }) => {
  return (
    <div className="block-card">
      <div className="block-image">
        <img src={block.image} alt={block.name} />
        <span className="popularity">{block.popularity}명</span>
      </div>
      <div className="block-info">
        <h3>{block.name}</h3>
        <div className="tags">
          {block.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockCard;

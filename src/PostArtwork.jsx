import React, {useState} from 'react';
import {Icon} from './icons.jsx';
import {postImageSources, validExternal} from './media.js';

export function PostArtwork({item, variant = 'gallery'}) {
  const sources = postImageSources(item);
  // Reset failed sources when an owner changes the post or its custom image.
  return <ArtworkImage key={JSON.stringify(sources)} item={item} sources={sources} variant={variant}/>;
}

function ArtworkImage({item, sources, variant}) {
  const [failed, setFailed] = useState([]);
  const src = sources.find(source => !failed.includes(source));
  const title = item.title || item.name;
  return <div className={`post-preview post-preview--${variant}`}>
    {src ? <img
      className="post-artwork"
      src={src}
      alt={`${title} — original post artwork`}
      loading={variant === 'gallery' ? 'lazy' : 'eager'}
      decoding="async"
      onError={() => setFailed(previous => [...previous, src])}
    /> : <div className="post-unavailable">
      <Icon name="message"/>
      <strong>{title}</strong>
      <span>The image preview is unavailable.</span>
      {variant === 'detail' && validExternal(item.link)
        ? <a className="button small" href={validExternal(item.link)} target="_blank" rel="noopener noreferrer">View original post <Icon name="external"/></a>
        : <span className="micro">Open the post for its details and original link.</span>}
    </div>}
  </div>;
}

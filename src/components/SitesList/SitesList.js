import React from "react";

export function SitesList(props) {
  return (
    <li>
      <a href={props.site.site_url} target="_blank" rel="noopener noreferrer">
        {props.site.name}
      </a>
    </li>
  );
};

export default SitesList;
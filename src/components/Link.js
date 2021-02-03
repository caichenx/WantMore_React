import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    event.preventDefault();
    //change url
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a
      className={className}
      href={href}
      onClick={onClick}
      style={{ padding: "0.5em" }}
    >
      {children}
    </a>
  );
};

export default Link;

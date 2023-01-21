import React, { Fragment } from "react";
import Link from "next/link";
import { domToReact, attributesToProps } from "html-react-parser";

export default function Links({ html }) {
  const props = attributesToProps(html.attribs);
  props.href = props.href.replace("http://", "https://");
  if (props.href.startsWith("https://chadfernandez.me")) {
    props.href = props.href.replace("https://chadfernandez.me", "");
    if (!props.href.startsWith("/")) {
      props.href = props.href ? `/${props.href}` : "/";
    }
  } else if (props.href.startsWith("https://backend-ghost.hcktt.cf")) {
    props.href = props.href.replace("https://backend-ghost.hcktt.cf", "");
    if (!props.href.startsWith("/")) {
      props.href = props.href ? `/${props.href}` : "/";
    }
  }
  if (!props.href.startsWith("/")) {
    return (
      <a {...props} target="_blank" rel="_noreferrer noopener">
        {domToReact(html.children)}
      </a>
    );
  }
  return <Link {...props}>{domToReact(html.children)}</Link>;
}

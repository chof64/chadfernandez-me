import React, { Fragment } from "react";
import Link from "next/link";
import { domToReact, attributesToProps } from "html-react-parser";

export default function Links({ html }) {
  const domains = [
    process.env.NEXT_PUBLIC_DOMAIN,
    "https://backend-ghost.hcktt.cf",
    "https://backend-ghost.chadfernandez.me",
  ];
  const props = attributesToProps(html.attribs);
  props.href = props.href.replace("http://", "https://");
  domains.forEach((domain) => {
    if (props.href.startsWith(domain)) {
      props.href = props.href.replace(domain, "");
      if (!props.href.startsWith("/")) {
        props.href = props.href ? `/${props.href}` : "/";
      }
    }
  });
  if (!props.href.startsWith("/")) {
    return (
      <a {...props} target="_blank" rel="_noreferrer noopener">
        {domToReact(html.children)}
      </a>
    );
  }
  return <Link {...props}>{domToReact(html.children)}</Link>;
}

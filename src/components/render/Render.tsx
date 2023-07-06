import React from "react"
import Image from "next/image"
import Link from "next/link"
import parse, { attributesToProps, domToReact } from "html-react-parser"
import { ExternalLinkIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export default function Render({ html }) {
  return <>{parse(html, options)}</>
}

const options = {
  replace: (html) => {
    if (!html.attributes) {
      return
    }

    if (html.name === "h1") {
      const props = attributesToProps(html.attribs)
      return (
        <h1
          className="mt-12 scroll-m-20 text-4xl font-extrabold tracking-tight first:mt-0 lg:text-5xl"
          {...props}
        >
          {domToReact(html.children, options)}
        </h1>
      )
    }

    if (html.name === "h2") {
      const props = attributesToProps(html.attribs)
      return (
        <h2
          className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
          {...props}
        >
          {domToReact(html.children, options)}
        </h2>
      )
    }

    if (html.name === "h3") {
      const props = attributesToProps(html.attribs)
      return (
        <h3
          className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0"
          {...props}
        >
          {domToReact(html.children, options)}
        </h3>
      )
    }

    if (html.name === "p") {
      const props = attributesToProps(html.attribs)
      return (
        <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
          {domToReact(html.children, options)}
        </p>
      )
    }

    if (html.name === "a") {
      const domains: any[] = [
        process.env.NEXT_PUBLIC_DOMAIN,
        process.env.GHOST_URL,
        process.env.GHOST_URL_DEV,
      ]
      const props = attributesToProps(html.attribs)
      if (props.href?.includes("http://")) {
        props.href = props.href.replace("http://", "https://")
      }

      const isExternal = !domains.some((domain) => {
        return props.href?.includes(domain)
      })

      if (!isExternal) {
        domains.some((domain) => {
          props.href = props.href?.replace(domain, "")
        })
      }

      return (
        <>
          <Link
            className={cn(
              "font-medium text-sky-600 underline-offset-2 transition duration-200 delay-75 ease-in-out hover:text-sky-800 hover:underline hover:decoration-purple-800",
              isExternal ? "" : ""
            )}
            href={props.href}
            target={isExternal ? "_blank" : ""}
            rel={isExternal ? "noreferrer noopener" : ""}
          >
            {domToReact(html.children, options)}
            {isExternal && (
              <ExternalLinkIcon className="ml-1 inline-block h-3 w-3" />
            )}
          </Link>
        </>
      )
    }

    if (html.name === "ol") {
      const props = attributesToProps(html.attribs)

      return (
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props}>
          {domToReact(html.children, options)}
        </ol>
      )
    }

    if (html.name === "ul") {
      const props = attributesToProps(html.attribs)

      return (
        <ol className="my-6 ml-6 list-disc [&>li]:mt-2" {...props}>
          {domToReact(html.children, options)}
        </ol>
      )
    }

    if (html.name === "pre") {
      const props = attributesToProps(html.attribs)
      return (
        <div className="prose">
          <pre {...props}>{domToReact(html.children, options)}</pre>
        </div>
      )
    }

    if (html.name === "code" && html.parent.name !== "pre") {
      const props = attributesToProps(html.attribs)
      return (
        <code className="before:content-['`'] after:content-['`'] text-cyan-800 rounded-md px-1 py-0.5 bg-cyan-50 shadow-inner text-sm" {...props}>
          {domToReact(html.children, options)}
        </code>
      )
    }

    if (
      html.name === "figure" &&
      (html.attribs.class?.includes("kg-image-card") ||
        html.attribs.class?.includes("kg-code-card"))
    ) {
      return (
        <figure className="my-6">{domToReact(html.children, options)}</figure>
      )
    }

    if (html.name === "img") {
      const props = attributesToProps(html.attribs)
      props.src = `/api/getImage?url=${props.src}`
      return (
        <Image
          className="rounded-xl border border-sky-300 bg-gradient-to-br from-sky-100 to-purple-100 object-cover object-center"
          src={props.src}
          width={parseInt(props.width)}
          height={parseInt(props.height)}
          alt={props.alt}
        />
      )
    }

    if (
      html.name === "figcaption" &&
      ((html.parent.attribs.class?.includes("kg-image-card") &&
        html.parent.attribs.class?.includes("kg-card-hascaption")) ||
        html.parent.attribs.class?.includes("kg-code-card"))
    ) {
      const props = attributesToProps(html.attribs)
      return (
        <>
          <figcaption
            className="mt-1 text-center text-sm text-muted-foreground"
            {...props}
          >
            {domToReact(html.children, options)}
          </figcaption>
        </>
      )
    }
  },
}

function stringify(obj: any): string {
  let cache: any[] = []
  let str: string = JSON.stringify(obj, function (key, value) {
    if (typeof value === "object" && value !== null) {
      if (cache.indexOf(value) !== -1) {
        return
      }
      cache.push(value)
    }
    return value
  })
  // @ts-ignore
  cache = null
  return str
}

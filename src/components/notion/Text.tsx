import React from "react"
import Link from "next/link"

const applyAnnotations = (text, annotations) => {
  if (annotations.bold) {
    text = <strong>{text}</strong>
  }

  if (annotations.italic) {
    text = <em>{text}</em>
  }

  if (annotations.strikethrough) {
    text = <del>{text}</del>
  }

  if (annotations.underline) {
    text = <u>{text}</u>
  }

  if (annotations.code) {
    text = <code>{text}</code>
  }

  // if (annotations.color) {
  //   text = <span style={{ color: annotations.color }}>{text}</span>
  // }

  return text
}

type TextProps = {
  text: any
}

export default function Text({ text }: TextProps) {
  if (!text) {
    return null
  }

  return text.map((value) => {
    if (value.type !== "text") {
      return <>❌NOT SUPPORTED TEXT: {value.type}</>
    }

    const { annotations, text } = value

    return (
      <span key={text.content}>
        {text.link ? (
          <Link
            href={text.link.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {applyAnnotations(text.content, annotations)}
          </Link>
        ) : (
          applyAnnotations(text.content, annotations)
        )}
      </span>
    )
  })
}

import React from "react"
import { format } from "date-fns"

type DateFormatProps = {
  date: Date
  style: string
}

export default function DateFormat({ date, style }: DateFormatProps) {
  return <>{format(date, style)}</>
}

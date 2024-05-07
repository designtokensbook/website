import { cn } from "@/lib/utils"
import { type BlockquoteHTMLAttributes, forwardRef, type ReactNode } from "react"

import styles from "./quote.module.css";

export interface QuoteProps extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
  quote: ReactNode,
  author: string,
  description: string,
}

export const Quote = forwardRef<HTMLQuoteElement, QuoteProps>(
  ({ quote, author, description, className, ...props }, ref) => {
    return (<>
        <blockquote className={cn(className, styles.blockquote)} ref={ref} {...props}>
            {quote}
        </blockquote>
        <cite>
            {author}<br/>
            <em>{description}</em>
        </cite>
    </>)
  }
)
import { jssPreset, StylesProvider } from "@material-ui/core"
import { FC, ReactNode } from "react"
import rtl from "jss-rtl"
import { create } from "jss"

type Props = {
  children: ReactNode
}

const StyleFlipper: FC<Props> = ({ children }) => {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] })
  return <StylesProvider jss={jss}>{children}</StylesProvider>
}

export default StyleFlipper

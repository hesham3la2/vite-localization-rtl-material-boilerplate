import { createTheme, Theme, ThemeProvider } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import "./i18n"
import "./App.css"

function App() {
  const { t, i18n } = useTranslation(["translation", "common"])
  const theme: Theme = createTheme({
    direction: i18n.dir(),
  })
  console.log(i18n.dir())
  return (
    <ThemeProvider theme={theme}>
      <div dir={i18n.dir()} className="App">
        <p>{t("welcome")}</p>
        <p>{t("another", { ns: "common" })}</p>
        <div className="lang-buttons">
          <button
            style={{ marginInlineStart: "8px" }}
            onClick={() => i18n.changeLanguage("en")}
            disabled={i18n.resolvedLanguage === "en"}
          >
            {t("english")}
          </button>
          <button
            style={{ marginInlineStart: "8px" }}
            onClick={() => i18n.changeLanguage("ar")}
            disabled={i18n.resolvedLanguage === "ar"}
          >
            {t("arabic")}
          </button>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🌐 Redes de Computadores I",
    pageTitleSuffix: " | Prof. Romualdo",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "pt-BR",
    baseUrl: "rofilho.github.io/redes1",
    ignorePatterns: [
      "private",
      ".obsidian",
      // Regra Hard #2 — nada de prova, gabarito ou banco de questões no site.
      "avaliacoes",
      "Provas",
      "_Sistema_de_Aulas",
      "_Template_Aula",
      // arquivos de planejamento do professor: ficam no vault, não no portal
      "Redes1_Cronograma",
      "Redes_Computadores_1",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // Space Grotesk no display: geometrica, com corte tecnico de instrumento
        // de medicao. Usada com parcimonia (hero, titulos de bloco). Inter no corpo.
        header: "Space Grotesk",
        body: "Inter",
        code: "JetBrains Mono",
      },
      // Paleta ancorada na identidade REAL da Uniube, extraida dos proprios
      // ativos da instituicao em 26/07/2026 (nao inventada):
      //   #1D2057  tinta do logo oficial (logo_azul.svg)
      //   #2778C4  azul de acao/link do uniube.br
      //   #00AA9F  turquesa — o acento distintivo da marca
      colors: {
        // claro = a CARA do portal (off-white nitido, navy institucional)
        lightMode: {
          light: "#fafaf8",
          lightgray: "#e9e7e2",
          gray: "#8a8f98",
          darkgray: "#252a3f",
          dark: "#1d2057",
          secondary: "#2778c4",
          tertiary: "#00aa9f",
          highlight: "rgba(39, 120, 196, 0.07)",
          textHighlight: "#ffd97d66",
        },
        // escuro = modo operação (bancada, ao lado do Packet Tracer).
        // O navy vira o proprio fundo — a marca continua presente no escuro.
        darkMode: {
          light: "#10131f",
          lightgray: "#1e2235",
          gray: "#6c7385",
          darkgray: "#e2e5ef",
          dark: "#f4f5fa",
          secondary: "#6aa9e9",
          tertiary: "#3fd0c4",
          highlight: "rgba(106, 169, 233, 0.10)",
          textHighlight: "#b8860b55",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config

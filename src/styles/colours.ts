export enum Colours {
  "Black" = "#333232", // Jet
  "Jet" = "#333232",
  "White" = "#F8F8F8", // Cultured
  "Cultured" = "#F8F8F8",
  "Primary" = "#83BCFF", // FrenchSkyBlue
  "FrenchSkyBlue" = "#83BCFF",
  "Secondary" = "#97D2FB", // LightSkyBlue
  "LightSkyBlue" = "#97D2FB",
  "Error" = "#eccbd9", // QueenPink
  "QueenPink" = "#eccbd9",
  "PrimaryCTA" = "#80FFE8", // TurquoiseBlue
  "TurquoiseBlue" = "#80FFE8",
  "SecondaryCTA" = "#e1eff6", // AliceBlue
  "AliceBlue" = "#e1eff6",
}

export const getColour = (colour: keyof typeof Colours) => Colours[colour];

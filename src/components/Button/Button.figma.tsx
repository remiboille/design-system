import figma from "@figma/code-connect";
import { Button } from "./Button";

figma.connect(Button, "https://www.figma.com/design/qLKMy0QozvtRi7dcApCVXB/Claude-Code-Design-System?node-id=2-53", {
  props: {
    // TODO: add "Variant" property in Figma (Primary | Secondary | Ghost)
    // variant: figma.enum("Variant", { Primary: "primary", Secondary: "secondary", Ghost: "ghost" }),
    // TODO: add "Size" property in Figma (sm | md | lg)
    // size: figma.enum("Size", { sm: "sm", md: "md", lg: "lg" }),
    // TODO: add "Label" text property in Figma
    // label: figma.string("Label"),
    disabled: figma.boolean("Boolean"),
  },
  example: ({ disabled }) => (
    <Button label="Button" variant="primary" size="md" disabled={disabled} />
  ),
});

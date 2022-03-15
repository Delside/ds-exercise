import React from "react";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Button from "../components/Button.js";
import "jest-styled-components";
import theme from "../components/theme.js";

afterEach(cleanup);

describe("Button styled-components styling", () => {
  it("Render button with defined local component styling", () => {
    const tree = renderer.create(<Button>Create new</Button>).toJSON();

    expect(tree).toHaveStyleRule("outline", "none");
    expect(tree).toHaveStyleRule("border", "0");
    expect(tree).toHaveStyleRule("margin", "1pt");
  });
});

describe("Button styled-components font properties", () => {
  it("Render button with defined global font color and family", () => {
    const tree = renderer.create(<Button>Create new</Button>).toJSON();

    expect(tree).toHaveStyleRule("color", theme.fontColor);
    expect(tree).toHaveStyleRule("font-family", theme.fontFamily);
  });
});

describe("Button appropriate size", () => {
  it("Render large button if size variant is inappropriate", () => {
    const tree = renderer
      .create(<Button size="definitelynotcorrectvalue ;)">Create new</Button>)
      .toJSON();

    expect(tree).toHaveStyleRule("height", theme.btnSize.large.height);
  });
});

describe("Button without size property", () => {
  it("Render large button if size variant is not declared", () => {
    const tree = renderer.create(<Button>Create new</Button>).toJSON();

    expect(tree).toHaveStyleRule("height", theme.btnSize.large.height);
    expect(tree).toHaveStyleRule("min-width", theme.btnSize.large.minWidth);
    expect(tree).toHaveStyleRule("font-size", theme.btnSize.large.fontSize);
    expect(tree).toHaveStyleRule("padding", theme.btnSize.large.padding);
  });
});

describe("Button small size", () => {
  it("Render large button if size variant is small", () => {
    const tree = renderer
      .create(<Button size="small">Create new</Button>)
      .toJSON();

    expect(tree).toHaveStyleRule("height", theme.btnSize.small.height);
    expect(tree).toHaveStyleRule("min-width", theme.btnSize.small.minWidth);
    expect(tree).toHaveStyleRule("font-size", theme.btnSize.small.fontSize);
    expect(tree).toHaveStyleRule("padding", theme.btnSize.small.padding);
  });
});

describe("Button medium size", () => {
  it("Render large button if size variant is medium", () => {
    const tree = renderer
      .create(<Button size="medium">Create new</Button>)
      .toJSON();

    expect(tree).toHaveStyleRule("height", theme.btnSize.medium.height);
    expect(tree).toHaveStyleRule("min-width", theme.btnSize.medium.minWidth);
    expect(tree).toHaveStyleRule("font-size", theme.btnSize.medium.fontSize);
    expect(tree).toHaveStyleRule("padding", theme.btnSize.medium.padding);
  });
});

describe("Button large size", () => {
  it("Render large button if size variant is medium", () => {
    const tree = renderer
      .create(<Button size="large">Create new</Button>)
      .toJSON();

    expect(tree).toHaveStyleRule("height", theme.btnSize.large.height);
  });
});

describe("Button disabled style", () => {
  it("Render disabled button with appropriate style", () => {
    const tree = renderer.create(<Button disabled>Create new</Button>).toJSON();

    expect(tree).toHaveStyleRule(
      "background-color",
      theme.disabledStyle.backgroundColor,
      {
        modifier: "&:disabled",
      }
    );
    expect(tree).toHaveStyleRule("color", theme.disabledStyle.color, {
      modifier: "&:disabled",
    });
    expect(tree).toHaveStyleRule(
      "pointer-events",
      theme.disabledStyle.pointerEvents,
      {
        modifier: "&:disabled",
      }
    );
  });
});

describe("Button hover style", () => {
  it("Render button with appropriate hover pseudoclass style", () => {
    const tree = renderer.create(<Button>Create new</Button>).toJSON();

    expect(tree).toHaveStyleRule("background-color", theme.classicBlue.shade1, {
      modifier: "&:hover",
    });
  });
});

describe("Button focus style", () => {
  it("Render button with appropriate focus pseudoclass style", () => {
    const tree = renderer.create(<Button>Create new</Button>).toJSON();

    expect(tree).toHaveStyleRule("box-shadow", theme.focusStyle.boxShadow, {
      modifier: "&:focus:not(:hover)",
    });
  });
});

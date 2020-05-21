import * as React from "react";
import { Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

const centerAnchor = new PIXI.Point(0.5, 0.5);

const loader = PIXI.Loader.shared;

function Background({ ...props }) {
  const [tex, setTexture] = React.useState<PIXI.Texture | null>(null);

  React.useEffect(() => {
    const url =
      "https://uploads.codesandbox.io/uploads/user/aac6319e-2bf7-4af0-a115-40b05e947ef4/88wQ-background0.jpg";
    //if (PIXI.Texture.from("bg")) {
    //  console.log(`already loaded`);
    //  return;
    //}
    loader.add("bg", url).load(data => {
      setTexture(PIXI.Texture.from("bg"));
      console.log(loader.resources);
    });
  }, []);

  return tex && <Sprite anchor={centerAnchor} texture={tex} {...props} />;
}

export default Background;

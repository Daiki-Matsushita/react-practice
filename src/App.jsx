import React, { useEffect, useState } from "react";
//import ColorfulMsg from "./components/ColorfulMsg";
import { ColorfulMsg } from "./components/ColorfulMsg";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(false);

  const onClickCountUpBtn = () => {
    setNum(num + 1);
  };

  const onClickFaceShowFlgBtn = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      faceShowFlg || setFaceShowFlg(true);
    } else {
      faceShowFlg && setFaceShowFlg(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    // React.Fragment
    <>
      <h1 style={{ color: "red" }}>もかもか!!!!</h1>
      <ColorfulMsg color="blue">お元気ですか？？</ColorfulMsg>
      <ColorfulMsg color="pink">あっはん。げんきよん</ColorfulMsg>
      <button onClick={onClickCountUpBtn}>count up</button>
      <br />
      <button onClick={onClickFaceShowFlgBtn}>(';')on/off</button>
      <p>{num}</p>
      {faceShowFlg && <p>(';')</p>}
    </>
  );
};

export default App;

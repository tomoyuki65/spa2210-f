/* 「猫画像ジェネレーター」のコンポーネント */

import { useState } from "react"
import FetchCatImage from "../components/fetchcatimage"

interface CatGeneratorProps {
  initialCatImageUrl: string;
};

const CatGenerator = (props: CatGeneratorProps) => {

  const [catImageUrl, setCatImageUrl] = useState(props.initialCatImageUrl);

  const handleClick = async () => {
    const image = await FetchCatImage();
    setCatImageUrl(image.url);
  };

  return (
    <div>
      <button className="m-1 p-1 bg-slate-200 border-solid border border-slate-300 rounded-md cursor-pointer"
              onClick={handleClick} >
        きょうのにゃんこ🐱
      </button>
      <div>
        <img src={catImageUrl} width={500} height="auto" />
      </div>
    </div>
  )
};

export default CatGenerator;

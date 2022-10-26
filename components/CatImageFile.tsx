/* 「猫画像ファイル」のコンポーネント */

import { useState } from "react"
import Image from 'next/image'

const catImages: string[] = [
  "/img-cat-1.jpg",
  "/img-cat-2.jpg",
  "/img-cat-3.jpg",
];

const randomCatImage = () => {
  const index = Math.floor(Math.random() * catImages.length);
  return catImages[index];
};

const CatImageFile = () => {
  const [catImagePass, setCatImageUrl] = useState("/img-cat-0.jpg");

  const handleClick = () => {
    setCatImageUrl(randomCatImage());
  };

  return (
    <div>
      <button className="m-1 p-1 bg-slate-200 border-solid border border-slate-300 rounded-md cursor-pointer"
              onClick={handleClick} >
        にゃんこボタン🐱
      </button>
      <div>
        <Image src={catImagePass} alt="cat image" width={700} height={500} />
      </div>
    </div>
  )
};

export default CatImageFile;

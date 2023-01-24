/* 「犬画像ファイル」のコンポーネント */

import { useState } from "react"
import Image from 'next/image'

const dogImages: string[] = [
  "/img-dog-1.jpg",
  "/img-dog-2.jpg",
  "/img-dog-3.jpg",
];

const randomDogImage = () => {
  const index = Math.floor(Math.random() * dogImages.length);
  return dogImages[index];
};

const DogImageFile = () => {
  const [dogImagePass, setDogImageUrl] = useState("/img-dog-0.jpg");

  const handleClick = () => {
    setDogImageUrl(randomDogImage());
  };

  return (
    <div>
      <button className="m-1 p-1 bg-slate-200 border-solid border border-slate-300 rounded-md cursor-pointer"
              onClick={handleClick} >
        わんこボタン🐶
      </button>
      <div>
        <Image src={dogImagePass} alt="cat image" width={700} height={500} />
      </div>
    </div>
  )
};

export default DogImageFile;

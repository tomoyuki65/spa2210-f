/* 「いいねボタン」のコンポーネント */

import { useState } from "react";

const LikeButton = () => {
  const [count, setCount] = useState(999);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <span className="bg-red-500 text-white p-[0.8rem] rounded-md cursor-pointer"
          onClick={handleClick}>
      ♥ {count}
    </span>
  )
};

export default LikeButton;
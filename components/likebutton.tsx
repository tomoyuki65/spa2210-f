/* 「いいねボタン」のコンポーネント */

import { useState } from "react"
import { toast } from "react-toastify";

const LikeButton = () => {
  const [count, setCount] = useState(99);
  const handleClick = () => {
    setCount(count + 1);
    toast.error("アラートのメッセージ");
  };
  return (
    <span className="bg-red-500 text-white p-[0.8rem] rounded-md cursor-pointer inline-block"
          onClick={handleClick}>
      ♥ {count}
    </span>
  )
};

export default LikeButton;
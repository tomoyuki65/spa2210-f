/* The Cat APIから猫画像のURLを取得するコンポーネント */

interface CatCategory {
  id: number;
  name: string;
};

interface SearchCatImage {
  breeds: string[];
  categories: CatCategory[];
  id: string;
  url: string;
  width: number;
  height: number;
};

type SearchCatImageResponse = SearchCatImage[];

const FetchCatImage = async (): Promise<SearchCatImage> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const result = (await res.json()) as SearchCatImageResponse;
  return result[0];
};

export default FetchCatImage;

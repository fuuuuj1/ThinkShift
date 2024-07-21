import type { MetaFunction, loaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import prompts from "../../public/prompts.json";

// import した prompts を loaderFunction で返す
export const loader: loaderFunction = async () => {
  return json({ prompt: prompts[Math.floor(Math.random() * prompts.length)] });
};

// メタ情報を設定する関数
export const meta: MetaFunction = () => {
  return [
    { title: "Think Shift" },
    { name: "description", content: "May this help you shift your thinking in difficult situations." },
  ];
};

// Indexコンポーネントを定義してloaderからデータを取得し表示します
export default function Index() {
  const { prompt } = useLoaderData();
  return (
    // 画面中央に表示するためにCSSを追加
    <div className="font-sans p-4 flex justify-center items-center min-h-dvh text-xl bg-gray-800 text-white">
      <p>{prompt}</p>
    </div>
  );
}

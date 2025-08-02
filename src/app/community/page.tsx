"use client";

import { useState } from 'react';

export default function CommunityPage() {
  const [tokens, setTokens] = useState(0);

  const handleVideoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここに動画投稿のロジック（ダミー）
    setTokens(prevTokens => prevTokens + 10); // 動画投稿で10トークン付与
    alert('動画を投稿しました！10トークン獲得！');
  };

  const handleChatSubmit = () => {
    // ここにチャット送信のロジック（ダミー）
    setTokens(prevTokens => prevTokens + 1); // チャット送信で1トークン付与
    alert('メッセージを送信しました！1トークン獲得！');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <a href="/" className="text-green-600 hover:underline">&larr; トップページに戻る</a>
      </div>
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">コミュニティ広場</h2>

      {/* トークン表示 */}
      <div className="text-center mb-8">
        <p className="text-xl font-bold text-blue-600">現在のトークン: {tokens}</p>
      </div>

      {/* 動画投稿フォーム */}
      <section className="mb-12">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-green-700 mb-4">動画を投稿する</h3>
          <form onSubmit={handleVideoSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2">タイトル</label>
              <input type="text" id="title" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="動画のタイトルを入力" />
            </div>
            <div className="mb-4">
              <label htmlFor="video" className="block text-gray-700 font-bold mb-2">動画ファイル</label>
              <input type="file" id="video" className="w-full px-3 py-2 border rounded-lg" accept="video/*" />
            </div>
            <div className="text-center">
              <button type="submit" className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">投稿する</button>
            </div>
          </form>
        </div>
      </section>

      {/* 投稿動画一覧 */}
      <section>
        <h3 className="text-2xl font-bold text-green-700 mb-4">みんなの投稿</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ダミーの動画カード */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-300 w-full h-48 flex items-center justify-center">
              <p className="text-gray-500">動画プレビュー</p>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-lg">素晴らしいドライバーショット！</h4>
              <p className="text-gray-600 text-sm">投稿者: ゴルフ大好きさん</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-300 w-full h-48 flex items-center justify-center">
              <p className="text-gray-500">動画プレビュー</p>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-lg">パターの練習風景</h4>
              <p className="text-gray-600 text-sm">投稿者: パター名人さん</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-300 w-full h-48 flex items-center justify-center">
              <p className="text-gray-500">動画プレビュー</p>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-lg">バンカーショットのコツ</h4>
              <p className="text-gray-600 text-sm">投稿者: 砂場の魔術師さん</p>
            </div>
          </div>
        </div>
      </section>

      {/* チャットスペース */}
      <section className="mt-12">
        <h3 className="text-2xl font-bold text-green-700 mb-4">チャットスペース</h3>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="h-64 overflow-y-auto border border-gray-300 p-4 rounded-lg mb-4">
            {/* ダミーのチャットメッセージ */}
            <div className="mb-2">
              <span className="font-bold text-blue-600">ゴルフ大好きさん:</span> こんにちは！今日の練習どうでしたか？
            </div>
            <div className="mb-2 text-right">
              <span className="font-bold text-green-600">パター名人さん:</span> 絶好調でした！新しいパターがすごく良い感じです。
            </div>
            <div className="mb-2">
              <span className="font-bold text-blue-600">ゴルフ大好きさん:</span> それは素晴らしいですね！私も新しいクラブが欲しいです。
            </div>
          </div>
          <div className="flex">
            <input type="text" className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="メッセージを入力..." />
            <button type="button" onClick={handleChatSubmit} className="bg-green-600 text-white font-bold py-2 px-4 rounded-r-lg hover:bg-green-700 transition-colors">送信</button>
          </div>
        </div>
      </section>
    </div>
  );
}
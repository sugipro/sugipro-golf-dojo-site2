import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <header className="bg-green-700 text-white shadow-md min-h-24">
        <div className="w-full px-4 py-2 flex flex-col md:flex-row justify-between items-center min-h-24">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <h1 className="text-xl md:text-3xl font-bold">スギプロゴルフ道場広場</h1>
            <p className="text-sm md:text-lg">最高のゴルフ体験を、あなたに。スギプロゴルフ道場で、もっとゴルフが好きになる。</p>
          </div>
          <nav className="mt-4 md:mt-0 w-full text-center">
            <a href="/community" className="bg-white text-green-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors inline-block">コミュニティ広場へ</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative w-full h-96">
          <Image
            src="/image/header.jpg"
            alt="ヒーローセクション背景画像"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-green-700 mb-8">お知らせ</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <p className="text-gray-500">2025.08.02</p>
                <p className="text-lg">新しいレッスンプログラムを開始しました。</p>
              </div>
              <div className="border-b pb-4">
                <p className="text-gray-500">2025.07.15</p>
                <p className="text-lg">夏期集中講座の参加者募集を開始しました。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-green-700 mb-8">コンセプト</h3>
            <p className="max-w-3xl mx-auto text-center text-gray-600">
              スギプロゴルフ道場広場は、ゴルフを愛するすべての人が集い、学び、成長できる場所です。初心者から上級者まで、一人ひとりのレベルに合わせた丁寧な指導で、あなたのゴルフライフをサポートします。
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 スギプロゴルフ道場広場. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
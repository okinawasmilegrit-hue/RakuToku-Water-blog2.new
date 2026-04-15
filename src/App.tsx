import { CheckCircle2, ChevronRight, Clock, Tag, AlertCircle, Lightbulb } from 'lucide-react';

export default function App() {
  // --- 記事情報（ここを変更する） ---
  const article = {
    title: "水道水が激変！？沖縄専用フィルターで「まろやかな軟水」を作る秘密",
    category: "お水と健康",
    date: "2024.05.20",
    // ヒーロー画像：グラスに注がれる綺麗な水
    heroImage: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&q=80&w=1200&h=600",
    leadText: "毎日飲むお水、皆さんはどうしていますか？ 「水道水をそのまま、あるいは一度沸かして飲んでいる」「ポット型浄水器を使っている」という方も多いのではないでしょうか。手軽で経済的ですよね。",
    painPoints: [
      "どうしてもカルキ（塩素）のニオイが気になる…",
      "沖縄の水って、なんだか味が違う気がする（硬水特有の飲みにくさ）",
      "ポット型は、ろ過の“待ち時間”が地味にストレス💦",
      "冷蔵庫の中でポットが場所をとって邪魔になる"
    ],
    // 挿入画像1：ポット型浄水器や水道水の悩みを連想させる画像
    insertImage1: "https://images.unsplash.com/photo-1584820927498-cafe2c1c6669?auto=format&fit=crop&q=80&w=800&h=500",
    solutionText: "「塩素のニオイを完全に消して、もっと手軽に美味しいお水が飲みたい！」そんな沖縄の皆さまのために作られたのが、水道直結型ウォーターサーバー「ラクトクウォーター」です。最大の特徴は、【沖縄の水質に合わせて設計された5段階フィルター】。サビやホコリはもちろん、気になる塩素（カルキ臭）や有機フッ素化合物（PFAS）までしっかりキャッチ！ さらに、ミネラルを残してお茶やお料理が劇的に美味しくなる「軟水」へと仕上げます。いつもの蛇口から、まるでカフェで出てくるような、まろやかで美味しいお水がいつでも飲めるようになります！",
    // 挿入画像2：コーヒーや料理に使っている画像
    insertImage2: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800&h=500",
    
    // キャンペーン情報
    campaign: {
      name: "【マルシェにご来場者様限定】1ヶ月完全無料お試しキャンペーン",
      description: "「本当に水道水が美味しくなるの？」「うちのキッチンにも置けるかな？」そんな疑問にお答えするため、マルシェでご縁があった皆様限定で実施中です！",
      freeItems: [
        "設置工事費用 0円",
        "1ヶ月間のお水代（レンタル料） 0円",
        "もし合わなかった場合の撤去費用 0円",
        "自動更新なし（勝手に課金されることは絶対にありません）"
      ],
      link: "https://lstep.app/form/28365/ZMiflJ/69514a",
      // キャンペーンバナー：マルシェやプレゼント感のある画像
      bannerImage: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800&h=300"
    },
    
    // 固定バナー（フィルター）：綺麗な水・自然のイメージ
    filterBanner: "https://images.unsplash.com/photo-1585776263594-518337190d63?auto=format&fit=crop&q=80&w=800&h=300"
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <p className="text-lg font-bold text-brand-blue tracking-wider font-serif">
            Water & Wellness Blog
          </p>
        </div>
      </header>

      <main className="flex-grow max-w-3xl mx-auto w-full bg-white shadow-sm my-0 md:my-8 md:rounded-2xl overflow-hidden">
        
        {/* ブログ記事ヘッダー */}
        <div className="px-6 md:px-10 pt-10 pb-6">
          <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
            <span className="flex items-center bg-blue-50 text-brand-blue px-3 py-1 rounded-full font-medium">
              <Tag className="w-4 h-4 mr-1" />
              {article.category}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {article.date}
            </span>
          </div>
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 mb-8">
            {article.title}
          </h1>
        </div>

        {/* ヒーロー画像 */}
        <div className="px-6 md:px-10 mb-10">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-sm">
            <img 
              src={article.heroImage} 
              alt="Hero" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 記事本文エリア */}
        <div className="px-6 md:px-10 pb-12 space-y-12">
          
          {/* リード文 */}
          <div className="text-lg leading-relaxed text-gray-700 bg-gray-50 p-6 rounded-xl border border-gray-100">
            <p>{article.leadText}</p>
          </div>

          {/* 悩みセクション */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100 flex items-center">
              <AlertCircle className="w-6 h-6 mr-2 text-brand-orange" />
              こんなお悩みありませんか？
            </h2>
            
            <div className="mb-6">
              <ul className="space-y-3">
                {article.painPoints.map((point, index) => (
                  <li key={index} className="flex items-start bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0 mr-3 mt-0.5" />
                    <span className="text-lg font-medium text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <img 
              src={article.insertImage1} 
              alt="お悩みのイメージ" 
              className="w-full h-auto rounded-xl shadow-sm"
            />
          </section>

          {/* 解決策セクション */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100 flex items-center">
              <Lightbulb className="w-6 h-6 mr-2 text-brand-blue" />
              その悩み、水道直結型サーバーで解決できます
            </h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              {article.solutionText}
            </p>

            <img 
              src={article.insertImage2} 
              alt="解決策のイメージ" 
              className="w-full h-auto rounded-xl shadow-sm mb-8"
            />

            {/* フィルターバナー（固定） */}
            <div className="relative rounded-xl overflow-hidden shadow-md bg-brand-blue text-white p-8 my-8">
              <img 
                src={article.filterBanner} 
                alt="県外とは水質が違う沖縄の水。" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
              />
              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-bold mb-3">県外とは水質が違う沖縄の水。</h3>
                <p className="text-blue-50 leading-relaxed">
                  沖縄の水道水はミネラル分が多く、そのままでは飲みにくいと感じる方も多いです。ラクトクウォーターは、沖縄の水質に特化した高性能フィルターを搭載。不純物をしっかり除去し、まろやかで美味しいお水を作ります。
                </p>
              </div>
            </div>
          </section>

          {/* まとめ・CTAセクション */}
          <section className="mt-16 pt-10 border-t border-gray-200">
            <h2 className="font-serif text-2xl font-bold text-center mb-8 text-gray-900">
              まずは無料でお試ししてみませんか？
            </h2>
            
            <div className="border-2 border-brand-blue rounded-2xl bg-white p-6 md:p-8 text-center shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-brand-blue"></div>
              
              <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-blue mb-3">
                {article.campaign.name}
              </h3>
              <p className="text-lg font-bold text-gray-800 mb-6">
                {article.campaign.description}
              </p>

              <div className="bg-blue-50 rounded-xl p-5 mb-8 text-left inline-block w-full md:w-auto">
                <ul className="space-y-2">
                  {article.campaign.freeItems.map((item, index) => (
                    <li key={index} className="flex items-center text-base font-medium text-gray-800">
                      <CheckCircle2 className="w-5 h-5 text-brand-blue mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={article.campaign.link}
                className="flex items-center justify-center w-full py-4 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg"
              >
                無料お試しに申し込む
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <p className="text-sm text-gray-500 mt-4">
                ※お申し込みは1分で完了します
              </p>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center mt-auto">
        <p className="text-sm">
          &copy; 株式会社SmileGrit | ラクトク（楽得）ウォーター | 沖縄県
        </p>
      </footer>
    </div>
  );
}

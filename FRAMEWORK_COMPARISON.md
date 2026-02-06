# UIフレームワーク比較

## 現在の状況
- **Pure.css v0.6.2** (2017年リリース)
- CDN経由で読み込み
- 最終更新: 7年以上前

## 候補フレームワーク

### 1. Bulma
**バージョン**: 1.0.2 (2024年リリース)

**特徴**:
- Flexboxベースのモダンなフレームワーク
- JavaScriptが不要（Pure.cssと同様の哲学）
- クラス名が直感的で読みやすい
- レスポンシブデザインが標準装備
- コンポーネントが豊富

**導入の簡単さ**: ⭐⭐⭐⭐⭐
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
```

**メリット**:
- Pure.cssと同じくCDNで1行で導入可能
- モバイルメニュー用の最小限のJavaScriptのみ必要
- ドキュメントが充実
- アクティブに開発されている

**デメリット**:
- ファイルサイズがやや大きい（約200KB）

**移行の難易度**: 低〜中

---

### 2. Tailwind CSS
**バージョン**: 3.4+ (CDN版)

**特徴**:
- ユーティリティファーストのフレームワーク
- HTMLに直接スタイルを記述
- カスタマイズ性が非常に高い
- モダンな開発手法

**導入の簡単さ**: ⭐⭐⭐⭐⭐
```html
<script src="https://cdn.tailwindcss.com"></script>
```

**メリット**:
- CDNで1行で導入可能（本番環境ではビルドプロセス推奨）
- カスタムデザインが簡単
- 人気が高く、情報が豊富
- 最も勢いのあるフレームワーク

**デメリット**:
- HTMLが冗長になる
- 学習曲線がやや急
- CDN版は本番環境には推奨されない（ファイルサイズが大きい）

**移行の難易度**: 中

---

### 3. Pico CSS
**バージョン**: 2.0+

**特徴**:
- セマンティックなクラスレスフレームワーク
- 最小限のCSSで美しいデザイン
- クラス名をほとんど使わない
- ダークモード標準対応

**導入の簡単さ**: ⭐⭐⭐⭐⭐
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
```

**メリット**:
- 最も軽量（約10KB gzip圧縮後）
- HTMLがシンプルで読みやすい
- ダークモード対応が自動
- Pure.cssと同じくCSSのみで動作

**デメリット**:
- カスタマイズ性が限定的
- コンポーネントが少ない
- 細かいデザイン調整には向かない

**移行の難易度**: 低

---

### 4. Bootstrap
**バージョン**: 5.3.3

**特徴**:
- 最も人気のあるCSSフレームワーク
- コンポーネントが非常に豊富
- 業界標準的な存在
- エコシステムが巨大

**導入の簡単さ**: ⭐⭐⭐⭐
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

**メリット**:
- 最も多くの情報・チュートリアルがある
- コンポーネントが豊富
- 大規模プロジェクトにも対応
- Pure.cssと同様にCDNで簡単導入

**デメリット**:
- ファイルサイズが大きい（CSS約200KB + JS約80KB）
- デザインが「Bootstrap感」が出やすい
- JavaScriptが必須のコンポーネントが多い

**移行の難易度**: 中

---

## 推奨順位

### 1位: **Bulma** 🥇
Pure.cssからの移行先として最適。CDN導入が簡単で、モダンな機能を持ちながら、Pure.cssの哲学（CSSメイン、最小限のJS）を引き継いでいます。

### 2位: **Pico CSS** 🥈
最もシンプルで軽量。Pure.cssよりもさらにミニマルなアプローチを求める場合に最適。

### 3位: **Tailwind CSS** 🥉
モダンな開発手法を取り入れたい場合に最適。ただし、静的サイトでCDN版を使う場合は本来の利点が活かせない。

### 4位: **Bootstrap**
最も保守的な選択肢。大規模サイトへの拡張を考える場合は良い選択だが、このシンプルなサイトには過剰かもしれません。

## デモページ
各フレームワークの実装例を確認できます:
- [Bulmaデモ](demo-bulma.html)
- [Tailwind CSSデモ](demo-tailwind.html)
- [Pico CSSデモ](demo-pico.html)
- [Bootstrapデモ](demo-bootstrap.html)

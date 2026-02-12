export default function Home() {
  return (
    <article className="container mx-auto px-4 py-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">arc680</h2>
      <ul className="list-disc pl-5 text-gray-700">
        <li>
          Web 系エンジニア
          <ul className="list-disc pl-5">
            <li>フロントエンド: React, Next.js</li>
            <li>バックエンド: Java, Kotlin, Spring Boot</li>
          </ul>
        </li>
        <li>ゲームやアニメを嗜む</li>
      </ul>

      <h3 className="text-xl font-bold mt-10 mb-2 text-gray-900">Links</h3>
      <ul className="list-disc pl-5 text-gray-700">
        <li>
          <a
            href="https://twitter.com/arc680"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://github.com/arc680"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="http://arc680.hatenablog.jp/"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Blog
          </a>
        </li>
      </ul>
    </article>
  );
}

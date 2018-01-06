import { DocBasePdf } from 'docbase-pdf/lib/DocBasePdf';
import { MemoCondition } from 'node-docbase-sdk/lib/conditions/MemoCondition';


// Get DocBaseAPI Token from cli.
// ex.
//   $ DOC_BASE_API_TOKEN=<DOC_BASE_API_TOKEN> node .
const DOC_BASE_API_TOKEN = process.env.DOC_BASE_API_TOKEN;
const TEAM_NAME = 'TEAM_NAME';

// クライアント生成
const docBasePdf: DocBasePdf = new DocBasePdf(DOC_BASE_API_TOKEN, TEAM_NAME);

// メモの検索キーワード
const KEYWORD = 'DOCBASE_API_TEST';

// PDF出力先ディレクトリ
const outputPath = 'docs';

// 取得するメモID
// https://${TEAM_NAME}.docbase.io/posts/${memoId}
const memoId = 347796;

async function main() {

  // メモIDを指定してPDFを取得します。
  await docBasePdf.getByMemoId(memoId, outputPath);

  // 検索条件を指定してPDFを取得します。
  const condition: MemoCondition = <MemoCondition>{};
  condition.q = KEYWORD;
  await docBasePdf.getByCondition(condition, outputPath);
}

// == Main ==
main().catch((error) => {
  console.log(error);
});

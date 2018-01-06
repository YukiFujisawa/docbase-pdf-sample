"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const DocBasePdf_1 = require("docbase-pdf/lib/DocBasePdf");
// Get DocBaseAPI Token from cli.
// ex.
//   $ DOC_BASE_API_TOKEN=<DOC_BASE_API_TOKEN> node .
const DOC_BASE_API_TOKEN = process.env.DOC_BASE_API_TOKEN;
const TEAM_NAME = 'TEAM_NAME';
// クライアント生成
const docBasePdf = new DocBasePdf_1.DocBasePdf(DOC_BASE_API_TOKEN, TEAM_NAME);
// メモの検索キーワード
const KEYWORD = 'DOCBASE_API_TEST';
// PDF出力先ディレクトリ
const outputPath = 'docs';
// 取得するメモID
// https://${TEAM_NAME}.docbase.io/posts/${memoId}
const memoId = 347796;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // メモIDを指定してPDFを取得します。
        yield docBasePdf.getByMemoId(memoId, outputPath);
        // 検索条件を指定してPDFを取得します。
        const condition = {};
        condition.q = KEYWORD;
        yield docBasePdf.getByCondition(condition, outputPath);
    });
}
// == Main ==
main().catch((error) => {
    console.log(error);
});
//# sourceMappingURL=index.js.map
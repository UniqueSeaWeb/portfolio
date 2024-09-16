window.addEventListener('DOMContentLoaded', function () {
    // 現在の時刻に基づいて背景画像を変更
    setBackgroudImg();
});

// 現在の時刻に基づいて背景画像を変更する関数
function setBackgroudImg() {
    // 現在時刻を取得
    const now = new Date();
    // 時を取得
    const hours = now.getHours();

    // body要素を取得
    const body = document.body;

    // 時刻に基づいて背景画像を設定
    if (hours < 6 || 18 <= hours) {
        // 夜間（6時前または18時以降）の場合は月夜の砂浜
        body.classList.add('beach_moonnight');
    } else if (hours < 16) {
        // 昼間（6時〜16時）の場合は日中の砂浜
        body.classList.add('beach_daytime');
    } else if (hours < 18) {
        // 夕方（16時〜18時）の場合はサンセットビーチ
        body.classList.add('beach_sunset');
    }
}
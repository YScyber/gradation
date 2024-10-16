## CSS グラデーション

このリポジトリではJavaScriptでDOM操作を行っています。１つ目のtextarea要素にはHTMLのコードが、２つ目のtextarea要素にはCSSのコードがすでに入力されており、最上部にあるプレビュー画面（section要素）にその結果が出力されてます。コードは自分でも書き換えることができ、元に戻す際には一番下にある【**リセット**】ボタンをクリックすると最初の画面に戻ります。

iframe要素の内容は上から順に以下の通りとなります。

### 共通設定
- プレビュー画面（section要素）内の背景を`黒色`に設定しています。
- テキスト（h2要素）の色は`白色`に設定しています。
- ボックス（div.box要素）は幅を`100%`、高さを`300px`にしています。

```css
section.preview {
    background-color: #000;
}

h2 {
    color: #fff;
}
    
div.box {
    width: 100%;
    height: 300px;
}
```

### 線形グラデーション

```css
div.box {
    background: linear-gradient(90deg, #800, #080, #008);
}
```

### 繰り返し線形グラデーション

```css
div.box {
    background: repeating-linear-gradient(-45deg, #810 20px, #ff0 40px);
}
```

### 繰り返し線形アニメーション

```css
div.box {
    background: repeating-linear-gradient(-45deg, #810 20px, #ff0 40px);
    background-size: 20px 20px;
    animation: stripe 0.8s infinite linear;
}

@keyframes stripe {
    from { background-position-x: 0; }
    to { background-position-x: -40px; }
}
```

### 放射グラデーション

```css
div.box {
    background: radial-gradient(circle, #800, #080, #008);
}
```

### 繰り返し放射グラデーション

```css
div.box {
    background: repeating-radial-gradient(circle, #06d 20px, #0f8 60px);
}
```

### 繰り返し放射アニメーション

```css
div.box {
    position: relative;
    overflow: hidden;
}

div.box::before {
    content: "";
    position: absolute;
    inset: -25%;
    background: repeating-radial-gradient(circle, #06d 20px, #0f8 60px);
    animation: scale 10s infinite linear;
}

@keyframes scale {
    0% { transform: scale(1); }
    25% { transform: scale(1.2); }
    50% { transform: scale(1.5); }
    75% { transform: scale(1.2); }
    100% { transform: scale(1); }
}
```

### 扇形グラデーション

```css
div.box {
    background: conic-gradient(#800, #080, #008);
}
```

### 繰り返し扇形グラデーション

```css
div.box {
    background: repeating-conic-gradient(#fa5 0deg 10deg, #00f 10deg 20deg);
}
```

### 繰り返し扇形アニメーション

```css
div.box {
    position: relative;
    overflow: hidden;
}

div.box::before {
    content: "";
    position: absolute;
    inset: -25%;
    background: repeating-conic-gradient(#fa5 0deg 10deg, #00f 10deg 20deg);
    animation: rotation 10s infinite linear;
}

@keyframes rotation {
    from { transform: scale(3) rotate(0deg); }
    to { transform: scale(3) rotate(360deg); }
}
```
<br>

※ 日本時間 2024/10/16 にリファクタリングしました。
<br><br>

[完成ページへ](https://yscyber.github.io/css-gradation/ "https://yscyber.github.io/css-gradation/")

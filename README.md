# README

`React`+`Redux`を学習した際の覚え書きです。`React Hooks`全盛期の今、学習するのはモチベもあがりづらいのですが、基礎体力として学びます。

## Action Creator

- `Action Creator`とは、`Action`を作るためのロジックを記載するもの
- Reduxの`ActionCreator`では単に`Action`を返すもの

```javascript
// Action creator
function setUserName(userName) {
  return { // Action
    type: 'SET_USER_NAME',
    UserName,
  };
}
```

- `dispatch()`では、直接`Store`へアクセス出来るが、`react-redux`の`connect`を使って発火させることが多い
- `bindActionCreators()`を使用すると、多くの`Action Creator`を自動的に`dispath()`にバインドできる
- `Action Creator`は非同期で副作用もある
- `Action Creator`には同期と非同期の2パターンがある

```javascript
// Action creator
function setUserName(userName) {
  return { // Action
    type: 'SET_USER_NAME',
    UserName,
  };
}

// Async Action creator
function setUserNameAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(setUserName());
    }, 1000);
  };
}
```

## なんとなく用語

- `プレゼンテーション層` UI
- `アプリケーション層` ビジネスロジック
- `モデル層` データベース

## 参考

[Redux における "ActionCreator & Action" の Best Practice を考える](https://qiita.com
/staka121/items/22c51b27e656ecd49600#action-creator)

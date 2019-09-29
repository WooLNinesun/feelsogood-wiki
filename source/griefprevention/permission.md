---
title: 領地權限
---

# 領地權限等級

有三種不同的領地權限，分別為：

## 建築權限

* 說明：可以在領地內擺放/破壞方塊的權限（最高的領地權限）
* 註解：包含箱子（containertrust）和操作（accesstrust）的權限。
* 指令：`/trust <玩家 ID>`

## 箱子權限

* 說明：可以使用合成臺、可儲物方塊（儲物箱、漏斗、界伏盒、熔爐、釀造臺...）和所有動物互動（裝牛奶、騎乘、剪羊毛、剪蘑菇...）的權限
* 註解：包含操作（accesstrust）的權限。
* 指令：`/containertrust <玩家 ID>`

## 操作權限

* 說明：可以操作領地內的按鈕、拉桿和床的權限
* 指令：`/accesstrust <玩家 ID>`

{% divbox showimg %}
  {% img /uploads/griefprevention/permission_relation.png %}
{% enddivbox %}

## 管理權限

* 說明：這個領地權限比較特別，可以讓該玩家可以分享他在該領地的權限給他人，比如說給與一位玩家箱子（containertrust）和管理（permissiontrust）的權限，那這名玩家也可以給與其他玩家該領地的箱子權限，但不能給與建築權限。
* 指令：`/permissiontrust <玩家 ID>`

# 查詢領地權限列表

> 需要物品：{% label info@知道如何打指令的大腦 %} x1

* 步驟 1: 站在要給與領地權限的個人領地上（站在領地範圍內）。
* 步驟 2: 在聊天視窗輸入 `/trustlist`。
* 步驟 3: 打完指令後聊天視窗就會顯示該領地權限列表。訊息大致上如下：
  * {% mctextbox defaultFontColor=aqua %}
      領地權限列表：
      {% mclr gold   %}> [玩家名]{% endmclr %}
      {% mclr yellow %}> [玩家名]{% endmclr %}
      {% mclr green  %}> [玩家名]{% endmclr %}
      {% mclr blue   %}> [玩家名]{% endmclr %}
      {% mclr gold   %}管理{% endmclr %} {% mclr yellow %}建築{% endmclr %} {% mclr green  %}箱子{% endmclr %} {% mclr blue   %}操作{% endmclr %}
    {% endmctextbox %}

# 給與領地權限

> 需要物品：{% label info@知道如何打指令的大腦 %} x1

* 步驟 1: 站在要給與領地權限的個人領地上（站在領地範圍內）。
* 步驟 2: 在聊天視窗輸入 `/trust <玩家ID>`。（或其他領地權限相應的命令）
* 步驟 3: 打完指令後該玩家就會獲得相對應領地權限，可用 `/trustlist` 命令確認。

{% note info %}
可用 public 表示所有玩家。例如： `/trust public`
{% endnote %}

# 移除領地權限

> 需要物品：{% label info@知道如何打指令的大腦 %} x1

## 移除指定玩家在該領地的權限
* 步驟 1: 站在要給與領地權限的個人領地上（站在領地範圍內）。
* 步驟 2: 在聊天視窗輸入 `/untrust <玩家ID>`。
* 步驟 3: 打完指令後就會移除該玩家在該領地的所有權限（涵蓋管理、建築、箱子、操作），可用 `/trustlist` 命令確認。
## 移除所有玩家在該領地的權限
* 步驟 1: 站在要給與領地權限的個人領地上（站在領地範圍內）。
* 步驟 2: 在聊天視窗輸入 `/untrust {% label danger@all %}`。
* 步驟 3: 打完指令後就會移除所有玩家在該領地的所有權限（涵蓋管理、建築、箱子、操作），可用 `/trustlist` 命令確認。

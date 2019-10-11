---
title: 基礎教學
---

# 前置知識

* 名稱都叫告示牌鎖了，當然需要一個告示牌，不管什麼樹種的告示牌都可以使用。
  * 但不保證未來新增的樹種也能使用。
* 告示牌鎖是認 minecraft ID，所以只要換 minecraft ID 就沒辦法開箱子。
  * 如果想換 minecraft ID，請先把要換的 minecraft ID 加到所有的告示牌鎖上。

# 告示牌上鎖

> 需要物品：{% label info@告示牌 %} x1

* 直接把告示牌對著可[上鎖的方塊](/lockettepro/infos.html#能夠上鎖的方塊)按右鍵，就能瞬間上鎖，聊天室會出現以下訊息：
  {% mctextbox defaultFontColor=green %}
    {% mclr gold %}[LockettePro]{% endmclr %} 方塊已經上鎖。
  {% endmctextbox %}
* 告示牌大致上會長成這樣，`{minecraft id}` 的部分會出現自己的 id。
  {% mcsign %}
    [Private]
    {minecraft id}
  {% endmcsign %}

# 新增/刪除/修改使用者

> 需要物品：{% label info@知道如何打指令的大腦 %} x1

## 步驟 1

* 先對著要新增/刪除/修改使用者的告示牌按右鍵來選定告示牌鎖，點右鍵後聊天室會出現以下訊息：
  {% mctextbox defaultFontColor=green %}
    {% mclr gold %}[LockettePro]{% endmclr %} 你選中了一個牌子，輸入/lock 行號 玩家名 來修改它。
  {% endmctextbox %}

## 步驟 2

* 選好告示牌鎖後在聊天室輸入 `/lock [行號] [玩家 id]`，就會在指定行號上出現輸入的內容。
  {% mcsign %}
    第 1 行
    第 2 行
    第 3 行
    第 4 行
  {% endmcsign %}
* 如果是要刪除告示牌上指定行號的使用者，可以輸入 `/lock [行號]`，直接不打 `玩家 id` 就好。
* 以上命令輸入成功之後聊天室會出現：
  {% mctextbox defaultFontColor=green %}
    {% mclr gold %}[LockettePro]{% endmclr %} 牌子已修改。
  {% endmctextbox %}

{% note info %}
### 範例 - 新增/修改使用者

* 比如說在告示牌鎖的{% label danger@第 3 行 %}要新增/修改成 `WooLNinesun` 這個 `玩家 id`，就輸入 `/lock 3 WooLNinesun` 即可。輸入完後{% label danger@第 3 行 %}就會出現 `WooLNinesun`。
  {% mcsign %}
    [Private]
    Apache666
    WooLNinesun
  {% endmcsign %}
{% endnote %}

{% note info %}
### 範例 - 刪除使用者

* 例如要刪除剛剛新增在告示牌鎖{% label danger@第 3 行 %}的 `WooLNinesun`，就輸入 `/lock 3` 即可。
{% endnote %}

{% note info %}
### 所有人都可使用

* 在指令 `/lock [行號] [玩家 id]` 中 `[玩家 id]` 的部分可以輸入 `[Everyone]`，這樣可以開放給所有人使用，但又能保護方塊不被破壞。
{% endnote %}

# 增加更多的使用者

* 聰明的玩家會發現，這樣最多只能有三位玩家使用方塊，別擔心，只要在已經上鎖的方塊其他面再貼(右鍵)一個告示牌，就可以增加新的告示牌鎖。新增上去聊天室會出現：
  {% mctextbox defaultFontColor=green %}
    {% mclr gold %}[LockettePro]{% endmclr %} 額外的用戶牌子已添加。
  {% endmctextbox %}
* 且告示牌鎖上第一行出現 `[More Users]`，新增/刪除/修改使用者的方式一樣是使用 `lock` 指令。
  {% mcsign %}
    [More Users]
  {% endmcsign %}

# 門鎖定保護

* 方式與和其他方塊差不多，但告示牌鎖也可以放置在門的上方的方塊或是下方方塊。
* 門在鎖定時有以下幾個特點：
  * 雙扇門只需要 1 個告示牌鎖就可以成功同時鎖定兩扇門。
  * 門在鎖定後，無法與拉桿等紅石線路做連動。
  * 鐵門在鎖定後也會變成與木門相同，右鍵點擊就可以開關。
  * 被鎖定保護的門，可以設定時間自動關上，在告示牌鎖中加入 [Timer:秒數] 即可。
    {% mcsign %}
      [Private]
      Apache666
      [Timer:5]
    {% endmcsign %}

# 取消告示牌鎖

* 只要把告示牌鎖拆除即可，輕鬆自在無負擔。 ( 但請注意 前置知識 第二點 )

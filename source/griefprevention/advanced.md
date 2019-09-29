---
title: 進階教學
---

# 分割子領地

> 需要物品：{% label info@金鏟 %} x1 + {% label info@知道如何打指令的大腦 %} x1

* 分割出來的子領地，可以獨立於主要領地，額外給與或移除其他玩家的領地權限。
  * 例如花鑽石請人幫忙鋪地，可以把需要鋪地的範圍分割出一塊子領地，
    只有子領地給與幫忙的玩家建築的領地權限。就可以保護好主領地上的建築和財產。

## 步驟 1

在聊天視窗輸入 `/subdivideclaims` 進入子領地分割模式。成功的話聊天室會出現以下句子：
* {% mctextbox defaultFontColor=yellow %}
    進入子領地劃分模式，使用您的金鏟開始分割主領地。如要退出子領地劃分模式，請輸入 /basicclaims。
    點擊連結查看子領地教學：{% mclr aqua %}bit.ly/mcgpsub{% endmclr %}
  {% endmctextbox %}

## 步驟 2

決定好在領地內的分割範圍，不能和其他子領地重疊。如圖中欲分割紅色框框的範圍

{% divbox showimg %}
  {% img /uploads/griefprevention/subclaim_step2.png %}
{% enddivbox %}

## 步驟 3

像新增領地一樣拿金鏟右鍵點擊對角線的兩端點的方塊。
* 點第一下會出現：
  * {% mctextbox defaultFontColor=yellow %}
      子領地劃設模式開始，已選取一角，請繼續拿著金鏟在主領地範圍內想要劃設的矩形範圍的對角右鍵點擊即可完成子領地劃設。
    {% endmctextbox %}
* 點第二下會出現：
  * {% mctextbox defaultFontColor=green %}
      子領地劃設成功！
    {% endmctextbox %}

{% divbox showimg %}
  {% img /uploads/griefprevention/subclaim_step3.png %}
{% enddivbox %}

## 步驟 4

前面步驟都成功完成之後，會出現鐵磚和白色羊毛來標示子領地的大小（範圍），表示已經成功子劃設領地。
* 如果沒看到鐵磚和白色羊毛標示範圍，可以先拿木棒右鍵點擊查詢領地看看是否成功。
* 有成功劃設領地卻沒看到鐵磚和白色羊毛，可以先往上或往下看，有時候會出現在天空或地底的洞窟。

{% divbox showimg %}
  {% img /uploads/griefprevention/subclaim_step4.png %}
{% enddivbox %}

## 注意事項

{% note info %}
以上操作金鏟必須一直拿在手上，不可切換成其他物品，一但切掉就需要重新開始。
* 換句話說，如果第一個點不小心點錯了或反悔不想設置領地，可以把金鏟切換掉重新來過。
{% endnote %}

{% note info %}
* 子領地的領地權限預設會繼承主領地的領地權限，哪邊的權限等級高就用哪邊的。
  * 例如某位玩家在主領地領地權限為：`箱子`，子領地權限為：`操作`，該玩家在子領地會得到 `箱子` 的權限。
* 如果不想讓子領地繼承主領地權限，可以在該子領地上輸入 `/restrictsubclaim` 來取消繼承。
  * 簡單來說，輸入 `/restrictsubclaim` 後子領地的領地權限就不會受到主領地的影響。
  * 例如上面的例子，領地擁有者在子領地輸入 `/restrictsubclaim` 後，該玩家在子領地只會得到 `操作` 的權限。
{% endnote %}

# 驅逐奇怪的玩家

> 需要物品：{% label info@知道如何打指令的大腦 %} x1

* 指令為：`/goc <玩家ID>`，驅逐自己所在領地範圍內的指定玩家
* 被驅逐的玩家必須沒有任何該領地的權限，如果有，先使用 `/untrust <玩家ID>` 來移除該玩家在該領地上的領地權限。

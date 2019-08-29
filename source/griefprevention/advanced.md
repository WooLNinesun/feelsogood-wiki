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
    Subdivsion mode. Use your shovel to create subdivsion in your exising claims. Use /basicClaims to exit.
    Click for Subdivsion Help: {% mclr aqua %}bit.ly/mcgpsub{% endmclr %}
  {% endmctextbox %}

## 步驟 2

決定好在領地內的分割範圍，不能和其他子領地重疊。如圖中欲分割紅色框框的範圍

{% divbox showimg %}
  {% img /uploads/griefprevention/subclaim_step2.png %}
{% enddivbox %}

## 步驟 3

像新增領地一樣拿金鏟右鍵點擊對角線的兩端點的方塊。
* 點第一下會出現：
  * {% mctextbox defaultFontColor=green %}
      Subdivsion corner set! Use the location for the opposite corner of this new subdivsion.
    {% endmctextbox %}
* 點第二下會出現：
  * {% mctextbox defaultFontColor=green %}
      subdivsion created! Use /trust to share it with friends
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

# 驅逐奇怪的玩家

> 需要物品：{% label info@知道如何打指令的大腦 %} x1

* 指令為：`/goc <玩家ID>`，驅逐自己所在領地範圍內的指定玩家
* 被驅逐的玩家必須沒有任何該領地的權限，如果有，先使用 `/untrust <玩家ID>` 來移除該玩家在該領地上的領地權限。

---
title: 基礎教學
---

# 前置知識

* 領地大小（範圍）只管平面的矩形長寬（2D），高度均為頂天立地的 Y = 0~255（紅框內均為保護範圍）。
  {% divbox showimg %}
    {% img /uploads/griefprevention/claim_range_3d.png %}
  {% enddivbox %}
  * 如果看不懂第一條前置知識，這伺服器不適合你居住，請右轉其他伺服器。
* 領地系統主要使用金鏟和木棒兩種物品，只要拿著金鏟，聊天室會出現以下文字表示目前剩下多少領地格數可以劃設。
  {% mctextbox defaultFontColor=yellow %}
    你還有 [xxxxx] 的領地數量可以劃設新領地。
    前往觀看領地教學：{% mclr aqua %}bit.ly/mcgpuser{% endmclr %}
  {% endmctextbox %}

* 個人可劃設的領地格數可以透過線上遊玩時間（非掛機）和鑽石購買（buyclaims）增加。
* 領地系統出現的鑽石磚、黃金磚、螢光石、鐵磚、白色羊毛、紅石原礦及地域岩均為虛假的方塊，沒辦法敲下取得。

# 查詢領地訊息

## 查詢領地的擁有者

> 需要物品：{% label info@木棒 %} x1

* 拿著木棒右鍵想要查詢的方塊，就會在聊天視窗出現查詢結果：
  * 如果那一塊格子屬於某一位玩家的領地會出現：
    * {% mctextbox defaultFontColor=aqua %}
        此位置已由 <玩家ID> 劃設為私人領地。
      {% endmctextbox %}
    * 同時會用金磚和螢光石來標示領地的大小（範圍）
  * 如果那一塊格子不屬於任何玩家的領地會出現：
    * 沒有玩家在此設置領地。

## 查詢自己的領地列表

> 需要物品：{% label info@知道如何打指令的大腦 %} x1

* 在聊天視窗輸入 `/claimlist`，會顯示個人全部的領地，輸入完畢後聊天室窗會出現類似以下訊息。
  {% mctextbox defaultFontColor=yellow %}
    [世界]: x[ xxx ], z[ xxx ] (占用 [ xxx ] 格領地)
    [世界]: x[ xxx ], z[ xxx ] (占用 [ xxx ] 格領地)
    [世界]: x[ xxx ], z[ xxx ] (占用 [ xxx ] 格領地)
    [ xxx ] 遊玩時間加成 + [ xxx ] 額外領地 = [ xxx ] 全部領地
    剩下的領地:
    還剩下 [ xxx ] 格領地。
  {% endmctextbox %}
* 一行一行列出每一塊領地所在的世界名和位置( x[ xxx ], z[ xxx ] )，及該領地的格數。
* 也會表示遊玩時間和購買領地分別格數，兩者加總後的總領地格數，並說明還剩下多少領地格數可以劃設。

# 新增一塊領地

> 需要物品：{% label info@金鏟 %} x1

## 步驟 1

先確定好要保護的領地範圍，拿著金鏟右鍵選擇保護範圍角落的方塊作為第一個點。成功的話聊天室會出現以下句子：
* {% mctextbox defaultFontColor=yellow %}
    Claim corner set! Use the shovel again at the opposite corner to claim a rectangle of land. To cancel, put your shovel away.
  {% endmctextbox %}

{% divbox showimg %}
  {% img /uploads/griefprevention/addclaim_step1.png %}
{% enddivbox %}

## 步驟 2

步驟 1 完成後會出現鑽石磚來表示第一個點的位置，在拿著金鏟右鍵點擊領地範圍對角線的點。成功的話聊天室會出現以下句子：
* {% mctextbox defaultFontColor=yellow %}
    領地劃設成功! 可使用 /trust 來給予朋友建造權限。
  {% endmctextbox %}

{% divbox showimg %}
  {% img /uploads/griefprevention/addclaim_step2.png %}
{% enddivbox %}

## 步驟 3

前面步驟都成功完成之後，會出現金磚和螢光石來標示領地的大小（範圍），表示已經成功劃設領地。
* 如果沒看到金磚和螢光石標示範圍，可以先拿木棒查詢領地看看是否成功。
* 有成功劃設領地卻沒看到金磚和螢光石，可以先往上或往下看，有時候會出現在天空或地底的洞窟。

{% divbox showimg %}
  {% img /uploads/griefprevention/addclaim_step3.png %}
{% enddivbox %}

## 注意事項

{% note info %}
領地最少要劃設 100 格且長寬都要大於 5 格：
* 想要劃設的領地格數沒超過 100 格，聊天室會出現：
  * {% mctextbox defaultFontColor=red %}
      領地範圍不足。 領地最小需 100 格以上。
    {% endmctextbox %}
* 想要劃設的領地長或寬的格數沒大於 5 格，聊天室會出現：
  * {% mctextbox defaultFontColor=red %}
      This claim would be too small. Any claim must be at least 5 blocks wide.
    {% endmctextbox %}
{% endnote %}

{% note info %}
以上操作金鏟必須一直拿在手上，不可切換成其他物品，一但切掉就需要重新開始。
* 換句話說，如果第一個點不小心點錯了或反悔不想設置領地，可以把金鏟切換掉重新來過。
{% endnote %}

{% note info %}
如果拿金鏟右鍵點擊到別人領地範圍的方塊，會出現地域岩和紅石原礦來標示別人的領地大小（範圍）。
{% divbox showimg %}
  {% img /uploads/griefprevention/wrongclaim_step1.png %}
{% enddivbox %}
{% endnote %}

# 修改領地大小

> 需要物品：{% label info@金鏟 %} x1

## 步驟 1

先拿出木棒查詢領地範圍，拿著金鏟對擴張/縮小方向的螢光石點右鍵，被點擊的螢光石會消失表示成功選中。
* 成功的話聊天室會出現以下句子：
  * {% mctextbox defaultFontColor=yellow %}
      Resizing clam, Use your shovel again at the new location for this corner.
    {% endmctextbox %}
* 例如圖中想要往右下擴張領地兩格，就要拿著金鏟右鍵點擊右下角落的螢光石。（右 1）
* 如果成功點中螢光石進入修改領地範圍模式，螢光石會消失，而不是出現鑽石磚。

## 步驟 2

完成步驟 1 在拿著金鏟右鍵點擊想要往外擴張或往內縮小的範圍（右 2），如圖。成功的話聊天室會出現以下句子：
* {% mctextbox defaultFontColor=green %}
    Claim resized. [ xxxxxx ] available claim blocks remaining
  {% endmctextbox %}

{% divbox showimg %}
  {% img /uploads/griefprevention/modifyclaim_step2.png %}
{% enddivbox %}

## 步驟 3

前面步驟都成功完成之後，就會再次出現金磚和螢光石來標示新的領地的大小（範圍），表示已經成功修改領地範圍。
* 如果沒看到金磚和螢光石標示新的範圍，可以先拿木棒查詢領地看看是否成功。
* 有成功修改領地範圍卻沒看到金磚和螢光石，可以先往上或往下看，有時候會出現在天空或地底的洞窟。

{% divbox showimg %}
  {% img /uploads/griefprevention/modifyclaim_step3.png %}
{% enddivbox %}

## 注意事項

{% note info %}
以上操作金鏟必須一直拿在手上，不可切換成其他物品，一但切掉就需要重新開始。
* 換句話說，如果第一個點不小心點錯了或反悔不想設置領地，可以把金鏟切換掉重新來過。
{% endnote %}

# 刪除領地

> 需要物品：{% label info@知道如何打指令的大腦 %} x1

有兩種刪除的指令，分別為：

* `/abandonallclaims`，刪除所有屬於自己的領地
  * 請慎用，如果因為個人操作失誤，導致自己所有領地消失，管理員不會處理。
* `/abandonclaim`，刪除自己的所站得那一塊領地
  * 步驟 1: 站在要刪除的個人領地上（站在領地範圍內）。
  * 步驟 2: 在聊天視窗輸入 `/abandonclaim`。
  * 步驟 3: 打完指令後領地就會被刪除了，成功會出現：
    * {% mctextbox defaultFontColor=green %}
        Claim abandoned. You now have [ xxxxxx ] available claim block.
      {% endmctextbox %}
  * 金磚和螢光石可能會殘留在地上，都是暫時的，會自己消失。
